interface IWheelPickerFeedback {
  getSound: () => void;
  getImpact: () => void;
  getSoundAndImpact: () => void;
}

export default IWheelPickerFeedback;
