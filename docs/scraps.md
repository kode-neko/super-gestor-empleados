⭐ **Webs dinámicas, estáticas y lo que surja...**

> Vamos brevemente a describir el ecosistema actual de tipos de webs. La idea es que te suenen los nombres.
>
> - **Static Web**: Las primeras que hubo. Hacias click en un enlace y el navegador descargaba la página a la que apunta. Da la sensación de web entrecortada, la navegación no es fluida. Hay que esperar a que se cargue todo el DOM de una página.   Incluso al rellenar un formulario y pulsar el botón, se carga otra página o la misma indicando los errores. Más adelante con el surgimiento de Ajax hizo que estos formularios no tuvieran que cargar otra página. Se amplio su uso como por ejemplo formularios con sugerencias de texto. Podemos encontrar tecnologías arcaicas como ActiveX, CGIs o incluso Flash. Al final Java, PHP o Asp tomarón el relevo. La página se creaba en el servidor y la devolvía.
> - **Single Page Application (SPA)**: El término Ajax se abandonó y solo nos referimos a "peticiones asíncronas". Tenemos una única página al que modificamos el DOM. Hacemos aparecer y desaparecer todos los elmentos. Todo contacto con el servidor es a través de las peticiones asíncronas. Uso de javascript puro y duro. La web estáticas comenzaron poco a poco a mutar a este concepto. La tarea se hacía tan compleja en JS que aparecieron librería y Frmeworks para ayudar. En los comienzos teniamos Backbone.js, Knockout, Ember.js o React 1.x. Todos ellos basados en la filosfía MVC, pero esta no llegaba a cuajar. Al final evolucionaron en una filosofía de "componentes web" con tecnologías como Angular 2.x, React.js o Vue.js.
> - **Server-Side Rendering (SSR)**: Las SPA cargan al principio un index.html casi desnudo, con un codigo JS que va dibujando el DOM y hace peticiones asíncronas. Esto generó problemas de SEO al no poder un buscador leer una web desnuda. La idea es usar una tecnología como React en el servidor, haga la página y la devuelva. Esta misma página puede continuar con React modificando el DOM. Al final se crea un híbrido estático con tecnologias frontales.
> - **Static Site Generation (SSG)**: El rizo se lia más ahora... 


Hook
Funciones para facilitar realizar la siguienets operaciones:
Afectar al estado del componente
Disparar acciones en determinados momentos del ciclo de vida
Manipular el contexto y referencias de componentes



arbol de dependencias

tumbar procesos

porque se renderiza 2 veces
