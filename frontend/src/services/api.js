const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/donaciones';

export const registrarDonacion = async (donacion) => {
    // Quitamos el "/registrar-ayuda" porque Java no lo conoce
    const response = await fetch(`${API_URL}`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donacion)
    });
    
    // Es importante verificar si la respuesta es correcta antes de convertir a JSON
    if (!response.ok) {
        throw new Error('Error en el servidor');
    }
    return response.json();
};

export const obtenerResumen = async () => {
    // Aquí también quitamos lo extra para que traiga la lista completa
    const response = await fetch(`${API_URL}`);
    return response.json();
};