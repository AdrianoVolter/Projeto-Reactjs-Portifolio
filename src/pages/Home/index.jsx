import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import progaming from "/programing.svg";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.apresentacao}>
        <p>
          Olá, sou <br />
          <span>Adriano Volter</span> <br />
          Dev. Full-Stack  <br />
        </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`}>
          Saiba mais 
        </Link>
      </div>
      <figure>
        <img className={styles.img_home} src={progaming} alt="Imagem Home" />
      </figure>
    </section>
  );
}

export default Home;
