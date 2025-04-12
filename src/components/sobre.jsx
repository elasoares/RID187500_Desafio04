import styles from "./sobre.module.css";

const card =[
    {icon:"./interfaceEDesign.svg", habilidade: "Interface & Design", info: "Criação de interfaces responsivas, interativas e acessíveis."},
    {icon: "./htmlECss.svg", habilidade: "html & css", info: "Sites responsivos com carregamento rápido."},
    {icon: "./react.svg", habilidade: "React.js", info: "Crie seu sistema com react.js."}
]

const experiencia = [
    {
        titulo: "I've had experiences with", 
        img: "./bigLine.svg",
        experiencias: ["HTML", "CSS", "JavaScrip", "React", "Node.js"]    
    },
    {
        titulo: "I have years of experience with", 
        img: "./bigLine.svg",
        experiencias: ["Coding HTML5", "Coding CSS3", "Coding JavaScript", "Using Elementor", "Creating User Interface"]    
    },
    {
        titulo: "I work and study about", 
        img: "./bigLine.svg",
        experiencias: ["Coding React.js", "Coding CSS3", "Coding JavaScript", "Studying Node.js basics", "Studying API RESTful", "Studying User Experience"]    
    },
]

export function Sobre(){
    return(
        <section id="sobre">
            <div className={styles["container-titulo"]}>
                <h1 className={styles.titulo}> Sobre mim</h1>
                <p className={styles.linha}></p>
            </div>
            <div className={styles["container-texto"]}>
                <div className={styles.texto}>
                    <h3 className={styles["titulo-nome"]}>Elaine Soares</h3>
                    <p className={styles.paragrafo}>
                    Desenvolvedora Front-End com previsão de formatura em Análise e Desenvolvimento de Sistemas (2026). 
                    Possuo experiência no desenvolvimento de interfaces responsivas, interativas e acessíveis.
                    </p>
                </div>
                <ul className={styles.lista}>
                    <li className={styles.item}>instagram</li>
                    <li className={styles.item}>github</li>
                    <li className={styles.item}>email</li>
                </ul>
            </div>
            <div className={styles["container-habilidades"]}>
                <ul className={styles.lista2}>
                    {card.map((hab, index)=>(
                        <li key={"Habilidades_"+index}>
                            <div className={styles.imagem}>
                                <img src={hab.icon} alt="Imagem das habilidades descritas."/>
                                <img src="./lista.svg" alt="Lista que separa a imagem da descrição"/>
                            </div>
                            <div>
                                <h5 className={styles["titulo-card"]}>{hab.habilidade}</h5>
                                <p className={styles["paragrafo-card"]}>{hab.info}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles["container-experiencia"]}>
                <ul className={styles.lista3}>
                    {experiencia.map((ex, index)=>(
                        <li key={"Experiencia_"+index}>
                            <div className={styles.imagem}>
                                <img src={ex.img} className={styles["linha-imagem"]} alt="Lista que fica antes da descrição"/>
                            </div>
                            <div>
                                <h5 className={styles["titulo-card"]}>{ex.titulo}</h5>
                                <ul className={styles["container-item-experiencia"]}>
                                    {ex.experiencias.map((exp, inx)=>(
                                            <li key={inx} className={styles["item-experiencia"]}>{exp}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}