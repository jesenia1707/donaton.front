import React, { useState } from 'react';
import { registrarDonacion } from '../services/api';

const DonationForm = () => {
    const [formData, setFormData] = useState({
        tipo: 'ALIMENTO', // Antes era tipoRecurso
        cantidad: 0,
        ubicacion: ''     // Agregamos ubicación que es obligatoria en Java
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Aseguramos que cantidad sea un número entero
            const dataEnvio = {
                ...formData,
                cantidad: parseInt(formData.cantidad)
            };
            await registrarDonacion(dataEnvio);
            alert("¡Donación registrada con éxito!");
        } catch (error) {
            alert("Error al conectar con el servidor. Revisa la consola de Java.");
        }
    };

    return (
        <div className="card p-4 shadow-sm">
            <h3>Registrar Donación</h3>
            <form onSubmit={handleSubmit}>
                <label>Tipo de Ayuda:</label>
                <select 
                    className="form-select mb-2"
                    onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                >
                    <option value="ALIMENTO">Alimento</option>
                    <option value="ROPA">Ropa</option>
                    <option value="MEDICINA">Insumos Médicos</option>
                </select>

                <label>Cantidad:</label>
                <input 
                    type="number" 
                    className="form-control mb-2"
                    placeholder="Cantidad"
                    onChange={(e) => setFormData({...formData, cantidad: e.target.value})}
                />

                <label>Ubicación:</label>
                <input 
                    className="form-control mb-2"
                    placeholder="Ej: Bodega Central"
                    onChange={(e) => setFormData({...formData, ubicacion: e.target.value})}
                />

                <button type="submit" className="btn btn-primary w-100">Enviar Ayuda</button>
            </form>
        </div>
    );
};

export default DonationForm;