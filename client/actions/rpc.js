
import { createAction } from 'redux-actions';

export const error = createAction('error');
export const fireRpc = createAction('fire rpc');
export const addRpcReponse = createAction('add rpcResponse');
export const selectRpcMethod = createAction('select rpcMethod');
