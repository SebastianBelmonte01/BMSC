import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import BancaDigital from './Pages/BancaDigital';
import BancaFisica from './Pages/BancaFisica';
import Movimientos from './Pages/Movimientos';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/" element= {<Main />} />
        <Route exact path ="/BancaDigital" element= {<BancaDigital />} />
        <Route exact path ="/BancaFisica" element= {<BancaFisica />} />
        <Route exact path ="/Movimientos" element= {<Movimientos />} />
      </Routes>
    </Router>
  );
}

export default App;
