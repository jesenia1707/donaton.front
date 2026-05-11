import React from 'react';
import { useParams } from 'react-router-dom';
import LogisticaStatus from '../components/organisms/LogisticaStatus';

const SeguimientoPage = () => {
    const { id } = useParams(); // Obtiene el ID de la donación de la URL

    return (
        <div className="page-container">
            <h2>Seguimiento de tu Donación #{id}</h2>
            {/* Aquí insertamos el organismo */}
            <LogisticaStatus donacionId={id} />
        </div>
    );
};

export default SeguimientoPage;