import styles from "./mainbar.module.css";

const MainBar = (props) => {
  return (
    <div className={styles.mainBar}>
      <h1 className={styles.title}>Super Gestor Empleados</h1>
      <div className={styles.counter}>contratados 5/10</div>
    </div>
  );
};

export default MainBar;
