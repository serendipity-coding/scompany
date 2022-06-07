import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
// components
import Nav from './components/Nav';
import Home from './pages/home/Home';
// styles
import './App.css';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme
} from '@mui/material/styles';
import Company from './pages/company/Company';

// theme
const scompanyTheme = createTheme({
  palette: {
    primary: {
      main: '#FA7041'
    },
    secondary: {
      main: '#fff'
    },
    tertiary: {
      main: '#1B1E26'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.54)',
      secondary: '#EF0B0B',
      disabled: '#757575'
    },
    action: {
      disabledBackground: '#fff'
    }
  },
  action: { disabled: 'white', disabledBackground: '#C7C7C7' },
  typography: {
    fontFamily: 'Roboto, Arial, Helvetica',
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 900,
    button: {
      textTransform: 'none',
      borderRadius: '10px',
      fontSize: '.9rem',
      letterSpacing: '0rem',
      padding: '.25rem'
    }
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={scompanyTheme}>
        <div className="App">
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/companies/:companyName" element={<Company />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
