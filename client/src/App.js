import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import './App.css';
import Feed from './components/feed/Feed';
import MessageContainer from './components/message-container/MessageContainer';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import CustomStackWrapper from './components/styledcomps/CustomStackWrapper';
import { customTheme } from './Theme';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Box>
          <Navbar />
          <CustomStackWrapper>
            <Sidebar />
            <Feed />
            <MessageContainer />
          </CustomStackWrapper>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
