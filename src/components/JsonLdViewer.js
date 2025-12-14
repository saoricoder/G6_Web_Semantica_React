import React from 'react';
import '../styles/componentes/JsonLdViewer.css';

/**
 * Componente especializado para mostrar JSON-LD
 * Extrae y visualiza datos semánticos
 */
function JsonLdViewer({ data }) {
  // Extraer JSON-LD según la estructura de la respuesta
  const extractJsonLd = (responseData) => {
    if (!responseData) return null;

    // Si es un ItemList con múltiples elementos
    if (responseData['@type'] === 'ItemList' && responseData.itemListElement) {
      return responseData.itemListElement;
    }

    // Si es un objeto individual con @type
    if (responseData['@type']) {
      return responseData;
    }

    return null;
  };

  const jsonLdData = extractJsonLd(data);

  if (!jsonLdData) {
    return (
      <div className="jsonld-viewer jsonld-viewer--empty">
        <p>⚠️ No se encontró estructura JSON-LD en la respuesta</p>
      </div>
    );
  }

  return (
    <div className="jsonld-viewer">
      <div className="jsonld-viewer__header">
        <h3 className="jsonld-viewer__title">📋 JSON-LD Extraído</h3>
      </div>

      {/* Mostrar como código RAW */}
      <div className="jsonld-viewer__raw">
        <h4 className="jsonld-viewer__subtitle">1. Estructura JSON-LD (Raw)</h4>
        <pre className="jsonld-viewer__code">
          {JSON.stringify(jsonLdData, null, 2)}
        </pre>
      </div>

      {/* Mostrar como sería en HTML */}
      <div className="jsonld-viewer__script">
        <h4 className="jsonld-viewer__subtitle">2. Como Script Tag en HTML</h4>
        <p className="jsonld-viewer__description">
          Así se integraría en el &lt;head&gt; o &lt;body&gt; del HTML:
        </p>
        <div className="jsonld-viewer__html-example">
          <pre>{`<script type="application/ld+json">
${JSON.stringify(jsonLdData, null, 2)}
</script>`}</pre>
        </div>
      </div>

      {/* Mostrar propiedades semánticas */}
      {typeof jsonLdData === 'object' && !Array.isArray(jsonLdData) && (
        <div className="jsonld-viewer__properties">
          <h4 className="jsonld-viewer__subtitle">3. Propiedades Semánticas</h4>
          <table className="jsonld-viewer__table">
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(jsonLdData).map(([key, value]) => (
                <tr key={key}>
                  <td className="jsonld-viewer__property-name">{key}</td>
                  <td className="jsonld-viewer__property-value">
                    {typeof value === 'object' 
                      ? JSON.stringify(value) 
                      : String(value)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default JsonLdViewer;
