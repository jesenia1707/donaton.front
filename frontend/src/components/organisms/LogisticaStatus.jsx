import React, { useState, useEffect } from 'react';

const LogisticaStatus = ({ donacionId }) => {
    const [datos, setDatos] = useState(null);

    const cargarEstado = () => {
        if (donacionId) {
            fetch('http://localhost:30080/api/logistica')
                .then(res => res.json())
                .then(data => {
                    const miLogistica = data.find(
                        item => item.donacionId === parseInt(donacionId)
                    );

                    setDatos(miLogistica);
                })
                .catch(err =>
                    console.error("Error al cargar:", err)
                );
        }
    };

    useEffect(() => {
        cargarEstado();
    }, [donacionId]);

    const iniciarLogistica = () => {
        const nuevaLogistica = {
            estado: "PENDIENTE",
            direccionDestino: "Dirección de prueba",
            fechaEntrega: "2026-06-17",
            donacionId: parseInt(donacionId)
        };

        fetch('http://localhost:30080/api/logistica', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaLogistica)
        })
        .then(res => res.json())
        .then(() => cargarEstado())
        .catch(err => {
            console.error(err);
            alert("Error al guardar en Base de Datos");
        });
    };

    if (!datos) {
        return (
            <div className="status-container">
                <p>No hay registro de logística para esta donación.</p>

                <button onClick={iniciarLogistica}>
                    Crear Registro de Envío
                </button>
            </div>
        );
    }

    return (
        <div className="status-container">
            <h3>Estado: {datos.estado}</h3>
            <p>Dirección: {datos.direccionDestino}</p>
            <p>
                Fecha: {datos.fechaEntrega || 'Por confirmar'}
            </p>
        </div>
    );
};

export default LogisticaStatus;

