import React from 'react';
import '../styles/componentes/ErrorAlert.css';

/**
 * Componente para mostrar errores
 */
function ErrorAlert({ error, onClose }) {
  return (
    <div className="error-alert">
      <div className="error-alert__content">
        <span className="error-alert__icon">⚠️</span>
        <div className="error-alert__message">
          <h4 className="error-alert__title">Error al conectar con la API</h4>
          <p className="error-alert__text">{error}</p>
        </div>
        {onClose && (
          <button className="error-alert__close" onClick={onClose}>
            ✕
          </button>
        )}
      </div>
      <div className="error-alert__tips">
        <p><strong>Soluciones:</strong></p>
        <ul>
          <li>Verifica que Laravel esté ejecutándose: <code>php artisan serve</code></li>
          <li>Asegúrate de que la URL sea correcta: <code>http://127.0.0.1:8000</code></li>
          <li>Verifica que CORS esté habilitado</li>
          <li>Consulta la consola del navegador para más detalles</li>
        </ul>
      </div>
    </div>
  );
}

export default ErrorAlert;
