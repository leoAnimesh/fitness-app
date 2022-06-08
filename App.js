import React from 'react';
import { StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/app/store';
import Routes from './Routes';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={DefaultTheme}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
});
