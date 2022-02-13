[<< Volver](https://github.com/kode-neko/super-gestor-empleados)

# 5. Forms

- [5.1. Nuestro Primer Formulario](#51-Nuestro-Primer Formularion)

---
## 5.1. Nuestro Primer Formulario

¡Manos a la obra! Solo vamos a crear un solo campo 😆

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
          <button className={styles.crear}>Crear</button>
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    avatar: "man.png",
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
            onCange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
        </div>
        <div className={styles.actions}>
          <button className={styles.crear}>Crear</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
```

Ahora si se guardan las modificaciones. El nuevo usuario hay que pasarlo a `App` para que lo guarde en la lista de usuarios. Para ello creamos una nueva propiedad llamada "onClickCrear" en `AddEmployee`.

**addemployee.jsx**

```jsx
const AddEmployee = ({ onClickCrear }) => {
  ...

  return (
    <>
      ...
        <div className={styles.actions}>
          <button
              className={styles.crear}
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

⭐ **Formularios no Controlados**

> ```html
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <script
>       src="https://unpkg.com/react@17/umd/react.development.js"
>       crossorigin
>     ></script>
>     <script
>       src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
>       crossorigin
>     ></script>
>     <script
>       src="https://unpkg.com/@babel/standalone/babel.min.js"
>       crossorigin
>     ></script>
>     <script type="text/babel">
>       const NoControlado = (props) => {
>         const refForm = React.useRef(undefined);
>         const refField = React.useRef(undefined);
>         return (
>           <form
>             ref={refForm}
>             onSubmit={(e) => {
>               e.preventDefault();
>               console.log("submit");
>               console.log(refForm);
>               console.log(refField);
>             }}
>           >
>             <div>
>               <input ref={refField} defaultValue="soy un valor" />
>             </div>
>             <div>
>               <button
>                 type="button"
>                 onClick={(e) => {
>                   console.log("field");
>                   console.log(refField);
>                 }}
>               >
>                 Check Field
>               </button>
>               <button type="submit">Aceptar</button>
>             </div>
>           </form>
>         );
>       };
>
>       window.addEventListener("load", () => {
>         ReactDOM.render(<NoControlado />, document.getElementById("app"));
>       });
>     </script>
>     <link rel="stylesheet" href="style.css" />
>     <title>Document</title>
>   </head>
>   <body>
>     <div id="app" />
>   </body>
> </html>
> ```
>
> - `useRef` permite acceder al componente a bajo nivel. Incluso manejarlo como si lo hiciesemos con getElementByxx. Esta herramienta nos lo proporciona React para crear componentes más complejos. Con la referncia podemos acceder al valor de los campos.
> - La propiedad "defaultValue" permite modificar el campo. Sino tendríamos que hacerlo con value + onChange como vimos en los formularios controlados.

🎲 **Ejercicio**

> Completa el formulario para que guarde los siguientes campos:
>
> - Nombre
> - Apellidos
> - E-mail
> - Teléfono
> - Ciudad
> - Provincia
>
> También vamos ha hacer una validación. El usuario solo puede introducir en el campo "Teléfono" números ¿Cómo lo harías? existen los eventos onKeyDown, onKeyPress y onKeyUp.

[<< Volver](https://github.com/kode-neko/super-gestor-empleados)
