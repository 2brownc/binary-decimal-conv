const invalidNumMsg = (number, type) => {
  return (
    `"${number}" is not a ${type} number. Please check your input.`
  );
}

const tooBigMsg = (number, type) => {
  let maxNum = null;
  let base = null;

  if (type === 'binary') {
    base = 2;
  } else if (type === 'decimal') {
    base = 10;
  }

  maxNum = Number.MAX_SAFE_INTEGER.toString(base);

  return (
    `${number} is too big. Input number shouldn't be larger than Number.MAX_SAFE_INTEGER i.e. ${maxNum}.`
  );
};

function errInit(msg) {
  return ({
    "msg": msg,
    "showMsg": false
  });
}

function errReducer(state, action) {
  switch (action.type) {
    case 'INVALID_NUM_BINARY':
      return ({
        ...state,
        "msg": invalidNumMsg(action.payload, 'binary'),
        "showMsg": true
      });
    case 'INVALID_NUM_DECIMAL': 
      return ({
        ...state,
        "msg": invalidNumMsg(action.payload, 'decimal'),
        "showMsg": true
      });
    case 'EXCEED_LIMIT_DECIMAL':
      return ({
        ...state,
        "msg": tooBigMsg(action.payload, 'decimal'),
        "showMsg": true
      });
    case 'EXCEED_LIMIT_BINARY':
      return ({
        ...state,
        "msg": tooBigMsg(action.payload, 'binary'),
        showMsg: true
      });
    case 'RESET':
      return errInit(action.payload);
    default:
        throw new Error(`Unhandled case in Error Info reducer: ${action.type}`);
}}


export { errReducer, errInit};
