import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Welcome from './components/Welcome';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </HashRouter>
  );
}

export default App;