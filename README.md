# transparent-modal-reproducible

This is a Expo project to reproduce the transparent modal invisible problem.

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Scan with [Expo Go](https://expo.dev/go)

## How to reproduce

Only happened on Android

1. Go To STACK0
2. Go To STACK1 and go back to STACK0
3. Go To STACK2 and go back to STACK0
4. Press TRANSPARENT MODAL IN STACK0

you can see the transparent modal is mount with console.log but modal is invisible, also the modal still can be touch and press.

This bug will not happened if you start action 2 from the root stack

## Tested Devices

Google Pixel 7a (Android 15)
