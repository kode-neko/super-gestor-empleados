¿Qué es el "estado" de un componente?

Conjunto de propiedades, los cuales usa el componente padre para comunicarse.
Conjunto de atributos, los cuales al modificarlos provocas que el componente se actualice.
Conto de atributos que una vez inicializados no pueden modificarse.


¿Qué son las "propiedades" de un componente?

Conjunto de atributos, los cuales usa el componente padre para comunicarse.
Conjunto de atributos, los cuales al modificarlos provocas que el componente se actualice.
Conto de atributos que una vez inicializados no pueden modificarse.


¿Qué son los hooks?

¡Garfios!
Funciones que facilitan las tareas a los componentes de tipo clase.
Funciones que facilitan las tareas a los componentes de tipo función.


useState

Permite realizar acciones en determinados momentos del ciclo de vida del componente.
Permite establecer las propiedades del componente.
Permite definir el estado del componente.


¿Podemos colocar varios useState y useEffect?

Rotundamente no
No se...
Claro que si


useEffect

Sirve para aplicar filtros de efecto
Sirve para desmontar el componente
Permite realizar acciones en determinados momentos del ciclo de vida del componente


¿Que hace este useEffect?

const [patata, setPatata] = useState(false);
useEffect(() => setPatata(!patata), []);

Se crea un bucle infinito
Solo es ejecutado después de montarse el componente
useEffect solo tiene 2 argumentos


¿Que hace este useEffect?

const [patata, setPatata] = useState(false);
useEffect(() => setPatata(!patata), [patata]);

Se crea un bucle infinito
Solo es ejecutado después de montarse el componente
useEffect solo tiene 2 argumentos


¿Qué orden sigue las fases del ciclo de vida de un componente?

Mount - Update - Unmount
Unmount - Update - Mount
Update - Unmont - Mount


¿Qué hay de malo en este código?

<BrowserRouter>
    <Router>
        <Route element={<h2>Patata</h2>} />
        <Route element={<h2>Pimiento</h2>} />
    <Router>
</BrowserRouter>


No hay nada malo, "react-router-dom" permite reorganizar tu código.
No se usa <Route /> sino <Link />
Falta el atributo "path"

¿Qué hook usamos para volver atras en el historial?

useLocation
useParams
useNavigate

¿Qué hook usamos para obtener parámetros de la url?

useLocation
useParams
useNavigate

¿Qué hook usamos para obtener queryParams?

useSearchParams
useParams
useNavigate

Formularios controlados

Necesitamos que los campos tengan los atributos "defaultValue" y "onChange". También guardarnos en el estado los cambios que vayan haciendo.
Necesitamos las referencias de los campos. Luego en el onSubmit del formulario consultamos.
Necesitamos que los campos tengan los atributos "value" y "onChange". También guardarnos en el estado los cambios que vayan haciendo.

Formularios no controlados

Necesitamos que los campos tengan los atributos "defaultValue" y "onChange". También guardarnos en el estado los cambios que vayan haciendo.
Necesitamos las referencias de los campos. Luego en el onSubmit del formulario consultamos.
Necesitamos que los campos tengan los atributos "value" y "onChange". También guardarnos en el estado los cambios que vayan haciendo.