package com.wuming.academy;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.MimeTypeMap;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;

@SuppressWarnings("deprecation")
public final class WebActivity extends Activity {
    private static final String ASSET_HOST = "appassets.androidplatform.net";
    private static final String ASSET_PREFIX = "/assets/";
    private static final String HOME_PATH =
            "https://" + ASSET_HOST + ASSET_PREFIX + "index.html";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().setStatusBarColor(Color.rgb(15, 17, 21));
        getWindow().setNavigationBarColor(Color.rgb(15, 17, 21));

        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(15, 17, 21));
        setContentView(webView);

        configureWebView();

        if (savedInstanceState == null) {
            webView.loadUrl(HOME_PATH);
        } else {
            webView.restoreState(savedInstanceState);
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void configureWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(
                    WebView view,
                    WebResourceRequest request
            ) {
                WebResourceResponse localResponse = loadLocalAsset(request.getUrl());
                return localResponse != null
                        ? localResponse
                        : super.shouldInterceptRequest(view, request);
            }

            @Override
            public boolean shouldOverrideUrlLoading(
                    WebView view,
                    WebResourceRequest request
            ) {
                Uri uri = request.getUrl();
                if (isLocalAssetUri(uri)) {
                    return false;
                }

                String scheme = uri.getScheme();
                if ("http".equalsIgnoreCase(scheme) || "https".equalsIgnoreCase(scheme)) {
                    try {
                        startActivity(new Intent(Intent.ACTION_VIEW, uri));
                    } catch (RuntimeException ignored) {
                        // Keep the offline application usable when no browser is available.
                    }
                }
                return true;
            }
        });
    }

    private WebResourceResponse loadLocalAsset(Uri uri) {
        if (!isLocalAssetUri(uri)) {
            return null;
        }

        String encodedPath = uri.getEncodedPath();
        if (encodedPath == null || encodedPath.length() <= ASSET_PREFIX.length()) {
            return null;
        }

        String assetPath = Uri.decode(encodedPath.substring(ASSET_PREFIX.length()));
        if (!isSafeAssetPath(assetPath)) {
            return null;
        }

        try {
            InputStream stream = getAssets().open(assetPath);
            return new WebResourceResponse(mimeTypeFor(assetPath), "UTF-8", stream);
        } catch (IOException ignored) {
            return null;
        }
    }

    private static boolean isLocalAssetUri(Uri uri) {
        return uri != null
                && "https".equalsIgnoreCase(uri.getScheme())
                && ASSET_HOST.equalsIgnoreCase(uri.getHost())
                && uri.getPath() != null
                && uri.getPath().startsWith(ASSET_PREFIX);
    }

    private static boolean isSafeAssetPath(String path) {
        return !path.isEmpty()
                && !path.startsWith("/")
                && !path.contains("..")
                && !path.contains("\\");
    }

    private static String mimeTypeFor(String path) {
        String extension = MimeTypeMap.getFileExtensionFromUrl(path);
        String mimeType = MimeTypeMap.getSingleton()
                .getMimeTypeFromExtension(extension.toLowerCase(Locale.ROOT));

        if (mimeType != null) {
            return mimeType;
        }
        if ("json".equalsIgnoreCase(extension)) {
            return "application/json";
        }
        if ("js".equalsIgnoreCase(extension)) {
            return "application/javascript";
        }
        return "application/octet-stream";
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.stopLoading();
            webView.setWebViewClient(null);
            webView.removeAllViews();
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
