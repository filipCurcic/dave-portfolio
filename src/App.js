import './App.scss';
import Header from './components/ui/Header';
import HeroSection from './components/ui/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import Panoramas from './pages/Panoramas';

function App() {
  return (
    <Router>
      <div className="App flex flex-fd-c">
        <Header />
        <Switch>
          <Route exact path="/" component={HeroSection} />
          <Route exact path="/photography" component={Photography} />
          <Route exact path="/videography" component={Videography} />
          <Route exact path="/panorama" component={Panoramas} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
