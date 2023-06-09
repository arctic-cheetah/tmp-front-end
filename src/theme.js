import { red } from '@material-ui/core/colors';

export const themes = {
  type: 'light',
  light: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  dark: {
    type: 'dark',
    primary: {
      main: '#77adf7',
    },
    secondary: {
      main: '#73acfa',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#303030',
    },
  }
}
