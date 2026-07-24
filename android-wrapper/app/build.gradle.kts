plugins {
    id("com.android.application")
}

android {
    namespace = "com.wuming.academy"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.wuming.academy"
        minSdk = 23
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    sourceSets {
        getByName("main").assets.srcDir(layout.buildDirectory.dir("generated/webAssets"))
    }
}

/*
 * The web application remains at the repository root as the only source of truth.
 * This task packages those files into the APK at build time; no HTML is duplicated
 * in the Android source tree or embedded in Java code.
 */
val syncWebAssets by tasks.registering(Sync::class) {
    val webRoot = rootProject.projectDir.parentFile

    from(webRoot) {
        include("index.html")
        include("games.html")
        include("games.js")
        include("favicon.svg")
        include("data/**")
        include("assets/**")
    }

    into(layout.buildDirectory.dir("generated/webAssets"))
}

tasks.named("preBuild").configure {
    dependsOn(syncWebAssets)
}
