import { ContactListComponent } from "../components/ContactList";

export function ContactSection() {
    return (
        <section className="bg-[url(/assets/bg-stars.svg)] js-show-on-scroll transition-opacity invisible mt-32 mb-36">
            <div className="mx-auto items-center text-center flex flex-col justify-center">
                <h2 className="font-alt text-3xl text-green-700 mb-12">Contato</h2>


                <div className="ml-4 mr-4 border-2 border-green-700 bg-gray-500 bg-opacity-20 
                p-6 shadow-gradient-green-blue shadow-green-200 rounded-xl max-w-screen-md mx-auto">

                    <p className="w-auto m-2 font-alt text-blue-100 text-lgPlus">
                        Está gostando da minha missão no mundo do desenvolvimento front-end?
                    </p>
                    <div
                        className="inset-x-0 p-0 h-1 rounded-xl mb-6 w-auto mx-auto animate-underlineAnimationGradient 
                background-animate bg-gradient-to-r via-green-700 from-blue-100"
                    />

                    <p className="w-auto mb-1 text-lg font-alt text-center">
                        Entre em contato por meio do <span className="text-green-700">
                            GitHub
                        </span> ou <span className="text-green-700">
                            LinkedIn
                        </span>
                    </p>
                    <p className="w-auto mb-6 text-lg font-alt text-center">
                        Clique nos ícones abaixo e contribua com essa missão incrível!
                    </p>
                    <div></div>

                    <ContactListComponent />
                </div>
            </div>
        </section>
    )
}