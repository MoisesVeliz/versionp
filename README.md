# Description
Package for updating Ionic, Angular-Capacitor projects. This package allows you to easily manage and update the version of your project.

# Installation
You can install the package globally and as a development dependency using the following commands:

```bash
npm install versionp -g
npm install versionp --save-dev
```
# Configuration

## Android
To configure the package for Android, add the following configuration to your project's configuration file:

```bash
{
    "files":[
        {
            "platform": "android",
            "path": "android/app/build.gradle"
        }
    ]
}
```
# Usage
You can use the package to update the version of your project using the following commands:

```bash
versionp major
versionp minor
versionp patch
```
These commands will increment the major, minor, or patch version of your project, respectively.

# Repository
You can find the project on GitHub:

<!-- README for NPM; the one for GitHub is in .github directory. -->

<badges>

<a brief description>

Please refer to the [GitHub README](https://github.com/MoisesVeliz/versionp#readme) for full documentation.




