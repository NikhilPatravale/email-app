import { ThemeProvider } from '@mui/material';
import './App.css';
import { customTheme } from './Theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';

function App(props) {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <MainContainer />
      </ThemeProvider>
    </Provider>
  );
}


export default App;
