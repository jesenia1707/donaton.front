import LogisticaForm from '../components/organisms/LogisticaForm';

const SeguimientoPage = () => {
    const { id } = useParams(); 

    return (
        <div className="page-container">
            <h2>Gestionar Logística de Donación #{id}</h2>
            {/* Primero el formulario para GUARDAR */}
            <LogisticaForm donacionId={id} />
            
            <hr />
            
            {/* Abajo el status para VER lo guardado */}
            <LogisticaStatus donacionId={id} />
        </div>
    );
};