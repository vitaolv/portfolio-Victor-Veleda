//Define o tipo para o estado global
export interface MenuState {
    menuIsOpen: boolean;
}

//Botão burger no menu.
export const MENU_BURGER_IS_OPEN = "MENU_BURGER_IS_OPEN";
export const MENU_BURGER_IS_CLOSE = "MENU_BURGER_IS_CLOSE";

//Notificação
export const NOTIFICATOIN_IS_ALERTED = "NOTIFICATOIN_IS_ALERTED";
export const NOTIFICATION_RESET = "NOTIFICATION_RESET";