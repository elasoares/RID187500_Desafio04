import { useState } from "react";
import styles from "./header.module.css";
import { useEffect } from "react";

const menu =[
    {nome:"home", to:"#"},
    {nome: "Contato", to:"#contato"},
    {nome:  "Sobre mim", to: "#sobre"},
    {nome: "Projetos", to:"#projeto"}
]
const frases = ["Bem-vinda ao meu portfólio!", "Desenvolvedora Front-end.", "Apaixonada por tecnologia!"];

export function Header(){
    const [index, setIndex] = useState(0);
    const [fraseAtual, setFraseAtual] = useState("");

    useEffect(() => {
        const frase = frases[index];
        let i = 0;
        const intervalo = setInterval(() => {
        setFraseAtual(frase.slice(0, i + 1));
        i++;
        if (i === frase.length) {
            clearInterval(intervalo);
            setTimeout(() => {
            setIndex((prev) => (prev + 1) % frases.length);
            setFraseAtual("");
        }, 2000);
        }
    }, 100);
        return () => clearInterval(intervalo);
    }, [index]);
return(
    <header className={styles.container} id="header">
        <p className={styles.logo}>ELAINE</p>
        <div className={styles["container-menu"]}>
            <ul className={styles.menu}>
                {menu.map((item, index)=>(
                    <li key={"menu_" + index}>
                        <a href={item.to}>{item.nome}</a>
                    </li>
                ))}
            </ul>
            <h2 className={styles.titulo}>{fraseAtual}</h2>;
        </div>
    </header>
);
}