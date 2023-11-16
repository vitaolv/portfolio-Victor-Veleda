import { ContactDetailsComponent } from "../components/ContactDetailsComponent";


export function ContactSection() {
    return (
        <section id="contato"
            className="bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] 
            js-show-on-scroll transition-opacity invisible mt-28 mb-32">
            <div className="mx-auto items-center text-center flex flex-col justify-center">
                <h2 className="font-alt text-3xl md:text-6xl text-green-700 mb-12">Contato</h2>


                <div className="ml-4 mr-4 border-2 border-green-700 bg-gray-500 bg-opacity-20 
                p-6 shadow-gradient-green-blue shadow-green-200 rounded-xl max-w-screen-md mx-auto">

                    <p className="w-auto m-2 font-alt text-blue-100 text-lgPlus">
                        Curtindo a minha jornada no mundo do desenvolvimento front-end?
                    </p>
                    <div
                        className="inset-x-0 p-0 h-1 rounded-xl mb-6 w-auto mx-auto animate-underlineAnimationGradient 
                background-animate bg-gradient-to-r via-green-700 from-blue-100"
                    />
                    <ContactDetailsComponent />
                </div>
            </div>
        </section>
    )
}