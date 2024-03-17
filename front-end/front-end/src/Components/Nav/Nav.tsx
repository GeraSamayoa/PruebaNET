import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="d-flex justify-content-between mb-4 bg-dark bg-opacity-25 p-3 m-0">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className="d-flex gap-5">
                <Link to="/registro">Registro de Alumnos</Link>
                <Link to="/consulta">Consulta de Alumnos</Link>
            </div>
        </div>
    );
};

export default Nav;

