import React, { useState } from "react";
import { Form,
  InputGroup,
  Alert,
  Container,
  Row
} from "react-bootstrap";

import './Converter.css';

const ConverterForm = () => {
  const [binaryNum, setBinaryNum] = useState("");
  const [decimalNum, setDecimalNum] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [alertText, setAlertText] = useState("");

  const decToBin = (value) => {
    const inputIsDecimal = new RegExp(/^\d+$/);
    const inputIsExponential = new RegExp('^[-+]?(0?|[1-9][0-9]*)(\.[0-9]*[1-9])?([eE][-+]?(0|[1-9][0-9]*))?$');
    let result = null;

    if (
      inputIsDecimal.test(value) || inputIsExponential.test(value)
    ) {
      result = new Number(value).toString(2);
    }

    return result;
  };

  const binToDec = (value) => {
    const inputIsBinary = new RegExp(/^[01]+$/);
    let result = null;

    if (inputIsBinary.test(value)) {
      result = new Number('0b' + value.toString()).toString(10);
    }

    return result;
  };

  const InvalidInputWarn = ({ showMessage, message }) => {
    if (showMessage) {
      return null;
    }

    return <Alert variant="warning">{message}</Alert>;
  };

  const handleInputChange = (target) => {
    const value = target.value.trim();
    if (value === "") {
      setBinaryNum("");
      setDecimalNum("");
    } else {
      let result = null;
      switch (target.name) {
        case "binaryNumInput":
          result = binToDec(value);

          if (result === null) {
            setAlertText(
              `Check your input! "${target.value}" is not a valid binary number.`
            );
            setInvalidInput(true);
          } else {
            setAlertText("");
            setInvalidInput(false);
            setBinaryNum(value);
            setDecimalNum(result);
          }

          break;
        case "decimalNumInput":
          result = decToBin(value);

          if (result === null) {
            setAlertText(
              `Check your input! "${target.value}" is not a valid decimal number.`
            );
            setInvalidInput(true);
          } else {
            setAlertText("");
            setInvalidInput(false);
            setDecimalNum(value);
            setBinaryNum(result);
          }
          break;
      }
    }
  };

  return (
    <Container>
      <Row>
        <Form>
          {/* Binary Number Input */}
          <Form.Group className="mb-3 justify-content-left" controlId="formBasicBinInput">
            <Form.Label>Binary Number</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter a binary number"
              value={binaryNum}
              name="binaryNumInput"
              onChange={(e) => {
                handleInputChange(e.target);
              }}
            />
          </Form.Group>

          {/* Decimal Number Input */}
          <Form.Group className="mb-3" controlId="formBasicDecInput">
            <Form.Label>Decimal Number</Form.Label>
            <Form.Control
              type="input"
              placeholder="Enter a decimal number"
              value={decimalNum}
              name="decimalNumInput"
              onChange={(e) => {
                handleInputChange(e.target);
              }}
            />
          </Form.Group>
        </Form>
        </Row>

      {/* Show warning if invalid input is detected */}
      <Row className="infobar">
        <InvalidInputWarn showMessage={!invalidInput} message={alertText} />
      </Row>
    </Container>
  );
};

export default ConverterForm;
