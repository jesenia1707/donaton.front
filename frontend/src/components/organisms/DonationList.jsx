import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DonationList = () => {
    const [donaciones, setDonaciones] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Aquí llamas a tu backend de donaciones (o usuarios si ahí las guardas)
        fetch('http://localhost:30321/api/donaciones') 
            .then(res => res.json())
            .then(data => setDonaciones(data))
            .catch(err => console.error("Error cargando donaciones:", err));
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Mis Donaciones</h2>
            <table className="min-w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Descripción</th>
                        <th className="border p-2">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {donaciones.map((donacion) => (
                        <tr key={donacion.id} className="text-center">
                            <td className="border p-2">{donacion.id}</td>
                            <td className="border p-2">{donacion.descripcion}</td>
                            <td className="border p-2">
                                <button 
                                    onClick={() => navigate(`/seguimiento/${donacion.id}`)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                >
                                    Ver Seguimiento 🚚
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonationList;