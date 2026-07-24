# 无名学苑 Android 离线入口

该工程为仓库根目录网页提供 Android 启动图标、桌面 Widget 和本地 WebView
容器。网页仍以仓库根目录文件为唯一源码，Android Java 文件中没有内嵌 HTML。

## 网页资源路径

`app/build.gradle.kts` 中的 `syncWebAssets` 任务在构建前按路径打包：

- `../index.html`
- `../games.html`
- `../games.js`
- `../favicon.svg`
- `../data/**`
- `../assets/**`

生成文件位于 `app/build/generated/webAssets`，该目录不应提交。修改根目录网页后
重新构建 APK 即可，无需同步两份源码。

WebView 的固定入口为：

```text
https://appassets.androidplatform.net/assets/index.html
```

这个地址由 `WebActivity` 拦截并映射到 APK 内的 assets，不会访问网络。

## 构建

使用带有 Android SDK 35 和 JDK 17 的 Android Studio 打开本目录，等待 Gradle
同步后运行 `app`。也可以在配置好环境后使用仓库内固定为 8.9 的 Gradle Wrapper：

```text
./gradlew :app:assembleDebug
```

Debug APK 输出到：

```text
app/build/outputs/apk/debug/app-debug.apk
```

安装后既可以直接点击应用图标，也可以在系统桌面的“小组件 / 安卓小部件”中添加
2×2 的“无名学苑 - 智能学习系统”入口。

## 离线与安全

- Manifest 不申请网络权限。
- WebView 仅为 `appassets.androidplatform.net/assets/` 提供 APK 内资源。
- 外部 HTTP/HTTPS 链接交给系统浏览器，不在应用 WebView 内加载。
- 本地文件访问和跨文件 URL 访问均关闭。
