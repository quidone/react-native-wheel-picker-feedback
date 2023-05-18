
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNWheelPickerFeedbackSpec.h"

@interface WheelPickerFeedback : NSObject <NativeWheelPickerFeedbackSpec>
#else
#import <React/RCTBridgeModule.h>

@interface WheelPickerFeedback : NSObject <RCTBridgeModule>
#endif

@end
