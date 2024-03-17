import { SetStateAction, useState } from 'react';
import { useFetchGet } from '../../hooks/UseFetchGet';
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Alumno from '../../Interfaces/Alumno';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';


const Consulta = () => {
    const [showAllAlumnos, setShowAllAlumnos] = useState(false);
    const [searchGrado, setSearchGrado] = useState('Seleccione un grado');
    const { data } = useFetchGet('https://localhost:7106/api/Alumno');

    const handleShowAllAlumnos = () => {
        setShowAllAlumnos(true);
        setSearchGrado('');
    };

    const handleSelectChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setShowAllAlumnos(false);
        setSearchGrado(e.target.value);
    };


    const filteredAlumnos = data?.filter(alumno => {
        return alumno.grado.toLowerCase().includes(searchGrado.toLowerCase());
    });
    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES'); 
    }



    return (
        <>
            <Nav />
            <div>
                <div>
                    <h2 className="text-uppercase text-center m-5 text-white">Consultar Alumnos</h2>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div>
                        <h2 className="text-white">Seleccione un grado:</h2>

                        <select className="form-control form-control-lg cursor-pointer " value={searchGrado} onChange={handleSelectChange}>
                            <option value="">Selecciona un grado</option>
                            <option value="Primero">Primero</option>
                            <option value="Segundo">Segundo</option>
                            <option value="Tercero">Tercero</option>
                            <option value="Cuarto">Cuarto</option>
                            <option value="Quinto">Quinto</option>
                            <option value="Sexto">Sexto</option>
                            </select>
                     

    
                    </div>
                    <div>
                    <h2 className="text-white">Mostrar todos los alumnos:</h2>
                        <button className="btn border bg-white border-info  btn-block btn-lg gradient-custom-4 text-body" style={{}} onClick={handleShowAllAlumnos}>Mostrar</button>
                    </div>
                </div>
                {showAllAlumnos && (
                    <div className="row justify-content-center m-5 gap-5">
                        {data?.map((alumno: Alumno) => (
                            <div key={alumno.id} className="card d-flex justify-content-center gap-2" style={{width: "25rem", height: "27rem"} }>
                                <h2>{alumno.nombre}</h2>
                                <p>Fecha de Nacimiento: {formatDate(alumno.fechaNacimiento)}</p>
                                <p>Nombre del Padre: {alumno.nombrePadre}</p>
                                <p>Nombre de la Madre: {alumno.nombreMadre}</p>
                                <p>Grado: {alumno.grado}</p>
                                <p>Sección: {alumno.seccion}</p>
                                <p>Fecha de Ingreso: {formatDate(alumno.fechaIngreso)}</p>
                            </div>
                        ))}
                    </div>
                )}
                {!showAllAlumnos && searchGrado !== '' ? (
                    <div className="row justify-content-center m-5 gap-5">
                        {filteredAlumnos?.map((alumno: Alumno) => (
                            <div key={alumno.id} className="card d-flex justify-content-center gap-2" style={{width: "25rem", height: "27rem"} }>
                                <h2>{alumno.nombre}</h2>
                                <p>Fecha de Nacimiento: {formatDate(alumno.fechaNacimiento)}</p>
                                <p>Nombre del Padre: {alumno.nombrePadre}</p>
                                <p>Nombre de la Madre: {alumno.nombreMadre}</p>
                                <p>Grado: {alumno.grado}</p>
                                <p>Sección: {alumno.seccion}</p>
                                <p>Fecha de Ingreso: {formatDate(alumno.fechaIngreso)}</p>
                            </div>
                        ))}
                    </div>
                ) : null}
                {!showAllAlumnos && searchGrado == 'Seleccione un grado' ? (
                    <div style={{height: "20.5rem"} }></div>) : null}
            </div>

            <Footer />
        </>
    );

}

export default Consulta;