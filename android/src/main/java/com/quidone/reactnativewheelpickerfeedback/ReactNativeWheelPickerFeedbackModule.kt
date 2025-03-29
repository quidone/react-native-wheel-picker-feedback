package com.quidone.reactnativewheelpickerfeedback

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = ReactNativeWheelPickerFeedbackModule.NAME)
class ReactNativeWheelPickerFeedbackModule(reactContext: ReactApplicationContext) :
  NativeReactNativeWheelPickerFeedbackSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun triggerImpact() {}
  override fun triggerSound() {}
  override fun triggerSoundAndImpact() {}

  companion object {
    const val NAME = "ReactNativeWheelPickerFeedback"
  }
}
