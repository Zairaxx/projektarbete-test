import React from "react";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={styles.myId}>
      <h1>Header: {props.heading}</h1>
      <h2 className={styles.rubrik}>H2 i header-komponent</h2>
      <div>
        <h3>En sista h3:a</h3>
        <h3>En sista h3:a</h3>
        <h3>En sista h3:a</h3>
      </div>
    </header>
  );
};

export default Header;
