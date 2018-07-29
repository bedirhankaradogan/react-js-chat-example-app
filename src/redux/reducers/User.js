import {generateUser} from '../../data';

export default (state = generateUser(), action) => {
  return state;
};