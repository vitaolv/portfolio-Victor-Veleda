import * as types from '../Types';

interface NotificationState {
    isNotificated: boolean;
    typeNotification: string;
    textNotification: string;
}

interface Action {
    type: string;
    payload: NotificationState;
}

const initialState: NotificationState = {
    isNotificated: false,
    typeNotification: '',
    textNotification: ''
};

export function notificationReducer(state = initialState, action: Action): NotificationState {
    switch (action.type) {
        case types.NOTIFICATOIN_IS_ALERTED:
            return {
                ...state,
                isNotificated: action.payload.isNotificated,
                typeNotification: action.payload.typeNotification,
                textNotification: action.payload.textNotification,
            };
        case types.NOTIFICATION_RESET:
            return {
                ...state,
                isNotificated: false,
                typeNotification: '',
                textNotification: '',
            }
        default:
            return state;
    }
};