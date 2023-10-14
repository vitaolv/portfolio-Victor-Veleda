import * as types from "../Types"

export function MenuBurgerIsOpen() {
    return {
        type: types.MENU_BURGER_IS_OPEN
    }
}

export function MenuBurgerIsClose() {
    return {
        type: types.MENU_BURGER_IS_CLOSE
    }
}