# Description
Package for updating Ionic, Angular-Capacitor projects. This package allows you to easily manage and update the version of your project.

# Installation
You can install the package globally and as a development dependency using the following commands:

´´´
npm install versionp -g
npm install versionp --save-dev
´´´
# Configuration

## Android
To configure the package for Android, add the following configuration to your project's configuration file:

´´´
{
    "files":[
        {
            "platform": "android",
            "path": "android/app/build.gradle"
        }
    ]
}
´´´
# Usage
You can use the package to update the version of your project using the following commands:

´´´
versionp major
versionp minor
versionp patch
´´´
These commands will increment the major, minor, or patch version of your project, respectively.