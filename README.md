# transparent-modal-reproducible

This is a Expo project to reproduce the transparent modal invisible problem.

Issue still persist after update react-native-screens to 4.6.0

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app with development build

   ```bash
   yarn android 
   ```

   or

   ```bash
   npx expo run:android
   ```

3. Scan with [Expo Go](https://expo.dev/go)

## How to reproduce

Only happened on Android

1. Go To STACK0
2. Go To STACK1 and go back to STACK0
3. Go To STACK2 and go back to STACK0
4. Press TRANSPARENT MODAL IN STACK0

You can see the transparent modal is mount with Toast, but modal is invisible, also the modal still can be touch and press.

If facing c++ error, rename project folder to shorter name

### Screens version

4.6.0

### React Native version

0.76.5

### Platforms

Android

### JavaScript runtime

JSC

### Workflow

Expo

### Architecture

Fabric (New Architecture)

### Build type

Debug mode

### Device

Both Android emulator and Physical device

### Device model

Pixel 7a
