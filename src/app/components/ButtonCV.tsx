export function ButtonCV() {

    const handleDownloadCV = async () => {
        try {
            const response = await fetch("/assets/CV_Victor_Veleda.pdf");
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



    return (
        <div className="mx-auto">
            <button
                type="button"
                onClick={handleDownloadCV}
                className="flex flex-row group relative duration-900 ease-in-out 
            delay-1000 hover:delay-500 hover:duration-200 justify-center items-center
            bg-gradient-to-r from-green-700 via-green-700 to-blue-200 
            text-gray-800 border-green-700 rounded-xl w-40 font-alt p-2
            transition-colors motion-safe:hover:from-blue-200 motion-safe:hover:via-green-700 motion-safe:hover:to-green-700">

                <svg
                    className="fill-current w-4 h-4 mr-2 group-hover:translate-y-1 group-hover:duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                Download CV
            </button>
        </div>
    )
}
