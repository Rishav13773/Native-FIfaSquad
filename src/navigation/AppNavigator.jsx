import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import PitchScreen from '../screens/PitchScreen';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  // const { isAuthenticated, loading } = useSelector(state => state.auth);

  // useEffect(() => {
  //   const interceptor = API.interceptors.response.use(
  //     res => res,
  //     err => {
  //       if (err.isSessionExpired) {
  //         dispatch(logoutUser());
  //       }
  //       return Promise.reject(err);
  //     },
  //   );
  //   return () => API.interceptors.response.eject(interceptor);
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pitch"
            component={PitchScreen}
            options={{ headerShown: false }}
          />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
