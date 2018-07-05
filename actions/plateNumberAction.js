import { PLATE_NUMBER_ENTER } from './types';

export const enterPlateNumber = plateNumber => {
  return {
    type: PLATE_NUMBER_ENTER,
    payload: plateNumber
  };
};
