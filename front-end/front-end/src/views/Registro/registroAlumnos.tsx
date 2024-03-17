import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { useState } from 'react';



const RegistroAlumnos = () => {
    const { register, handleSubmit, reset } = useForm();
    const [error, setError] = useState<string>('');
    const [confirmation, setConfirmation] = useState<string>('');
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        fetch('https://localhost:7106/api/Alumno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'oea543ns-4ne6-43ie-9e4n-4n3e-uoeah83oetn20'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    setConfirmation('Alumno registrado correctamente.');
                    setError('');
                    reset();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .catch(error => {
                setError('Error registrando alumno: ' + error.message);
                setConfirmation('');
            });
    };
    return (
        <>
            <Nav />
            <div className="d-flex justify-content-center">
                <div className="card bg-opacity-25 " style={{ borderRadius: "15px" }}>
                    <div className="card-body p-1">
                        <h2 className="text-uppercase text-center mb-3">Registrar Alumno</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-outline mb-4">
                                <label className="form-label" >Nombre:</label>
                                <input className="form-control form-control-lg" type="text" placeholder="Ingrese su nombre" {...register('nombre')} />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Fecha de Nacimiento:</label>
                                <input className="form-control form-control-lg" type="date" {...register('fechaNacimiento')} />
                            </div>
                            <div className="form-outline mb-4 d-flex gap-5">
                                <div className="col">
                                    <label className="form-label" >Nombre del Padre:</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="Ingrese el nombre" {...register('nombrePadre')} />

                                </div>
                                <div className="col">
                                    <label className="form-label" >Nombre de la Madre:</label>
                                    <input className="form-control form-control-lg" type="text" placeholder="Ingrese el nombre" {...register('nombreMadre')} />
                                </div>
                            </div>
                            <div className="form-outline mb-4 d-flex gap-5 justify-content-around">
                                <div>
                                    <label className="form-label" >Grado:</label>
                                    <select className="form-control form-control-lg" {...register('grado')} >
                                        <option value="Seleccione un grado" disabled>Seleccione un grado</option>
                                        <option value="Primero">Primero</option>
                                        <option value="Segundo">Segundo</option>
                                        <option value="Tercero">Tercero</option>
                                        <option value="Cuarto">Cuarto</option>
                                        <option value="Quinto">Quinto</option>
                                        <option value="Sexto">Sexto</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label">Seccion:</label>
                                    <select className="form-control form-control-lg" {...register('seccion')}>
                                        <option value="" disabled>Seleccione una sección</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" >Fecha de Ingreso:</label>
                                <input className="form-control form-control-lg" type="date" {...register('fechaIngreso')} />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-success btn-block btn-lg gradient-custom-4 text-white" type="submit">Registrar Alumno</button>
                            </div>
                            {error && <div className="alert alert-danger mt-4">{error}</div>}
                            {confirmation && <div className="alert alert-success mt-4">{confirmation}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default RegistroAlumnos;