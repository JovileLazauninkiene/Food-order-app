import mealsImage from "../../assets/food2.jpg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img alt="food" src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
