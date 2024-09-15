# Description
Package for updating ionic, angular-capacitor projects

# Install
`npm install versionp -g`
`npm install versionp --save-dev`

# Config
## Android
```
{
    "files":[
        {
            "platform": "android",
            "path": "android/app/build.gradle"
        }
    ]
}
```

# Use
```
versionp major
```
```
versionp minor
```
```
versionp patch
```
