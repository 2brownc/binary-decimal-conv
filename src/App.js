import { Container, Row } from 'react-bootstrap';

import logo from "./logo.svg";
import "./App.css";
import ConverterForm from "./components/Converter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Binary - Decimal Converter</h1>
        <ConverterForm />
      <Footer />
    </div>
  );
}

export default App;
