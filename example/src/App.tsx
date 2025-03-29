import {Button, StyleSheet, View} from 'react-native';
import WheelPickerFeedback from '@quidone/react-native-wheel-picker-feedback';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title={'Impact'}
        touchSoundDisabled={true}
        onPress={() => WheelPickerFeedback.triggerImpact()}
      />
      <Button
        title={'Sound'}
        touchSoundDisabled={true}
        onPress={() => WheelPickerFeedback.triggerSound()}
      />
      <Button
        title={'Sound and impact'}
        touchSoundDisabled={true}
        onPress={() => WheelPickerFeedback.triggerSoundAndImpact()}
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
