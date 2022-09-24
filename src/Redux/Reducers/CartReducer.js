import { CartActionTypes } from "../ActionTypes/CartActionTypes";


const initialState = [

];

export const CartReducer = (state = initialState, action) => {

    switch (action.type) {

        case CartActionTypes.ADD_ITEM:
            let Copy_Items = action.payload;
            Copy_Items.quantity = 1;
            Copy_Items.subTotal = action.payload.price;
            return [...state, Copy_Items]

        case CartActionTypes.CLEAR_ADD_ITEMS:
            return []


        case CartActionTypes.REMOVE_ITEM:
            const delArray = state.filter((item, index) => {
                return (index !== action.payload);
            })
            return delArray;

        case CartActionTypes.INCREMENT:
            const inc_Val = state.map((item) => {
                if (item.id == action.payload) {
                    item.quantity++,
                        item.subTotal = (item?.price * item?.quantity).toFixed(2)
                }
                return item;
            });
            return inc_Val;


        case CartActionTypes.DECREMENT:
            const dec_Val = state.map((item) => {
                if (item.id == action.payload) {
                    item.quantity--
                }
                return item;
            });
            return dec_Val;


        default:
            break;
    }
    return state;

}