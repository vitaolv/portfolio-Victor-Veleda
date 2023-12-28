export async function HandleDownloadResume() {
    try {
        const response = await fetch("/portfolio-Victor-Veleda/assets/CV_Victor_Veleda.pdf");
        const blob = await response.blob();

        const url = window.URL.createObjectURL(new Blob([blob]))

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute('download', 'CV_Victor_Veleda.pdf')
        document.body.appendChild(link);
        link.click();

        window.URL.revokeObjectURL(url);
    } catch (error) {
        alert(
            `Erro ao baixar o CV. Aguarde um pouco 
                ou entre em contato com administrador para relatar o problema ocorrido.`);
    }
};
