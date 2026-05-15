import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import React, { useEffect } from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { store } from './src/redux/store';

function AppContent() {
  // const isInitializing = useSelector((state: any) => state.auth.isInitializing);

  const isDarkMode = useColorScheme() === 'dark';

  // useEffect(() => {
  //   store.dispatch(loadTokensFromStorage());
  //   SystemNavigationBar.setNavigationColor('transparent'); // use this
  // }, []);

  // if (isInitializing) {
  //   return (
  //     <View style={styles.loader}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}
