import type IWheelPickerFeedback from './IWheelPickerFeedback';

class WheelPickerFeedback implements IWheelPickerFeedback {
  public triggerImpact = () => {};
  public triggerSound = () => {};
  public triggerSoundAndImpact = () => {};
}

export default new WheelPickerFeedback();
