import { createTheme } from '@mui/material/styles';

const colorPalette = {
  app: {
    main: '#292946',
    primary: '#292946',
    secondary: '#16162A',
    thriary: '#494980',
  },
  text: {
    main: '#F3F3F3',
    primary: '#F3F3F3',
    secondary: '#8E8EA3',
    thriary: '#818191',
  },
  accent: {
    main: '#5C7AE5',
  },
};

const myTheme = createTheme({
  palette: colorPalette,
  typography: {
    fontFamily: ['Poppins', 'Roboto'].join(','),
  },
});

export default myTheme;
