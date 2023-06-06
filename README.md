[AUTHOR]: https://github.com/rozhkovs
[Q-WHEEl-PICKER]: https://github.com/quidone/react-native-wheel-picker

# 🙌 React Native Wheel Picker Feedback 🙌
<p>
  <a href="https://github.com/quidone/react-native-wheel-picker-feedback/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native Wheel Picker Feedback is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/@quidone/react-native-wheel-picker-feedback">
    <img src="https://img.shields.io/npm/v/@quidone/react-native-wheel-picker-feedback?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
</p>

It provides native sound and haptic feedback from the wheel picker. For platform other than iOS, nothing will happen.

This may be used with [@quidone/react-native-wheel-picker][Q-WHEEl-PICKER]

## Installation

```sh
yarn add @quidone/react-native-wheel-picker-feedback
```

## Usage

```ts
import WheelPickerFeedback from '@quidone/react-native-wheel-picker-feedback';

WheelPickerFeedback.triggerImpact();
WheelPickerFeedback.triggerSound();
WheelPickerFeedback.triggerSoundAndImpact()
```

## ⚡️ Try it out

```shell
git clone git@github.com:quidone/react-native-wheel-picker-feedback.git
cd react-native-wheel-picker-feedback
yarn install
cd example && yarn install && yarn ios
```

## 👨‍💻 Author
[Sergey Rozhkov][AUTHOR]

## 🎯 Was it helpful?
Do you like it and find it helpful? You can help this project in the following way:
- ⭐ Put the star.
- 💡 Suggest your ideas.
- 😉 Open a founded issue.

## 🤝 Contributing
See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## 📄 License
Quidone React Native Wheel Picker Feedback is MIT licensed, as found in the [LICENSE](LICENSE) file.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
