import Navigation from './components/navigation';
import Hero from './components/hero';
import Details from './components/details';
import Chart from './components/chart';
import Roadmap from './components/roadmap';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Details />
      <Roadmap />
      <Chart />
    </div>
  );
}

export default App;
