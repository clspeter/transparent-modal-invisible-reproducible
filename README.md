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

3. Scan With Expo Go App

## How to reproduce

1. Go To STACK0
2. Go To STACK1 and go back to STACK0
3. Go To STACK2 and go back to STACK0
4. Press TRANSPARENT MODAL IN STACK0

you can see the transparent modal is mount in console.log but modal is invisible, also the modal can be press

This bug will not happened if you start action 2 from the root stack
