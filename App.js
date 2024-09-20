import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignupScreen} from './screens';

const App = () => {
  return (
    <SafeAreaProvider>
      <SignupScreen />
    </SafeAreaProvider>
  );
};
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
