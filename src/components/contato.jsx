import styles from "./contato.module.css";


export function Contato(){
    return(
        <section id="contato">
            <div className={styles["container"]}>
                <h1 className={styles.titulo}>Contato</h1>
                <ul className={styles.lista}>
                    <li><a href="#"><img src="./figma.svg" alt="imagem em svg do linkedin"/></a></li>
                    <li><a href="#"><img src="./in.svg" alt="imagem em svg do linkedin"/></a></li>
                    <li><a href="#"><img src="./insta.svg" alt="imagem em svg do linkedin"/></a></li>
                    <li><a href="#"><img src="./gthub.svg" alt="imagem em svg do linkedin"/></a></li>
                    <li><a href="#"><img src="./bola.svg" alt="imagem em svg do linkedin"/></a></li>
                    <li><a href="#"><img src="./youtube.svg" alt="imagem em svg do linkedin"/></a></li>
                </ul>
            </div>
        </section>
    );
}