[<< Volver](https://github.com/kode-neko/super-gestor-empleados)



# 4. Routing

La gracia de las webs es ir navegando entre enlaces. Volvemos a recordar que las SPA consisten en una única página donde se ponen o quitan componentes.  Cuando "navegamos" a otra página en realidad quitamos de un espacio un componente e incluimos otro. 

[img]

React necesita de una librería externa llamada `react-router-dom`. Pero antes de abordar esta cuestión vamos a crear la página a la que queremos navegar.



## 4.1. Añadir Usuario

Vamos a preparar un componente para la creación de empleados.

```
📂 src
 ┣ 📂 addemployee
    ┣ 📜 index.js
    ┣ 📜 addemployee.jsx
    ┣ 🎨 addemployee.module.css
```



**index.js**

```jsx
import AddEmployee from "./addemployee";

export default AddEmployee;
```



**addemployee.jsx**

```jsx
import styles from "./addemployee.module.css";

const AddEmployee = ({ onClickCrear }) => {
  return (
    <>
      <div className={styles.bar}>
        <button className={styles.back}>
          Volver
        </button>
        <h2>Añadir Empleado</h2>
      </div>
    </>
  );
};

export default AddEmployee;
```



**addemployee.module.css**

```css
.bar {
  margin: 20px 0;
}

.bar .back {
  display: inline-block;
  text-decoration: none;
  background-color: royalblue;
  color: white;
  border: none;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 2px;
  cursor: pointer;

  transition: background-color 0.3s;
}

.bar .back:hover {
  background-color: rgb(1, 99, 197);
}

.field {
  display: flex;
  align-content: center;
  padding: 10px 0px;
  font-size: 20px;
}

.field label {
  width: 150px;
  display: flex;
  align-items: center;
}

.field input {
  width: 100%;
  height: 36px;
  border: none;
  border-bottom: 1px solid rgb(0, 16, 34);
  background-color: rgb(249, 252, 255);
  box-sizing: border-box;
  font-size: 20px;
  color: royalblue;

  /*transition: border-bottom 0.3s;*/
}

.field input:focus-visible,
.field input:hover {
  outline: none;
  border: none;
  border-bottom: 4px solid dodgerblue;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}

.actions .crear {
  display: inline-block;
  text-decoration: none;
  background-color: tomato;
  color: white;
  border: none;
  font-size: 24px;
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;

  transition: background-color 0.3s;
}

.actions .crear:hover {
  background-color: orangered;
}

```



## 4.2. React Router

Instalamos la dependencia `react-router-dom`, perteneciente al proyecto [React Router](https://reactrouterdotcom.fly.dev/docs/en/v6).

```bash
yarn add react-router-dom
```



Modificamos el `App.js`,`mainbar.jsx` y el `addemployee.jsx` de la siguiente forma. 



**App.js**

```jsx
import "./App.css";
import React, { useEffect, useState } from "react";
import IdCard from "./idcard";
import MainBar from "./mainbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./addemployee";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    ...
  }, []);

  const userListTpl =
    userList.length !== 0 ? (
      userList.map((user) => (
        <IdCard
          user={user}
          onClickContratado={(email) => {
            const newList = userList.map((user) =>
              user.email === email
                ? { ...user, contratado: !user.contratado }
                : user
            );
            setUserList(newList);
          }}
        />
      ))
    ) : (
      <img src="spinner.gif" alt="loading info" />
    );

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
            element={<AddEmployee/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```



**mainbar.jsx**

```jsx
const MainBar = ({ total, contratado }) => {
  return (
    <div className={styles.mainBar}>
      <h1 className={styles.title}>Super Gestor Empleados</h1>
      <div className={styles.right}>
        <div className={styles.counter}>
          contratados {contratado}/{total}
        </div>
        <Link to="/add">
          <div className={styles.add}>
            Añadir Empleado
          </div>
        </Link>
      </div>
    </div>
  );
};
```



**addemployee.jsx**

```jsx
const AddEmployee = () => {
  const navigate = useNavigate();
  ...
  
  return (
    <>
      <div className={styles.bar}>
        <button className={styles.back} onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
      <h2>Añadir Empleado</h2>
    </>
  );
};

export default AddEmployee;
```



Vemos que hemos utilizado componentes de la librería `react-router-dom`. 

- **Router**: Todo lo que encierra este componente es susceptible de usar las etiquetas de `react-router-dom`.
- **Routes**: Para incluir el conjunto de componentes `Route`. Va en orden comparando el path del navegador con el indicado en cada `Route`. Muestra el componente de la primera ocurrencia.
- **Route**: Si el path del navegador coincide con la propiedad path del componente, aparece en ese lugar el componente indicado en la propiedad element. 
- **Link**: No podemos usar las eqtiuetas <a>. Lo que hay que hacer es wrappear el texto, botón o etiqueta con <Link>. De esta forma lo preparara para que pueda enrutarse. En realidad lo que hace es wrappear ese elemento con el tag <a>
- ¿Qué pasa si quiero ir a cualquier lugar del historial de navegación? sipone de un hook llamado `useNavigate`. Vemos que en la página de empleados, para vovler atrás hacemos uso de este hook. Has visto que hemos usado un evento, se hace de la misma forma que en el Vanila Javascript. En este enlace encontrarás la 



Ya podemos enrutar a la página de usuarios 🎉



⚠️ **¡Atención!**

> Recientemente react-router-dom ha actualizado a la versión 6 que no es retrocompatible. Encontratrás muchos tutoriales relacionados con versiones anteriores. Es recomendable de momento basarse en los docs de la [web oficial](https://reactrouterdotcom.fly.dev/docs/en/v6).



⭐ **Wrappers**

> Los componentes no siempre tienen asociado un template, pueden simplemente wrapear otros componentes para otorgar otras funcionalidades.
>
> ```jsx
> const Tag = ({label}) => {
> 	return <div>{label}</div>;
> }
> 
> const WrapperCounter = ({ children, seconds }) => {
>  useEffect(() => {
>      const init = new Date();
>   	return () => {
>          const end = new Date();
>          console.log("Duración: ", end.getTime() - init.getTime());
>      }   
>  }, []);
> 
>  return (
>  	<div>
>          {children}
>      </div>
>  );
> }
> 
> const App = ({ children, seconds }) => {
> 
>  const [isVisible, setIsVisible] = useState(true);
>  return (
>      <>
>          {isVisible && (
>              <WrapperCounter>
>                  <Tag label="Patata" />
>              </WrapperCounter>
>          )}
>      	<Button onClick={() => setIsVisible(!isVisible)}>
>  			{isVisible ? "Ocultar" : "Mostrar"}
> 			</Button>
>      </>
>  );
> }
> ```
>
> Hemos creado un wrapper que cuenta los segundos que un compoenete está en pantalla ¿children? es una propiedad que incluye el conjunto de componentes que anida. 



🎲 **Ejercicio**

> Crea una página donde muestre los detalles del usuario. Para acceder a ella solo basta con hacer click en su IdCard. Va a ser necesario que se guarde la siguiente información del usuario:
>
> - Nombre
> - Apellidos
> - E-mail
> - Teléfono
> - Ciudad
> - Provincia
> - Código postal
> - Edad
> - Género



[<< Volver](https://github.com/kode-neko/super-gestor-empleados)

