import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import { GlobalStyle } from './styles/globalStyle';
import { AppProvider } from './contexts/appContext';
import Challenge from './pages/challenge';



function App() {

  return (

      <AppProvider>
      {/* <GlobalStyle/> */}
      
        <Home/>
        </AppProvider>

  );
}

export default App;
