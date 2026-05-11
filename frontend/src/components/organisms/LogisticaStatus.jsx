import React, { useState, useEffect } from 'react';

const LogisticaStatus = ({ donacionId }) => {
    const [datos, setDatos] = useState(null);

    // 1. Cambiamos el puerto a 8080 y la lógica de búsqueda
    const cargarEstado = () => {
        if (donacionId) {
            fetch(`http://localhost:8082/api/logistica`) // Traemos todos para buscar el nuestro
                .then(res => res.json())
                .then(data => {
                    const miLogistica = data.find(item => item.donacionId === parseInt(donacionId));
                    setDatos(miLogistica);
                })
                .catch(err => console.error("Error al cargar:", err));
        }
    };

    useEffect(() => {
        cargarEstado();
    }, [donacionId]);

    // 2. Función para GUARDAR datos (esto llenará tu pgAdmin)
    const iniciarLogistica = () => {
        const nuevaLogistica = {
            estado: "PENDIENTE",
            direccionDestino: "Dirección de prueba",
            fechaEntrega: "2026-05-15",
            donacionId: parseInt(donacionId)
        };

        fetch('http://localhost:8082/api/logistica', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevaLogistica)
        })
        .then(res => res.json())
        .then(() => cargarEstado()) // Recargar la vista tras guardar
        .catch(err => alert("Error al guardar en DB"));
    };

    if (!datos) {
        return (
            <div className="status-container">
                <p>No hay registro de logística para esta donación.</p>
                <button onClick={iniciarLogistica}>Crear Registro de Envío</button>
            </div>
        );
    }

    return (
        <div className="status-container">
            <h3>Estado: {datos.estado}</h3>
            <p>Dirección: {datos.direccionDestino}</p>
            <p>Fecha: {datos.fechaEntrega || 'Por confirmar'}</p>
        </div>
    );
};

export default LogisticaStatus;