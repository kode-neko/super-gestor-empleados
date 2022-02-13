[<< Volver](https://github.com/kode-neko/super-gestor-empleados)



# 2. Nuevo Proyecto



## 2.1. create-react-app

Vamos a crear nuestro increible proyecto "super-gestor-empleados" 🦸

```bash
yarn create react-app super-gestor-empleados
yarn start
```



Se abre el navegador con la siguiente pantalla

<video width="320" height="240" controls autoplay>
    <source src="src/default-cra.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>

Vemos que tenemos la siguiente estructura de directorios

```
📂 super-gestor-empleados
 ┣ 📂 node_modules
 ┣ 📂 public
 ┣ 📂 src
 ┣ 📜 .gitignore
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┣ 📜 yarn.lock
```

- **node_modules**: La carpeta donde se guardan las dependencias que necesita el proyecto.
- **public**: Todo lo que sea susceptible de no ser "construido" y que aparece en nuestra web final. De entrada suena raro. - index.html: Lá única página de nuestro proyecto web. Hace referencia al `src/index.js` - recursos multimedia: Las imágenes, videos o fuentes normalmente son incluidos aquí.
  Cuando hacemos un `yarn build` o `yarn start`, coge todo lo de src y lo construye. Después lo junta con lo de la carpeta public y ya tenemos la app.
- **src**: Todos los archivos `.js`, `.jsx` y `.css` del proyecto.
- **.gitignore**: Preparar uno para evitar subir al repositorio ficheros innecesarios. Por ejemplo el `node_modules` ocupa muchísimo y cada usuario puede descargarse la deps cuando quiera.
- **package.json**: Donde aparecen las coordenadas y listados de dependencias. También otro tipo de información como scripts propios u otras configuraciones.
- **README.md**: Es un estándar de facto en proyecto de Github incluir un fichero de información. Así sabemos de que va el proyecto y posibles instrucciones o configuraciones para hacerlo funcionar.
- **yarn.lock**: Tiene la misma funcionalidad que el `package.lock`. Guarda el árbol de dependencias y sus versiones.



## 2.2. Limpieza

Antes de comenzar hay que hacer limpieza del proyecto. De esta forma trabajaremos más cómodos. Vamos a borrar lo siguientes ficheros:

- `public/favicon`
- `public/logo192.png`
- `public/logo512.png`
- `src/logo.svg`
- `src/App.test.js`

También borramos SOLO el contenido de estos ficheros:

- `src/App.css`
- `src/index.css`

El `public/manifest.json` debe contener lo siguiente:

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```



## 2.2. Insertas Recursos

Añadimos a la carpeta `públic` los recursos comprimidos en este [enlace](./src/recursos.tar.gz). Son las imágenes que usaremos en el proyecto 🖼️ Si no te acuerdas de descomprimir te dejo esta chuleta 🍖

```bash
tar xzvf recursos.tar.gz
```



## 2.3. Crear IdCard

¿Te acuerdas del componente que creamos en la sesión anterior? Nos lo llevamos al nuevo proyecto.

Comenzamos creando la siguiente estructrua de directorios dentro de la carpeta `src`

```
📂 src
 ┣ 📂 idcard
    ┣ 📜 index.js
    ┣ 📜 idcard.jsx
    ┣ 🎨 idcard.module.css
```

Incluimos el siguiente código



**idcard.jsx**

```jsx
import styles from "./idcard.module.css";

const IdCard = (props) => {
  const user = {
    avatar: "man.png",
    name: "Perico",
    surname: "De los Palotes",
    mail: "perico@gmail.com",
    phone: 600212376,
    city: "Torrevieja",
    state: "Alicante",
  };

  return (
    <div>
      <img alt="user avatar" />
      <div>
        <h3>
          {user.name} {user.surname}
        </h3>
        <ul>
          <li>{user.email}</li>
          <li>{user.phone}</li>
          <li>{user.city} ({user.state})</li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;
```



**index.js**

```javascript
import IdCard from "./idcard";

export default IdCard;
```



Modificamos el `App.js` para que aparezca el `IdCard`



**App.js**

```jsx
import './App.css';
import IdCard from './idcard';

function App() {
  return (
    <div className="App">
      <IdCard />
    </div>
  );
}

export default App;
```



Obtenemos lo siguiente.

[imagen]



Un poco "cutre" 😅 Vamos ha añadir los estilos. Diversos `class` se usará más adelante.



**idcard.jsx**

```jsx
    <div className={styles.idCard}>
      <img className={styles.avatar} src={user.avatar} alt="user avatar" />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {user.name} {user.surname}
        </h3>
        <ul>
          <li>
            <img className={styles.icon} src="mail.png" alt="mail" />{" "}
            {user.email}
          </li>
          <li>
            <img className={styles.icon} src="phone.png" alt="phone" />{" "}
            {user.phone}
          </li>
          <li>
            <img className={styles.icon} src="location.png" alt="location" />{" "}
            {user.city} ({user.state})
          </li>
        </ul>
      </div>
    </div>
```



**idcard.module.css**

```css
.idCard {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin: 40px;
  padding: 20px;
  background-color: dodgerblue;
  border-radius: 2px;
  color: white;
  box-shadow: 4px 4px 4px silver;

  transition: transform 0.3s, background-color 0.3s;
}

.idCard:hover {
  transform: translate(6px, -6px);
  background-color: royalblue;
  cursor: pointer;
}

.idCard .avatar {
  height: 128px;
  width: 128px;
  border-radius: 50%;
  border-color: lightskyblue;
  border-width: 8px;
  border-style: solid;
}

.idCard .idInfo {
  display: flex;
  flex-direction: column;
}

.idCard .info ul,
.idCard .info ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.idCard .info ul li {
  font-size: 18px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.idCard .info .name {
  font-size: 32px;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}

.idCard .info .icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

```



**App.css**

```css
.userList {
    max-width: 992px;
    margin: 0 auto;
    padding-top: 80px;
}
```



Ahora mucho mejor 😎



[imagen]



[<< Volver](https://github.com/kode-neko/super-gestor-empleados)