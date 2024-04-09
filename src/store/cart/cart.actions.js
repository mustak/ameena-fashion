import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const toggleDropdown = () =>
    createAction(CART_ACTION_TYPES.TOGGLE_DROPDOWN);
