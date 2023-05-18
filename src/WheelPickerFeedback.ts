import type IWheelPickerFeedback from './IWheelPickerFeedback';

class WheelPickerFeedback implements IWheelPickerFeedback {
  public getImpact = () => {};
  public getSound = () => {};
  public getSoundAndImpact = () => {};
}

export default new WheelPickerFeedback();
