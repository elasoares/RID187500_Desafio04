import styles from "./projetos.module.css";


const projetos =[
    {
        projeto:"Biblioteca - Sistema de Pesquisa e Listagem de Livros", 
        sobre:`Este é um projeto de sistema de biblioteca, desenvolvido como parte de um módulo acadêmico, 
            que permite a busca e exibição de livros a partir de uma base de dados online.
            A aplicação foi construída com React e utiliza o Firebase Realtime Database para armazenar e 
            fornecer dados sobre os livros.`,
        imagem: "./biblioteca.png", 
        tecnologias:["REACT", "VITE", "FIREBASE", "CSS Module"]
    },
    {   
        projeto:"Steak: O Açougue e Delivery Premium", 
        sobre:`Este é o repositório para o site Steak: O Açougue e Delivery Premium, criado como parte de um trabalho
            acadêmico no início da faculdade. O site foi desenvolvido para promover um açougue premium, oferecendo uma
            variedade de cortes de carne de alta qualidade, além de serviços de delivery.`, 
        imagem: "./Steak - O Açougue e Delivery Premium.png",
        tecnologias:["REACT", "VITE", "FIREBASE", "CSS module", ]
    },
    {   
        projeto:"Projeto de Plataforma de Fidelização e Gamificação", 
        sobre:`Projeto em grupo focado no desenvolvimento de uma plataforma de gamificação para fidelizar
                profissionais de arquitetura, engenharia, design e construção. 
                O sistema incentiva o engajamento por meio de recompensas, promovendo parcerias estratégicas e 
                estimulando a recorrência de compras em lojas parceiras. Além disso, conecta profissionais e fornecedores, 
                fortalecendo a retenção e ampliando oportunidades no setor.`, 
        imagem: "./Projeto.png",
        tecnologias:["JAVASCRIPT", "CSS3", "FONTAWESOME"]
    },
    {   
        projeto:"LandPage E-Commerce", 
        sobre:`Este é um projeto desenvolvido na faculdade utilizando React.js e Vite para criar um E-Commerce simples. 
            O site exibe uma lista de produtos, 
            permite interação com componentes reutilizáveis e utiliza estilização modular com CSS.`, 
        imagem: "./E-Commerce.png",
        tecnologias:["REACT", "VITE", "CSS Module"]
    },
    
]
export function Projetos(){
    return(
        <section id="projeto">
            <div className={styles["container-titulo"]}>
                <h1 className={styles.titulo}> Projetos </h1>
                <p className={styles.linha}></p>
            </div>
            <ul className={styles["container-projeto"]}>
                {projetos.map((projeto, index)=>(
                    <li key={"projeto_" + index} className={styles["container-lista"]}>
                        <div className={styles["card"]}>
                            <div className={styles["container-imagem"]}>
                                <img src={projeto.imagem} className={styles.imagem}/>
                            </div>
                            <ul className={styles.tecnologias}>
                                {projeto.tecnologias.map((tec, idx) => (
                                    <li key={idx}>{tec}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles["container-sobre-projeto"]}>
                            <h3>{projeto.projeto}</h3>
                            <p>{projeto.sobre}</p>
                        </div>

                    </li>
                ))}
            </ul>
        </section>
    )
}