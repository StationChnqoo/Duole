import { trigger } from 'react-native-haptic-feedback';

export const vibrate = () => {
  // Optional configuration
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  // Trigger haptic feedback
  trigger('impactLight', options);
};
