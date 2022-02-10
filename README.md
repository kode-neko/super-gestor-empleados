# React

¡Bienvenidos al repo del curso de Iniciación a React! Aquí se iran colgando los distintos materiales para completarlo.

## Setup

Necesario instalar las siguientes herramientas:

- **Visual Studio Code**: La propia [web](https://code.visualstudio.com/) incluye una guía para hacerlo. Se recomienda tener los siguientes paquetes descargados:

  - Auto Import
  - ESLint
  - Prettier
  - Simple react Snippets
  - yarn-ui

- **Node (v16.13.2)**: Nos decargamos el `tar.xz de la web`

  ```
  tar xf node-v16.14.0-linux-x64.tar.xz
  ```

  En estaguía se explica paso a paso como copiar los bianrios a su lugar correspondiente https://github.com/nodejs/help/wiki/Installation
  Si lo tenemos instalado y hay problemas con las versiones, en este [tutorial](https://medium.com/@martinmuelas/usando-node-js-con-nvm-516062f4dcdb) podemos ver como manejar el `nvm`. Es una aplicación para gestionar versiones de node.

- **NPM (v8.4.1)**: La instalación de node incluye este gestor de paquetes. Si queremos tener otra versión distinta escribamos `npm install npm@latest -g`

Una vez que tengamos el setup inicial instalamos estos 2 paquetes

- **yarn**: En vez de usar NPM para gestionar paquetes usaremos Yarn. Es casi lo mismo pero funciona de forma más eficiente.
- **create-react-app**: Una herramienta que se usará surante el tutorial

```
npm install -g yarn
yarn add install global create-react-app
```

