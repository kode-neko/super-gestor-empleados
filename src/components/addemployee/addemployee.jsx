import styles from "./addemployee.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserToList } from "../../common/redux/user";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    avatar: "man.png",
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
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
        <div className={styles.field}>
          <label for="surname">Apellido</label>
          <input
            id="surname"
            name="surname"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label for="email">E-mail</label>
          <input
            id="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label for="phone">Teléfono</label>
          <input
            id="phone"
            name="phone"
            value={user.phone}
            onKeyDown={(e) => {
              if (/\d/.test(e.key)) {
                setUser({ ...user, phone: user.phone + e.key })
              }
            }}
          />
        </div>
        <div className={styles.field}>
          <label for="city">Ciudad</label>
          <input
            id="city"
            name="city"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label for="state">Provincia</label>
          <input
            id="state"
            name="state"
            value={user.state}
            onChange={(e) => setUser({ ...user, state: e.target.value })}
          />
        </div>
        <div className={styles.actions}>
          <button
            className={styles.crear}
            onClick={(e) => {
              e.preventDefault();
              dispatch(addUserToList(user));
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
