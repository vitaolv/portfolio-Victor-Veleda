export function ButtonCV() {
    return (
        <div className="mx-auto">
            <button
                type="button"
                className="flex flex-row group relative duration-900 ease-in-out 
            delay-1000 hover:delay-500 hover:duration-200 justify-center items-center
            bg-gradient-to-r from-green-200 via-green-700 to-blue-200 
            text-gray-800 border-green-700 rounded-xl w-40 font-alt p-2
            transition-colors motion-safe:hover:from-blue-200 motion-safe:hover:via-green-700 motion-safe:hover:to-green-200">

                <svg
                    className="fill-current w-4 h-4 mr-2 group-hover:translate-y-1 duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                Download CV
            </button>
        </div>
    )
}
