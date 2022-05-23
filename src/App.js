import logo from "./logo.svg";
import "./App.css";
import ConverterForm from "./components/Converter";

function App() {
  return (
    <div className="App">
      <h1>Binary - Decimal Converter</h1>
      <div>
        <ConverterForm />
      </div>
    </div>
  );
}

export default App;
