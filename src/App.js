import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from './components/FormPage';
import Home from './components/Home';
import AppHeader from './components/AppHeader';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
