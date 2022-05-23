import React, { useState } from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';

const ConverterForm = () => {
  const [binaryNum, setBinaryNum] = useState(""); 
  const [decimalNum, setDecimalNum] = useState("");

  const handleInputChange = (target) => {
   switch(target.name) {
     case "binaryNumInput":
       setBinaryNum(target.value);
       break;
     case "decimalNumInput":
       setDecimalNum(target.value);
       break;
   }
  };

  return (

  <Form>
    <InputGroup>
      <InputGroup.Text>Binary Number</InputGroup.Text>
      <FormControl
        as="textarea"
        aria-label="With textarea"
        controlId="binNumInputGrp"
        value={binaryNum}
        name="binaryNumInput"
        onChange={e => {handleInputChange(e.target)}}
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
      onChange={e => {handleInputChange(e.target)}}
      />
    </InputGroup>  
  </Form>
)};

export default ConverterForm;
