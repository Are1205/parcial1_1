import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import imagen from './assets/banner.png';
import LoginForm from './components/login';
import ListVehiculos from './components/listvehiculos';
import { Container, Row } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


function App() {
  return (
    <IntlProvider locale="es" messages={localeEsMessages}>
      <BrowserRouter>
        <Container>
          <Row className = 'row-titulo'>
            <h1 className='titulo'>TuSegundazo.com</h1>
          </Row>
          <Row className = 'row-imagen'>
            <img src={imagen} alt='imagen' className='imagen'/>
          </Row>
          <Row className="content">
            <Routes>
              <Route path='/' element={<LoginForm />} />
              <Route path='/vehiculos' element={<ListVehiculos />} />
            </Routes>
          </Row>
          <Row className="footer">
            <p className="Regular">Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
          </Row>
        </Container>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
