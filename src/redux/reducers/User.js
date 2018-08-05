import {generateUser} from '../../data/index.js';

export default (state = generateUser(), action) => {
  return state;
};