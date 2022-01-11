jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useRoute: jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  }
})

jest.mock('@react-navigation/bottom-tabs', () => {
  const actualNav = jest.requireActual('@react-navigation/bottom-tabs')
  return {
    ...actualNav,
    createBottomTabNavigator: () => ({
      Navigator: () => null,
      Screen: () => null,
    }),
  }
})

jest.mock('@expo/vector-icons/AntDesign', () => {
  return {
    createIconSet: jest.fn(),
  }
})

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => ({ state: { username: 'raphael' } }),
  }
})
