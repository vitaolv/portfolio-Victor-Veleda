interface BadgesComponentTypes {
    readonly sources: string[];
}

interface ResourceColorsTypes {
    readonly [key: string]: string;
}

export function BadgesComponent({ sources }: BadgesComponentTypes) {

    const resourceColors: ResourceColorsTypes = {
        "Javascript": "#FFD700",
        "Vite": "#7B8FFF",
        "React": "#68DBFB",
        "NextJS": "#FFFFFF",
        "HTML5": "#E96328",
        "CSS3": "#34B1EC",
        "Redux": "#7A50BE",
        "Bootstrap": "#841BFB",
        "Ant Design": "#FFFFFF",
        "TypeScript": "#147DD0",
        "Sass": "#CC6599",
    }


    return (
        <div>
            <p className="font-semibold">Tecnologias utilizadas:</p>
            <div className="flex flex-wrap gap-4 w-auto mx-auto justify-center mt-3">
                {sources.map((source) => (
                    <div
                        key={source}
                        style={{ borderColor: resourceColors[source] }}
                        className="border-2 w-max p-1 border-turquoise-100 text-md rounded-2xl 
                    text-center items-center">
                        {source}
                    </div>
                ))
                }
            </div>
        </div>
    )
}