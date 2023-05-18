import {NativeModules} from 'react-native';
import type IWheelPickerFeedback from './IWheelPickerFeedback';

const WheelPickerFeedback = NativeModules.WheelPickerFeedback;
if (WheelPickerFeedback == null) {
  throw new Error(
    `The package '@quidone/react-native-wheel-picker-feedback' doesn't seem to be linked. Make sure: \n\n` +
      "- You have run 'pod install'\n" +
      '- You rebuilt the app after installing the package\n' +
      '- You are not using Expo Go\n',
  );
}

export default WheelPickerFeedback as IWheelPickerFeedback;
