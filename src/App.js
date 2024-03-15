import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import imagen from './assets/banner.png';
import LoginForm from './components/login';
import ListVehiculos from './components/listvehiculos';
function App() {
  return (
    <BrowserRouter>
    <h1 className='titulo'>TuSegundazo.com</h1>
    <img src={imagen} alt="imagen" />
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/vehiculos" element={<ListVehiculos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
