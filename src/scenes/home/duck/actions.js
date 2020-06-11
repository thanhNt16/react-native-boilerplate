import types from './types.js';

const incrementCount = (value) => {
  return {
    type: types.INCREMENT_COUNT,
    value,
  };
};

const decrementCount = (value) => {
  return {
    type: types.DECREMENT_COUNT,
    value,
  };
};
export default {
  incrementCount,
  decrementCount,
};
