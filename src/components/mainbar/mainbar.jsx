import styles from "./mainbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MainBar = ({ contratado, total }) => {
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

const mapStateToProps = (state) => ({
  contratado: state.user.list.filter((user) => user.contratado).length,
  total: state.user.list.length,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MainBar);
