import { useSelector } from "react-redux"

export function NotificationComponent() {
    const notification = useSelector((state: any) => state.notification);

    const styleMap: { [key: string]: string } = {
        'error': 'bg-red-400 border-2 border-red-500 text-black',
        'success': 'bg-green-500 text-black',
    }

    const style = styleMap[notification.typeNotification] || '';

    return (
        <div className={`fixed inset-x-0 bottom-16 z-50 flex justify-center`}>
            <div className={`m-6 h-fit rounded-md shadow-lg ${style}`}>
                <p className="m-2">
                    {notification.textNotification}
                </p>
            </div>
        </div>
    )
}