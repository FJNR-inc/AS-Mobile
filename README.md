# Art Souterrain mobile app

This mobile app is based on [NativeScript](https://docs.nativescript.org/)

## How to begin

If you're new with Nativescript, feel free to subscribe to the [community Slack channel](somenativescriptcommunity.slack.com) in order to find NativeScript developers and users. There is literally hundred of showcases and good questions.

NativeScript have some [code samples](https://market.nativescript.org/?tab=samples&framework=all_frameworks&category=all_samples) you can edit and try directly online, it's a good way to start and rampup.

If you need, NativeScript have a page that list all the available [plugins](https://market.nativescript.org/?tab=plugins) in the NativeScript's community.
## How to publish a new release

Here is the command to create a new bundle:

```
tns build android --clean --release --key-store-path my-release-key.keystore --key-store-password <-secret password-> --key-store-alias artSouterrain --key-store-alias-password <- secret password -> --aab
```

**Notes:**
1. Password is available in the password manager of FJNR
2. You can found the command's documentation on [this page](https://docs.nativescript.org/tooling/docs-cli/project/testing/build-android#tns-build-android)
