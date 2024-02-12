import { notificationAction, resetNotification } from "@/app/store/Actions/NotificationActions";
import { useDispatch } from "react-redux";

export function useDownloadResume() {
    const dispatch = useDispatch();

    async function HandleDownloadResume() {

        try {
            const response = await fetch("/portfolio-Victor-Veleda/assets/CV_Victor_Veleda.pdf");
            const blob = await response.blob();

            if (!response.ok) {
                throw new Error('File not found');
            }

            const url = window.URL.createObjectURL(new Blob([blob]))

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute('download', 'CV_Victor_Veleda.pdf')
            link.click();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            dispatch(notificationAction(true, 'error', 'Sinto muito! O download de CV foi desativado.'));
            setTimeout(() => {
                dispatch(resetNotification());
            }, 4000);
        }

    };
    return HandleDownloadResume
}