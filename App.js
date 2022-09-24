import React from 'react';
import { Provider, useSelector } from 'react-redux';
import Navigation from './src/Navigation/Stack';
import { myStore } from './src/Redux/Store/store';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';

const Main = () => {
  const token = useSelector(state => state.AuthReducer.authToken)

  return (
    <NavigationContainer>
      {
        token == null ?
          <AuthStack />
          :
          <Navigation />
      }
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={myStore}>
      <Main />
    </Provider>
  );
}