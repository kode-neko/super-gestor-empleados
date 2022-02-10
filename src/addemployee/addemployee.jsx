import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  return (
    <div>
      <a onClick={() => navigate(-1)}>Volver</a>
      <p>Esta es la pagina para añadir empleado :-D</p>
    </div>
  );
};

export default AddEmployee;
