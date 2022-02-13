[<< Volver](https://github.com/kode-neko/super-gestor-empleados)



# 5. Forms

Ya que tenemos la págian para añadir empleados necesitamos un formulario. Comenzamos con un pequeño ejemplo al que vosotros tendreis que terminar de completarlo.



## 5.1. Nuestro Primer Formulario

¡Mano a la obra! Solo vamos a crear un campo.



**addemployee.jsx**

```jsx
import styles from "./addemployee.module.css";
import { useNavigate } from "react-router-dom";

const AddEmployee = ({ onClickCrear }) => {
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
          <input id="name" name="name" value="" />
        </div>
        <div className={styles.actions}>
          <button>Crear</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
```



Intentad escribir en él ¿A que no podeis? 😈 React y JSX trata los formulario de forma distinta. Dispone de 2 modos, formularios **controlados** y **no controlados** Aquí en la documentación nos centramos en los controlados por ser los más flexibles. Al final incluiremos un pequeño anexo sobre la modalidad no controlado.



Modificamos el formulario para introducir texto.



**addemployee.jsx**

```jsx
import styles from "./addemployee.module.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
      name: "",
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
              onChnage={(e) => {
                    setUser({...user, name: e.target.value});
                }}
          />
        </div>
        <div className={styles.actions}>
          <button>Crear</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
```



Ahora si se guardan las modificaciones. El nuevo usuario hay que pasarlo a App para que lo guarde en la lista de usuarios. Para ello creamos una nueva propiedad llamada onClickCrear en AddEmployee.



**addemployee.jsx**

```jsx
const AddEmployee = ({ onClickCrear }) => {
  ...
  
  return (
    <>
      ...
        <div className={styles.actions}>
          <button
              onClick={(e) => {
              e.preventDefault();
              onClickCrear(user);
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
```



**App.js**

```jsx
function App() {
  ...

  return (
    <Router>
      <MainBar
        total={userList.length}
        contratado={userList.filter((user) => user.contratado).length}
      />
      <div className="userList">
        <Routes>
          <Route exact path="/" element={userListTpl} />
          <Route
            exact
            path="/add"
            element={
              <AddEmployee
                onClickCrear={(user) => {
                  setUserList([user, ...userList]);
                }}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
```



Muy importante incluir un preventDefault() en el botón de formulario, para evitar que recargue la página.



🎲 **Ejercicio**

> Completa el formulario para que guarde los siguientes campos:
>
> - Nombre
> - Apellidos
> - E-mail
> - Teléfono
> - Ciudad
> - Provincia





[<< Volver](https://github.com/kode-neko/super-gestor-empleados)















