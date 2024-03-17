# PruebaNET

Requisitos para su ejecucion:

Node

Visual Studio 2022

.NET 8

Ejecucion del programa
# Backend
1.  Al clonar este repositorio en nuestra maquina local y abrirlo en Visual Studio,
procedemos a abrir la solucion PruebaNET.sln y nos quedaran dos carpetas una
back-end y otra fron-end.

2.  Para la ejecucicion del back-end basta con darle en ejecutar como https el cual 
esta por defecto al iniciar la solucion, sino procederias a cambiarlo a este.

3.  Al ejecutarse se nos crea un localhost https que seria el siguiente https://localhost:7106/
este localhost es el que nos provee la API al cual se va conectar el front-end para su 
manipulacion.

4.  La conexion a la base de datos no es necesario modificarla ya que esta conectada a una DB en
la nube, igualmente se deja en el repositorio el archivo BaseDeDatosExportada.sql, el cual 
contiene la base de datos exportada por si se quiere tener localmente esta pertenece a MySQL.

5.  Ahora nuestra API ya esta en ejecucion lista para ser consumida.

# Frontend
1.  El front-end esta realizado con React y Typescript por lo que debemos tener instalado Node e 
instal el Nuget de Tipescript en Visual Studio el cual lo solicita al iniciar la solucion.

2.  Ahora abrimos la consola de nuestro gusto, ya sea PowerShell, Bash o la interna de Visual Studio.
Entonces debemos dirigirnos a la siguiente 'ruta' RutaLocal\PruebaNET\front-end\front-end, donde 
RutaLocal es el lugar/ruta que se eligio para guardar el proyecto al clonarlo, por lo que 
ejecutamos el comando cd 'ruta'

3.  Ahora que ya estamos en esta ruta procedemos a instalar las dependecias de node_modules por medio
del comando npm install.

4.  Ahora que ya tenemos las dependencias de npm, procedemos a ejecutar nuestro fron-end por medio
del comando npm run dev, el cual nos creara un localhost http que es el siguiente 
http://localhost:5173/ el cual abrimos en nuestro navegador.

5.  Aca ya podremos utilizar nuestro programa para realizar sus acciones correspondientes ya que el
fron-end esta consumiendo la API por medio del localhost que abrimos anteriormente en el back-end.
