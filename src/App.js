import React from 'react';
import ApiTester from './components/ApiTester';
import './styles/componentes/App.css';

/**
 * Componente raíz de la aplicación
 * Estructura principal de la SPA
 */
function App() {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header-content">
          <h1 className="App__title">🌐 Web Semántica con React y Laravel</h1>
          <p className="App__subtitle">Demostrando JSON-LD en una API REST</p>
        </div>
      </header>

      <main className="App__main">
        <ApiTester />
      </main>

      <footer className="App__footer">
        <p className="App__footer-text">
          © 2025 Aplicación de Web Semántica | 
          <a href="https://schema.org" target="_blank" rel="noopener noreferrer"> Schema.org</a> | 
          <a href="https://www.w3.org/TR/json-ld/" target="_blank" rel="noopener noreferrer"> JSON-LD W3C</a>
        </p>
      </footer>
    </div>
  );
}

export default App;