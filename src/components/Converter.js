import React, { useState, useReducer } from "react";
import { Form, Alert, Container, Row } from "react-bootstrap";

import { errReducer, errInit } from './ErrorInfo'
import "./Converter.css";

const ConverterForm = () => {
  const [binaryNum, setBinaryNum] = useState("");
  const [decimalNum, setDecimalNum] = useState("");

  const [errState, errDispatch] = useReducer(errReducer, "", errInit);

  const decToBin = (value) => {
    return value.toString(2);
  };

  const binToDec = (value) => {
    return value.toString(10);
  };

  const InvalidInputWarn = ({ showMsg, msg }) => {
    console.log(showMsg, msg);
    if (!showMsg) {
      return null;
    }

    return <Alert variant="warning">{msg}</Alert>;
  };

  const handleInputChange = (target) => {
    //regex tests
    const inputIsDecimal = new RegExp(/^\d+$/);
    const inputIsBinary = new RegExp(/^[01]+$/);

    const value = target.value.trim();
    let number = null;

   errDispatch({
     type: "RESET",
     payload: ""
   });

    if (value === "") {
      setBinaryNum("");
      setDecimalNum("");
    } else {
      let result = null;
      switch (target.name) {
        case "binaryNumInput":
          number = new Number(`0b${value}`);

          if (!inputIsBinary.test(value)) {
          errDispatch({
            type: "INVALID_NUM_BINARY",
            payload: value
          });
          } else if (number > Number.MAX_SAFE_INTEGER) {
            errDispatch({
              type: "EXCEED_LIMIT_BINARY",
              payload: value
            });
          } else {
            const result = binToDec(number);

            setBinaryNum(value);
            setDecimalNum(result);
          }

          break;
        case "decimalNumInput":
          number = new Number(value);

          if (!inputIsDecimal.test(value)) {
            errDispatch({
              type: "INVALID_NUM_DECIMAL",
              payload: value
            });
          } else if (number > Number.MAX_SAFE_INTEGER) {
            errDispatch({
              type: "EXCEED_LIMIT_DECIMAL",
              payload: value
            });
          } else {
            const result = decToBin(number);

            setDecimalNum(value);
            setBinaryNum(result);
          }
          break;
        default:
          throw Error(`unexpected case: ${target.name}`);
      }
    }
  };

  return (
    <Container>
      <Row>
        <Form>
          {/* Binary Number Input */}
          <Form.Group
            className="mb-3 justify-content-left"
            controlId="formBasicBinInput"
          >
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
        <InvalidInputWarn showMsg={errState.showMsg} msg={errState.msg} />
      </Row>
    </Container>
  );
};

export default ConverterForm;
