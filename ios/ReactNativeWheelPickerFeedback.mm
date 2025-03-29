#import "ReactNativeWheelPickerFeedback.h"
#import <AudioToolbox/AudioServices.h>

@implementation ReactNativeWheelPickerFeedback
RCT_EXPORT_MODULE()

- (void)triggerImpact {
    UIImpactFeedbackGenerator *impactFeedBack = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
    [impactFeedBack prepare];
    [impactFeedBack impactOccurred];
}

- (void)triggerSound {
    if (@available(iOS 10.0, *)) {
        AudioServicesPlaySystemSoundWithCompletion(1157, nil);
    }
}

- (void)triggerSoundAndImpact {
    if (@available(iOS 10.0, *)) {
        AudioServicesPlaySystemSoundWithCompletion(1157, nil);
    }
    UIImpactFeedbackGenerator *impactFeedBack = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
    [impactFeedBack prepare];
    [impactFeedBack impactOccurred];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeReactNativeWheelPickerFeedbackSpecJSI>(params);
}

@end
