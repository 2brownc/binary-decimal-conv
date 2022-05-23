import React, { useState } from "react";
import { Form, InputGroup, FormControl, Alert } from "react-bootstrap";

const ConverterForm = () => {
  const [binaryNum, setBinaryNum] = useState("");
  const [decimalNum, setDecimalNum] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [alertText, setAlertText] = useState("");

  const decToBin = (value) => {
    const inputIsDecimal = new RegExp(/^\d+$/);
    let result = null;

    if (inputIsDecimal.test(value)) {
      result = parseInt(value, 10).toString(2);
    }

    return result;
  };

  const binToDec = (value) => {
    const inputIsBinary = new RegExp(/^[01]+$/);
    let result = null;

    if (inputIsBinary.test(value)) {
      result = parseInt(value, 2);
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
    if (target.value === "") {
      setBinaryNum("");
      setDecimalNum("");
    } else {
      let result = null;
      switch (target.name) {
        case "binaryNumInput":
          result = binToDec(target.value);

          if (result === null) {
            setAlertText(
              `Check your input! "${target.value}" is not a valid binary number.`
            );
            setInvalidInput(true);
          } else {
            setAlertText("");
            setInvalidInput(false);
            setBinaryNum(target.value);
            setDecimalNum(result);
          }

          break;
        case "decimalNumInput":
          result = decToBin(target.value);

          if (result === null) {
            setAlertText(
              `Check your input! "${target.value}" is not a valid decimal number.`
            );
            setInvalidInput(true);
          } else {
            setAlertText("");
            setInvalidInput(false);
            setDecimalNum(target.value);
            setBinaryNum(result);
          }
          break;
      }
    }
  };

  return (
    <>
      <div>
        <Form>
          <InputGroup>
            <InputGroup.Text>Binary Number</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              controlId="binNumInputGrp"
              value={binaryNum}
              name="binaryNumInput"
              onChange={(e) => {
                handleInputChange(e.target);
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Decimal Number</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              controlId="decNumInputGrp"
              value={decimalNum}
              name="decimalNumInput"
              onChange={(e) => {
                handleInputChange(e.target);
              }}
            />
          </InputGroup>
        </Form>
      </div>
      <div>
        <InvalidInputWarn showMessage={!invalidInput} message={alertText} />
      </div>
    </>
  );
};

export default ConverterForm;
