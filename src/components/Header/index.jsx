import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <span>adrianoVolter.dev</span>
      </Link>
      <nav
        className={`${styles.menu_sandwich} ${showMenu ? styles.show : ""}`}
        onClick={toggleMenu}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Github</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
      <div className={styles.menu_button} onClick={toggleMenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
    </header>
  );
}
export default Header;
