import theme from '../../styles/themes';

const initState = {
  isDark: true,
  ...theme.dark,
};

export const themeReducers = (state = initState, action) => {
  switch (action.type) {
    case 'THEME_TOGGLE':
      const isDark = !state.isDark;
      const returnTheme = isDark ? theme.dark : theme.light;

      return {
        ...state,
        isDark,
        ...returnTheme,
      };

    default:
      return state;
  }
};
