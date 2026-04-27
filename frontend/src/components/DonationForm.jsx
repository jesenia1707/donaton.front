import React, { useState } from 'react';
import { registrarDonacion } from '../services/api';

const DonationForm = () => {
    const [formData, setFormData] = useState({
        donante: '',
        tipoRecurso: 'ALIMENTO',
        cantidad: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registrarDonacion(formData);
            alert("¡Donación registrada con éxito!");
        } catch (error) {
            alert("Error al conectar con el servidor");
        }
    };

    return (
        <div className="card p-4 shadow-sm">
            <h3>Registrar Donación</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    className="form-control mb-2"
                    placeholder="Nombre del Donante"
                    onChange={(e) => setFormData({...formData, donante: e.target.value})}
                />
                <select 
                    className="form-select mb-2"
                    onChange={(e) => setFormData({...formData, tipoRecurso: e.target.value})}
                >
                    <option value="ALIMENTO">Alimento</option>
                    <option value="ROPA">Ropa</option>
                    <option value="MEDICINA">Insumos Médicos</option>
                </select>
                <input 
                    type="number" 
                    className="form-control mb-2"
                    placeholder="Cantidad"
                    onChange={(e) => setFormData({...formData, cantidad: e.target.value})}
                />
                <button type="submit" className="btn btn-primary w-100">Enviar Ayuda</button>
            </form>
        </div>
    );
};

export default DonationForm;