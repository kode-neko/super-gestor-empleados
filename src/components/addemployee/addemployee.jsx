import styles from "./addemployee.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = ({onCreatedUser}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    avatar: "man.png",
    name: ""
  });
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
          <input
            id="name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
       {/* Incluir nuevos campos */}
        <div className={styles.actions}>
          <button
            className={styles.crear}
            onClick={(e) => {
              e.preventDefault();
              onCreatedUser(user);
              navigate(-1);
            }}
          >
            Crear
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
