
import { Outlet } from 'react-router-dom';
import './App.css';
import AppBar from './scenes/global/AppBar';
import Banner from './scenes/global/Banner';
import Copyright from './scenes/global/Copyright';
import NavBar from './scenes/global/NavBar';
import Footer from './scenes/global/Footer';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import Store from './state/Store';
function App() {
  return (
   <div>
    <Provider store={Store}>
    <AppBar/>
    <div className="container">
      <div id='gototop'></div>
      <Banner/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
    <Copyright/>
    </Provider>
   </div>
  );
}

export default App;
