import { FieldValues } from 'react-hook-form';

interface Alumno extends FieldValues {
    id: number;
    nombre: string;
    fechaNacimiento: string;
    nombrePadre: string;
    nombreMadre: string;
    grado: string;
    seccion: string;
    fechaIngreso: string;
}

export default Alumno;