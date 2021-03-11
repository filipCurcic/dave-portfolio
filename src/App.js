import './App.scss';
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import HeroSection from './components/ui/HeroSection';

function App() {
  return (
    <div className="App flex flex-fd-c">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
