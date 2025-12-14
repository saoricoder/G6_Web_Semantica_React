import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';
import DataViewer from './DataViewer';
import JsonLdViewer from './JsonLdViewer';
import LoadingSpinner from './LoadingSpinner';
import ErrorAlert from './ErrorAlert';
import '../styles/componentes/ApiTester.css';

/**
 * Componente principal para consumir y mostrar datos de la API
 * Demuestra el funcionamiento de JSON-LD en la API REST
 */
function ApiTester() {
  // Estados para los datos
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeEndpoint, setActiveEndpoint] = useState('doctors');

  // Definir los endpoints disponibles
  const endpoints = {
    doctors: {
      label: '👨‍⚕️ Médicos',
      fetch: () => ApiService.getDoctors(),
    },
    patients: {
      label: '🏥 Pacientes',
      fetch: () => ApiService.getPatients(),
    },
    specialties: {
      label: '📋 Especialidades',
      fetch: () => ApiService.getSpecialties(),
    },
    appointments: {
      label: '📅 Citas Médicas',
      fetch: () => ApiService.getAppointments(),
    },
  };

  /**
   * Cargar datos del endpoint seleccionado
   */
  const loadData = async (endpoint) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await endpoints[endpoint].fetch();
      setData(result);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Cargar datos al montar el componente
   */
  useEffect(() => {
    loadData(activeEndpoint);
  }, [activeEndpoint]);

  /**
   * Manejar cambio de endpoint
   */
  const handleEndpointChange = (endpoint) => {
    setActiveEndpoint(endpoint);
  };

  return (
    <div className="api-tester">
      <div className="api-tester__container">
        {/* Sección de Selección de Endpoints */}
        <section className="api-tester__section api-tester__section--selector">
          <h2 className="api-tester__section-title">🔗 Selecciona un Endpoint</h2>
          <div className="api-tester__buttons">
            {Object.entries(endpoints).map(([key, endpoint]) => (
              <button
                key={key}
                className={`api-tester__button ${
                  activeEndpoint === key ? 'api-tester__button--active' : ''
                }`}
                onClick={() => handleEndpointChange(key)}
                disabled={loading}
              >
                {endpoint.label}
              </button>
            ))}
          </div>
        </section>

        {/* Sección de Contenido */}
        <section className="api-tester__section">
          {error && (
            <ErrorAlert 
              error={error} 
              onClose={() => setError(null)}
            />
          )}

          {loading && <LoadingSpinner />}

          {!loading && data && (
            <>
              <DataViewer 
                data={data} 
                title={`📊 Respuesta JSON - ${endpoints[activeEndpoint].label}`}
              />
              <JsonLdViewer data={data} />
            </>
          )}
        </section>

        {/* Sección de Información */}
        <section className="api-tester__section api-tester__info">
          <h3 className="api-tester__info-title">ℹ️ Información</h3>
          <div className="api-tester__info-content">
            <p>
              Esta aplicación demuestra cómo consumir una API REST desarrollada en Laravel
              que retorna datos estructurados con JSON-LD para web semántica.
            </p>
            <p>
              <strong>API Base URL:</strong> <code>http://127.0.0.1:8000/api</code>
            </p>
            <p>
              <strong>Esquema:</strong> Schema.org - Vocabulario estándar para web semántica
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ApiTester;
