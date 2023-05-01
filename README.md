# Actividad realizada por Pedro Gómez Alonso para el BootCamp impartido por NTT Data

## Objetivo

El objetivo de esta actividad es realizar un CRUD completo para acceder a una API de usuarios para poder realizar el alta de los mismos, la baja, la modificación y su visualización.

Opcionalmente, se propone realizar lo mismo para los trayectos (que tendrán usuarios asociados y una estructura del JSON un poco más compleja). Esta parte aún estoy realizándola.

La actividad debe ser realizada con Angular utilizando la plantilla "fuse-starter". 

## Componentes creados
* **Bienvenida**: 

    En este componente, simplemente se da la bienvenida a la aplicación y se explica su utilidad. Además será la ruta por defecto en caso de no indicar nada en la URL.
* **Usuario**: 

    Este componente será el que se encargue del registro de los nuevos usuarios. Mostrará un formulario de registro, que al rellenarlo y darle a guardar, creará un objeto
de tipo UsuarioData y realizará un POST a la API con su información.
* **Usuarios**: 

    En este componente se muestran todos los usuarios registrados (realiza un GET a la API) y, mediante un buscador, permite buscar usuarios por los diferentes criterios
de búsqueda (por nombre, localidad, email y provincia). Además, en este componente se almacena el servicio de usuario que inyectaremos en la clase principal con todos los métodos necesarios
para realizar las peticiones HTTP.
* **Viajes**: 

    No me ha dado tiempo a acabarlo, pero lo haré en los próximos días por puro aprendizaje personal. De momento realiza un GET de todos los viajes (sin mostrar los que no tienen
organizador asignado). Creé un par de botones y un formulario de creación de viaje, pero no me ha dado tiempo a implementar la funcionalidad.
