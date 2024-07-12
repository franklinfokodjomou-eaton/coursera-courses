npx create-expo-app@latest
export NODE_TLS_REJECT_UNAUTHORIZED=0
npm start
npm run reset-project


npm install --global eas-cli && npx create-expo-app sampleproject && cd sampleproject && eas init --id a22ec3c8-ae0f-4813-b2ce-7c3c9c8339ff

npm config set proxy http://proxy.emea.etn.com:8080
npm config set https-proxy http://proxy.emea.etn.com:8080

export NODE_EXTRA_CA_CERTS=/path/to/your/certificate.pem

## Core components
- View
- Text
- Image
- TextInput
- ScrollView

## Community components
- React Navigation
- React Native Screens
- React Native Maps
- React Native Video

## The View components
- Styling
- Flexbox
- Touch handling
- Accessibility controls

## The Text component
- Styling
- Nesting
- Touch handling