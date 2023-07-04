import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt ,FaJs, FaReact } from 'react-icons/fa';
import { BsFiletypeSql, BsArrowRight } from 'react-icons/bs';

function Card() {
  return (

    <section className={styles.card}>
       <h3>Titulo do Projeto</h3>
       <p>Texto descritivo do projeto.</p>
       <div className={styles.card_footer}>
            <div className={styles.card_icones}>
                <FaHtml5/>
                <FaCss3Alt/>
                <FaJs/>
                <FaReact/>
                <BsFiletypeSql/>
                
            </div>
            <button className={styles.card_botao}>
                <BsArrowRight/>
            </button>
       </div>
    </section>
  )
}

export default Card;
