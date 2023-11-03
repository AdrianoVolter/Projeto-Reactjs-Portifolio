import styles from './Sobre.module.css'
import html  from './images/portfolio/icon-html.svg'
import css  from './images/portfolio/icon-css.svg'
import js  from './images/portfolio/icon-js.svg'
import react  from './images/portfolio/icon-react.svg'
import node  from './images/portfolio/icon-node.svg'
import sql  from './images/portfolio/icon-sql.svg'


function Sobre() {

    const avatar = "https://avatars.githubusercontent.com/u/91354299?s=400&u=4e17374633a3697206bf588125af510fe74c048b&v=4"
    
    return (
        <section className={styles.sobre}> 
            <div className={styles.bio}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.textos}>
                      <h2>Sobre</h2>
                      <p>Olá, sou <span>Adriano Volter</span>, tenho 39 anos<br /> Sou <strong>Curso Desenvolvedor FullStack Jr</strong> .
                        </p>
                        <p>Meu objetivo é trabalhar na área como<strong>desenvolvedor full-stack</strong> <br />Usando as tecnologias mais utilizadas no mercado <br /> Como <strong>ReactJS</strong>, <strong>NodeJS, PostgreSQL</strong>.
                        </p> 
                </div>
                  
            </div>
            <div className={styles.techs}>
                <h2>Techs</h2>
                <div className={styles.icones}>
                    <img src={html} alt="Icone html" />
                    <img src={css} alt="Icone css" />
                    <img src={js} alt="Icone js" />
                    <img src={react} alt="Icone react" />
                    <img src={node} alt="Icone node" />
                    <img src={sql} alt="Icone sql" />
                </div>

            </div>
        </section>
      
    )
}

export default Sobre









{/* <p>Olá, meu nome é <strong>Adriano</strong>, tenho 38 anos e sou estudante de <strong>Curso Desenvolvedor FullStack</strong> no <strong>Senai/SC </strong>.
</p>
<p>Atualmente estou no modulo 2 do curso e estou em busca de uma oportunidade  para colocar em prática os conhecimentos adquiridos durante o curso.
</p>
<p>Meu objetivo é me tornar um <strong>desenvolvedor full stack</strong> e, para isso, estou estudando as tecnologias mais utilizadas no mercado, como <strong>ReactJS</strong>, <strong>NodeJS</strong> e <strong>React Native</strong>.
</p> */}
