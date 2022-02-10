import styles from "./addemployee.module.css";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.bar}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
      <form>
        <div className={styles.field}>
          <label for="name">Nombre</label>
          <input id="name" name="name" defaultValue="" />
        </div>
        <div className={styles.field}>
          <label for="surname">Apellido</label>
          <input id="surname" name="surname" defaultValue="" />
        </div>
        <div className={styles.field}>
          <label for="email">E-mail</label>
          <input id="email" name="email" defaultValue="" />
        </div>
        <div className={styles.field}>
          <label for="phone">Teléfono</label>
          <input id="nombre" name="nombre" vadefaultValuelue="" />
        </div>
        <div className={styles.field}>
          <label for="city">Ciudad</label>
          <input id="city" name="city" defaultValue="" />
        </div>
        <div className={styles.field}>
          <label for="state">Provincia</label>
          <input id="state" name="state" defaultValue="" />
        </div>
        <div className={styles.actions}>
          <button className={styles.crear}>Crear</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
