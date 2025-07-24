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

/**
 *
 * @param length
 * @returns
 */
export const uuid = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let result = '';
  for (let i = 0; i < 11; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    result += chars.charAt(randIndex);
  }
  return result;
};
