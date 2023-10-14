import * as types from "../Types"

const initialState = {
    menuIsOpen: false,
}

export function menuReducer(state = initialState, action: { type: string }) {
    switch (action.type) {
        case types.MENU_BURGER_IS_OPEN: {
            return {
                ...state,
                menuIsOpen: true,
            }
        }

        case types.MENU_BURGER_IS_CLOSE: {
            return {
                ...state,
                menuIsOpen: false,
            }
        }

        default: {
            return state;
        }
    }
}