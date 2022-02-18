# Redux

## Almacén Central

A medida que crece nuestra aplicación de React, el arbol de componentes se vuelve más complejo. No solo por la cantidad de nodos, sino por su profundidad. La comunciación entre componente padre e hijo es fácil ¿Qué ocurre cuando hay que comunicarse con un tataranieto? ¿O un primo lejano?

[img]

Para solventar este problema surje el cocnepto de "almacén central"

**Almacén**
Zona donde se guarda información. Esta es accesible y modificable en cualquier parte de una aplicación.

Para implementar este almacén usaremos una tecnología llamada Redux. Puede trabajarse con Vanila JS o con React. Sin embargo, está pensado para usarse con esta librería.

## Funcionamiento Redux

Cada componente puede hacer 2 operaciones con el almacén central

- **consultar**: Ver que información hay. Al conjutnod e esta información se le llama **estado**.
- **modificar**: Alterar la información del almacén (añadir, modificar o borrar). paar ello envía mensajes o **actions**.

A su vez el almacén central tiene sus siguientes funciones

- **Informar**: Los componentes están suscritos a determinada información del almacén. Cuando ésta es alterada, el almacén informa a los subscriptores del nuevo cambio.
- **Actualizar**: Cuando llegan mensajes o actions, los hace pasar a través de los **reducers**. Son funciones que modifican el estado dependiendo del action. Lo normal es que cada action tenga su reducer, pero en algunas ocasiones pueden ser varios.

[img]

## Implementación

Explicaremos 2 formas de hacerlo, resulta que con el paso del tiempo han surgido librerías que facilitan su integración con React.

- **Forma Actual**: Necesitas las dependencias `redux` y `react-redux`. También se trabaja con `@reduxjs/toolkit`, la cual facilita la creación y organización del almacén.
- **Forma Tradicional**: Solo usas `redux` y `react-redux`. Bastante arduo de mantener a medida que crece el almacén.

### Ejemplo

Vamos ha usar un sencillo ejemplo para explicar la forma actual y tradicional. Crearemos un simple to-do. Los ficheros que hay acontinuación están incompletos. A medida que avancen los ejemplos van completándose.

**App.js**

```jsx
const App = () => {
  return (
    <>
      <TodoList />
      <TodoAdd />
    </>
  );
};
```

**todo-list.jsx**

```jsx

const TodoList = () => {

    return (
        <div>
            {todoList.map(todo => {
                <div>{todo.title}</div>
                <div>{todo.description}</div>
            })}
        </div>
    );
}
```

**todo-form.jsx**

```jsx
const TodoForm = () => {
  return (
    <form>
      <div>
        <label>Title</label>
        <input />
      </div>
      <div>
        <label>Description</label>
        <input />
      </div>
      <div>
        <button type="submit">Crear</button>
      </div>
    </form>
  );
};
```

Este código daría errores de compilación. El resto de la lógica lo creamos con Redux.

### Forma Actual

Descarguemos las siguientes herramientas

```bash
yarn add redux react-redux
```

Vamos a crear el estado inciial, los reducers y los actions

store/todo.js

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

// El estado se modifica dentro de cada reducer. Esto es así porque usan una librería llamada "immer"
const reducers = {
  addTodo: (state, action) => {
    const todo = action.payload;
    state = [...state.list, action.payload];
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers,
});

const { addTodo } = userSlice.actions;

export { todoSlice, addTodo };
```

store/index.js

```javascript
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo";

const rootReducer = combineReducers({ todo: todoSlice });
const store = configureStore({ reducer: rootReducer });
```

Modificamos los archivos de la aplicación

**App.js**

```jsx
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <TodoAdd />
    </Provider>
  );
};
```

**todo-list.jsx**

```jsx
import { useSelector } from "react-redux";

const TodoList = () => {

    const todolist = useSelector(state => state.todo.list);
    return (
        <div>
            {todoList.map(todo => {
                <div>{todo.title}</div>
                <div>{todo.description}</div>
            })}
        </div>
    );
}
```

**todo-form.jsx**

```jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todo.js";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
      }}
    >
      <div>
        <label>Title</label>
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <div>
        <button type="submit">Crear</button>
      </div>
    </form>
  );
};
```

### Forma Tradicional

Under construction 