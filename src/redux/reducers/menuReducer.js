import { TOGGLE_MENU } from "../types";

const initialState = {
    isOpened: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                isOpened: !state.isOpened
            };

        default:
            return state;
    }
};
