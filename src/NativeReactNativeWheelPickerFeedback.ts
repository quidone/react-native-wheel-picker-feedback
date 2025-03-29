import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  triggerImpact: () => void;
  triggerSound: () => void;
  triggerSoundAndImpact: () => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'ReactNativeWheelPickerFeedback'
);
