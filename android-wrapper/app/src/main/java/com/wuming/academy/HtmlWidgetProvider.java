package com.wuming.academy;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.widget.RemoteViews;

public final class HtmlWidgetProvider extends AppWidgetProvider {
    @Override
    public void onUpdate(
            Context context,
            AppWidgetManager appWidgetManager,
            int[] appWidgetIds
    ) {
        for (int appWidgetId : appWidgetIds) {
            RemoteViews views = new RemoteViews(
                    context.getPackageName(),
                    R.layout.widget_html_entry
            );

            Intent openApp = new Intent(context, WebActivity.class);
            openApp.setAction(Intent.ACTION_VIEW);

            PendingIntent clickIntent = PendingIntent.getActivity(
                    context,
                    appWidgetId,
                    openApp,
                    PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
            );

            views.setOnClickPendingIntent(R.id.widget_root, clickIntent);
            appWidgetManager.updateAppWidget(appWidgetId, views);
        }
    }
}
