import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt ,FaJs, FaReact } from 'react-icons/fa';
import { BsFiletypeSql, BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Card({name, description, html_url}) {
  return (

    <section className={styles.card}>
       <h3>{name}</h3>
       <p>{description}.</p>
       <div className={styles.card_footer}>
            <div className={styles.card_icones}>
                <FaHtml5/>
                <FaCss3Alt/>
                <FaJs/>
                <FaReact/>
                <BsFiletypeSql/>
                
            </div>
            <Link to={html_url} className={styles.card_botao}>
                <BsArrowRight/>
            </Link>
       </div>
    </section>
  )
}

export default Card;
