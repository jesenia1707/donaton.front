const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/bff/v1';

export const registrarDonacion = async (donacion) => {
    const response = await fetch(`${API_URL}/registrar-ayuda`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donacion)
    });
    return response.json();
};

export const obtenerResumen = async () => {
    const response = await fetch(`${API_URL}/resumen-emergencia`);
    return response.json();
};