import * as types from "../Types"

export function notificationAction(isNotificated: boolean, typeNotification: string, textNotification: string) {
    return {
        type: types.NOTIFICATOIN_IS_ALERTED,
        payload: {
            isNotificated,
            typeNotification,
            textNotification,
        }
    }
}

export function resetNotification() {
    return {
        type: types.NOTIFICATION_RESET
    }
}


