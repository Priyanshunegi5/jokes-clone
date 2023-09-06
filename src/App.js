import './App.css';
import Hero from './Hero';
import Header from './Header';
import ModelContextProvider from './Contexts/ModelContext';

function App() {
  return (
    <ModelContextProvider>
      <Header />
      <Hero />
    </ModelContextProvider>
  );
}

export default App;
