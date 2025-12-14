// Componente para extraer y mostrar el JSON-LD
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ jsonData }) => {
  // Asumiendo que tu JSON-LD está en una clave llamada 'json_ld' en la respuesta
  const jsonLdData = jsonData?.data?.json_ld || jsonData?.json_ld;

  if (!jsonLdData) {
    return <h3>⚠️ No se encontró la clave JSON-LD en la respuesta.</h3>;
  }

  // Convertir el objeto JSON-LD en un string JSON para el tag <script>
  const jsonLdString = JSON.stringify(jsonLdData, null, 2);

  return (
    <div>
      <hr />
      <h3>🔍 Visualización del JSON-LD</h3>

      <h4>1. JSON-LD extraído de la respuesta (Raw)</h4>
      <pre style={{ 
        backgroundColor: '#e6f7ff', 
        padding: '10px', 
        borderRadius: '5px',
        border: '1px solid #b3e0ff',
        whiteSpace: 'pre-wrap'
      }}>
        {jsonLdString}
      </pre>

      <h4>2. Simulación de Integración en el HTML (Script Tag)</h4>
      <p>Así es como se vería el JSON-LD incrustado en el *head* o *body* del HTML para un motor de búsqueda:</p>

      <div style={{ 
        backgroundColor: '#fff0e6', 
        padding: '10px', 
        borderRadius: '5px',
        border: '1px solid #ffd8b3',
        fontFamily: 'monospace'
      }}>
        <pre>
{`<script type="application/ld+json">
${jsonLdString}
</script>`}
        </pre>
      </div>
      
    </div>
  );
};