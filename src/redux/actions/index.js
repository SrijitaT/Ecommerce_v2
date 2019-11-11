import { ADD_TO_CART, QTY_UPDATE, REMOVE_FROM_CART } from "./actionTypes";


export const addToCart = item => ({
    type: ADD_TO_CART,
    payload: {
        item
    }
});


export const qtyUpdate = (item, value) => ({
    type: QTY_UPDATE,
    payload: {
        item,
        value
    }
});

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: {
        id
    }
})