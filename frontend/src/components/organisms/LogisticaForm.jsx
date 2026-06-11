import React, { useState } from 'react';

const LogisticaForm = ({ donacionId }) => {
    const [envio, setEnvio] = useState({
        estado: 'pendiente',
        direccionDestino: '',
        fechaEntrega: '',
        donacionId: donacionId // Viene de la URL
    });

    const handleChange = (e) => {
        setEnvio({ ...envio, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8082/api/logistica', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(envio)
        })
        .then(res => res.json())
        .then(data => alert("¡Guardado en pgAdmin!"))
        .catch(err => alert("Error: Revisa si IntelliJ está corriendo"));
    };

    return (
        <form onSubmit={handleSubmit} style={{padding: '20px', border: '1px solid #ccc'}}>
            <input name="direccionDestino" placeholder="Dirección" onChange={handleChange} />
            <input name="estado" placeholder="Estado" onChange={handleChange} />
            <input name="fechaEntrega" type="date" onChange={handleChange} />
            <button type="submit">Guardar en Base de Datos</button>
        </form>
    );
};

export default LogisticaForm;