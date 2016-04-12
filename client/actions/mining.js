
import { createAction } from 'redux-actions';

export const error = createAction('error');
export const updateAddress = createAction('update address');
export const updateMinGasPrice = createAction('update minGasPrice');
export const updateGasFloorTarget = createAction('update gasFloorTarget');
export const updateExtraData = createAction('update extraData');
