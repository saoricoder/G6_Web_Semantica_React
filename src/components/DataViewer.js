import React from 'react';
import '../styles/componentes/DataViewer.css';

/**
 * Componente para visualizar datos en formato JSON
 * Reutilizable para cualquier tipo de datos
 */
function DataViewer({ data, title = 'Datos JSON' }) {
  return (
    <div className="data-viewer">
      <h3 className="data-viewer__title">{title}</h3>
      <pre className="data-viewer__content">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default DataViewer;
