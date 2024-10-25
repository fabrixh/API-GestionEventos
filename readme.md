
# **API Gestión de Eventos**  

Este proyecto es una API desarrollada con **Node.js**, **Express** y **MongoDB** que permite gestionar eventos mediante operaciones CRUD básicas y funcionalidades de negocio específicas para el curso Node de la formación Pilar Tecno Edicion 2024.

---

## **Características**

- **Registrar un participante**: Permite registrar a un nuevo participante en un evento si hay entradas disponibles.
- **Obtener eventos con entradas disponibles**: Muestra los eventos que aún tienen entradas para ofrecer.
- **Obtener eventos por fecha**: Filtra los eventos programados para una fecha específica.

---

## **Tecnologías Utilizadas**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- dotenv (para gestión de variables de entorno)

---

## **Instalación y Configuración**

1. Clona el repositorio:
   ```bash
   git clone <https://github.com/fabrixh/API-GestionEventos.git>
   cd API-GestionEventos
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:  
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   MONGO_URI=<localhost:3000/db/API-GestionEventos>
   PORT=3000
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

---

## **Rutas del API**

### **Registrar un participante en un evento**  
`POST /eventos/:id/registrar`  
- Registra un participante si hay entradas disponibles.  
- **Body** (JSON):
   ```json
   {
     "nombre": "Fabricio Herrera",
     "email": "Tuentrada@gmail.com"
   }
   ```

### **Obtener eventos con entradas disponibles**  
`GET /eventos/disponibles`  
- Devuelve todos los eventos con más de 0 entradas disponibles.

### **Obtener eventos por fecha**  
`GET /eventos/fecha/:fecha`  
- Devuelve los eventos programados para la fecha proporcionada en formato `YYYY-MM-DD`.

---

## **Ejemplo de Modelo de Evento**

```javascript
{
  "nombre": "Concierto de Rock",
  "descripcion": "Un concierto en vivo al aire libre.",
  "fecha": "2024-12-15T18:00:00Z",
  "lugar": "Estadio Central",
  "participantes": [],
  "capacidadMaxima": 100,
  "entradasDisponibles": 100
}
```

---

## **Autor**  
Fabricio Herrera  
[LinkedIn](https://www.linkedin.com/in/fabrixh) - [Instagram](https://www.instagram.com/fabrixh)  

