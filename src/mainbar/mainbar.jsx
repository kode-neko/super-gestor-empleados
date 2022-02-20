import styles from "./mainbar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainBar = () => {
  const [contratado, total] = useSelector((state) => {
    const { userList } = state.user;
    const contratados = userList.filter((user) => user.contratado).length;
    return [contratados, userList.length];
  });

  return (
    <div className={styles.mainBar}>
      <h1 className={styles.title}>Super Gestor Empleados</h1>
      <div className={styles.right}>
        <div className={styles.counter}>
          contratados {contratado}/{total}
        </div>
        <Link to="/add">
          <div className={styles.add}>Añadir Empleado</div>
        </Link>
      </div>
    </div>
  );
};

export default MainBar;
