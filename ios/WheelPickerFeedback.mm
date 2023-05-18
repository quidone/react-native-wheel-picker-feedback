#import "WheelPickerFeedback.h"
#import <AudioToolbox/AudioServices.h>

@implementation WheelPickerFeedback
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getImpact)
{
    UIImpactFeedbackGenerator *impactFeedBack = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
    [impactFeedBack prepare];
    [impactFeedBack impactOccurred];
}
RCT_EXPORT_METHOD(getSound)
{
    if (@available(iOS 10.0, *)) {
        AudioServicesPlaySystemSoundWithCompletion(1157, nil);
    }
}
RCT_EXPORT_METHOD(getSoundAndImpact)
{
    if (@available(iOS 10.0, *)) {
        AudioServicesPlaySystemSoundWithCompletion(1157, nil);
    }
    UIImpactFeedbackGenerator *impactFeedBack = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];
    [impactFeedBack prepare];
    [impactFeedBack impactOccurred];
}


// Don't compile this code when we build for the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeWheelPickerFeedbackSpecJSI>(params);
}
#endif

@end
