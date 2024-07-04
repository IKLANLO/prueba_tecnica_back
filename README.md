
# Prueba técnica backend

Este servicio está creado con Node.js, usando como framework Express.js. 

Se ha decidido utilizar para almacenar los datos una base de datos en MongoDB, y para gestionar las operaciones con la misma se usa Mongoose.


## Claves de acceso

Antes de la puesta en servicio deben introducirse en un archivo .env el puerto a utilizar y la url de acceso a la base de datos de MongoDB. Para ello se proporciona el archivo de ejemplo .env.example, debiendo crear un .env usando las variables incluidas en el ejemplo, rellenando los datos correspondientes.

### Puesta en servicio
Tras rellenar los datos, deben introducirse por terminal los siguientes comandos:

- npm install
- npm run dev

Una vez levantado el servicio saldrá un mensaje indicando el puerto de conexión y que la conexión a la base de datos ha sido correcta.

En caso de que haya un error con la conexión, verificar los datos de acceso.



