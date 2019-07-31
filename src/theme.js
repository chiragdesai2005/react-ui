import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
        main: '#f44336',
      }
  },
  status: {
    danger: 'orange',
  },
});

export default theme;