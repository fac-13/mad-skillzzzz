import { createStore } from 'redux';
import { updateState } from '../reducers/reducers';

export const store = createStore(updateState);
