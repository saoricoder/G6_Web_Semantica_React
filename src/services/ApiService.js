/**
 * Servicio de API para consumir Laravel
 * Centraliza toda la lógica de comunicación con el backend
 */

import axios from 'axios';

// Configuración base de la API
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Crear instancia de axios con configuración predeterminada
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

/**
 * Servicio de API
 * Proporciona métodos para consumir todos los endpoints
 */
class ApiService {
  /**
   * Obtener todos los médicos
   */
  static async getDoctors() {
    try {
      const response = await apiClient.get('/doctors');
      return response.data;
    } catch (error) {
      throw this._handleError(error, 'obtener médicos');
    }
  }

  /**
   * Obtener un médico específico
   * @param {number} id - ID del médico
   */
  static async getDoctorById(id) {
    try {
      const response = await apiClient.get(`/doctors/${id}`);
      return response.data;
    } catch (error) {
      throw this._handleError(error, `obtener médico ${id}`);
    }
  }

  /**
   * Obtener todos los pacientes
   */
  static async getPatients() {
    try {
      const response = await apiClient.get('/patients');
      return response.data;
    } catch (error) {
      throw this._handleError(error, 'obtener pacientes');
    }
  }

  /**
   * Obtener un paciente específico
   * @param {number} id - ID del paciente
   */
  static async getPatientById(id) {
    try {
      const response = await apiClient.get(`/patients/${id}`);
      return response.data;
    } catch (error) {
      throw this._handleError(error, `obtener paciente ${id}`);
    }
  }

  /**
   * Obtener todas las especialidades
   */
  static async getSpecialties() {
    try {
      const response = await apiClient.get('/specialties');
      return response.data;
    } catch (error) {
      throw this._handleError(error, 'obtener especialidades');
    }
  }

  /**
   * Obtener una especialidad específica
   * @param {number} id - ID de la especialidad
   */
  static async getSpecialtyById(id) {
    try {
      const response = await apiClient.get(`/specialties/${id}`);
      return response.data;
    } catch (error) {
      throw this._handleError(error, `obtener especialidad ${id}`);
    }
  }

  /**
   * Obtener todas las citas
   */
  static async getAppointments() {
    try {
      const response = await apiClient.get('/appointments');
      return response.data;
    } catch (error) {
      throw this._handleError(error, 'obtener citas');
    }
  }

  /**
   * Obtener una cita específica
   * @param {number} id - ID de la cita
   */
  static async getAppointmentById(id) {
    try {
      const response = await apiClient.get(`/appointments/${id}`);
      return response.data;
    } catch (error) {
      throw this._handleError(error, `obtener cita ${id}`);
    }
  }

  /**
   * Manejo centralizado de errores
   * @param {Error} error - Error de axios
   * @param {string} operation - Operación que se intentó realizar
   */
  static _handleError(error, operation) {
    if (error.response) {
      // Error de respuesta del servidor
      const status = error.response.status;
      const message = error.response.data?.message || 'Error en la respuesta';
      console.error(`Error ${status} al ${operation}:`, message);
      
      return new Error(
        `Error ${status}: No se pudieron ${operation}. ${message}`
      );
    } else if (error.request) {
      // No hay respuesta del servidor
      console.error(`Error de conexión al ${operation}:`, error.message);
      return new Error(
        `No se pudo conectar al servidor. Verifica que Laravel esté ejecutándose en ${API_BASE_URL}`
      );
    } else {
      // Error desconocido
      console.error(`Error al ${operation}:`, error.message);
      return new Error(`Error inesperado: ${error.message}`);
    }
  }
}

export default ApiService;
