import { useEffect, useState } from 'react';
import Alumno from '../Interfaces/Alumno';


// Definimos la api-key como una constante
const API_KEY = "oea543ns-4ne6-43ie-9e4n-4n3e-uoeah83oetn20";

export function useFetchGet(url: string) {
    const [data, setData] = useState<Alumno[] | null>(null);

    useEffect(() => {
        fetch(url, {
            headers: {
                'api-key': API_KEY
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching alumnos:', error));
    }, []);

    return { data };
}
