import * as React from 'react';

import {Button, StyleSheet, View} from 'react-native';
import WheelPickerFeedback from '@quidone/react-native-wheel-picker-feedback';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title={'Impact'}
        onPress={() => WheelPickerFeedback.getImpact()}
      />
      <Button title={'Sound'} onPress={() => WheelPickerFeedback.getSound()} />
      <Button
        title={'Sound and impact'}
        onPress={() => WheelPickerFeedback.getSoundAndImpact()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {
    height: 50,
  },
});
