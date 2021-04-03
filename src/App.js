import './App.scss';
import Header from './components/ui/Header';
import HeroSection from './components/ui/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Panoramas from './pages/Panoramas';
import Login from './pages/Login';
import Auth from './auth/Auth';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Auth>
      <Router>
        <div className="App flex flex-fd-c">
          <Header />
          <Switch>
            <Route exact path="/" component={HeroSection} />
            <Route exact path="/photography" component={Photography} />
            <Route exact path="/videography" component={Videography} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/panorama" component={Panoramas} />
            <Route exact path="/shop" component={ComingSoon} />
            <Route exact path="/N8dP7l6Mslzof05" component={Login} />
            <Route exact path="/vcRBbuk8UxAF3Ok" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </Auth>
  );
}

export default App;
