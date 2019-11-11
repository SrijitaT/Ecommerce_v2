import { ADD_TO_CART, QTY_UPDATE, REMOVE_FROM_CART } from "../actions/actionTypes";
function updateObjectInArray(array, action) {
    return array.map((item, index) => {
        if (item.id !== action.id) {
            // This isn't the item we care about - keep it as-is
            return item
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action
        }
    })
}
const initialState = {
    items: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const { item } = action.payload;
            const dup = state.items.filter(st => st.id === item.id)
            if (dup.length > 0) {
                item.count++;
            } else {
                item.count = 1;
            }
            if (item.count == 1)
                return {
                    ...state,
                    items: [...state.items, item]
                };
            return state;
        }
        case QTY_UPDATE: {
            const { item, value } = action.payload;
            const selectedItem = state.items.filter(st => st.id === item.id);
            if (selectedItem.length > 0) {
                selectedItem[0].count = selectedItem[0].count + parseInt(value) < 1 ? 1 : selectedItem[0].count + parseInt(value);
            }
            const items = updateObjectInArray(state.items, selectedItem);
            return { ...state, items }
        }
        case REMOVE_FROM_CART: {
            const { id } = action.payload;
            const remainingItems = state.items.filter(st => st.id !== id)
            return { ...state, items: remainingItems }
        }
        default:
            return state;
    }
}
