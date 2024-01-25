import { ContactDetailsComponent } from "../components/ContactDetailsComponent";


export function ContactSection() {
    return (
        <section
            data-testid="contactSection-test"
            id="contato"
            className="bg-[url(/portfolio-Victor-Veleda/assets/bg-stars.svg)] mt-8 mb-4 sm:mb-10">

            <div className="js-show-on-scroll transition-opacity invisible ">

                <div className="mx-auto items-center text-center flex flex-col justify-center">
                    <h2 className="font-alt text-3xl text-green-700 mb-2">Fale comigo</h2>
                    <p title="introduction-contact" className="w-auto m-2 font-alt text-turquoise-100 text-lgPlus">
                        O contato pode ser feito atráves:
                    </p>
                    <div
                        className="inset-x-0 p-0 h-1 rounded-xl mb-2 w-auto mx-auto animate-underlineAnimationGradient 
                background-animate bg-gradient-to-r via-green-700 from-turquoise-100"
                    />
                    <ContactDetailsComponent />
                </div>
            </div>

        </section>
    )
}