# USER STORY
Como responsable de la unidad de información climática quiero un módulo web para consultar las
condiciones climáticas actuales de una determinada ciudad, con la opción de ver el histórico de consultas
previas.
Criterios de Aceptación:
- Se requiere utilizar la API abajo definida
- Se debe poder configurar las ciudades que se podrán consultar.
- La información debe ser persistida en base de datos de forma de poder consultar los históricos de
la ciudad configurada.
- El checkbox incluir histórico deberá incluir al clima actual los últimos X registros del historial de
consultas, en caso que esté seleccionado.
- El botón consultar mostrará el estado del clima actual y la historia dependiendo del punto anterior.

## HERRAMIENTAS/TECNOLOGÍA
- Para Back office: .NET Core API Rest
- Para la GUI Angular
- DataBase: SQL Server
API: http://openweathermap.org/current
Ej: http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar

## ASPECTOS EVALUADOS
- Comunicación
- Fecha de compromiso
- Documentación del código
- Buenas prácticas
- Tecnologías aplicadas
- Extensibilidad y mantenibilidad del código
- Premisas y assumptions
Suerte!