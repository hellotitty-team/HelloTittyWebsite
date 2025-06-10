import Navigation from './components/navigation';
import Hero from './components/hero';
import Details from './components/details';
import Chart from './components/chart';
import Roadmap from './components/roadmap';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Details />
      <Roadmap />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;
