import React, { useState } from 'react';

const LogisticaForm = ({ donacionId }) => {
    const [envio, setEnvio] = useState({
        estado: 'pendiente',
        direccionDestino: '',
        fechaEntrega: '',
        donacionId: donacionId
    });

    const handleChange = (e) => {
        setEnvio({ ...envio, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:30080/api/logistica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(envio)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("¡Logística guardada correctamente!");
        })
        .catch(err => {
            console.error(err);
            alert("Error al guardar logística");
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                padding: '20px',
                border: '1px solid #ccc'
            }}
        >
            <input
                name="direccionDestino"
                placeholder="Dirección"
                onChange={handleChange}
            />

            <input
                name="estado"
                placeholder="Estado"
                onChange={handleChange}
            />

            <input
                name="fechaEntrega"
                type="date"
                onChange={handleChange}
            />

            <button type="submit">
                Guardar en Base de Datos
            </button>
        </form>
    );
};

export default LogisticaForm;

