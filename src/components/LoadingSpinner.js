import React from 'react';
import '../styles/componentes/LoadingSpinner.css';

/**
 * Componente de carga
 */
function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__circle"></div>
      <p className="loading-spinner__text">Cargando datos de la API...</p>
    </div>
  );
}

export default LoadingSpinner;
