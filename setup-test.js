jest.mock("react-native-reanimated", () =>
  require('react-native-reanimated/mock')
);
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
