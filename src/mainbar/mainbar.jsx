import styles from "./mainbar.module.css";

const MainBar = ({ total, contratado }) => {
  return (
    <div className={styles.mainBar}>
      <h1 className={styles.title}>Super Gestor Empleados</h1>
      <div className={styles.counter}>contratados {contratado}/{total}</div>
    </div>
  );
};

export default MainBar;
