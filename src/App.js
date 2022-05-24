import { Container, Row } from 'react-bootstrap';

import logo from "./logo.svg";
import ConverterForm from "./components/Converter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <h1 className="heading">
    Binary - Decimal Converter
    </h1>
      <ConverterForm />
      <Footer />
    </>
  );
}

export default App;
