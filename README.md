¿qué generó el comando nest new?
inicializa un nuevo proyecto en nestjs y este se encarga en hacer la arquitectura del proyecto

¿qué hace el AppService que ya viene generado?
pues su función es devolver un hello word  y tambien demuestra la inyección de dependencias y la separación de responsabilidades

¿por qué la ruta funciona sin declarar nada en app.module.ts?
en si , si declara algo no declara la ruta si no el controlador que contiene la ruta

¿qué pasaría si el cuerpo de la petición viniera vacío?
nada por que si es una petición get estas están diseñadas para pedir datos no para enviarlos por lo que el server ignora cualquier body que le pongas
y si usamos post seria lo mismo a menos que le indiques que los extraiga con el decorador @body en los parámetros de la funcion y los extrae y si este viene vacio
simplemente entrega un objeto vacio

¿en qué archivo vive hoy toda la lógica de la práctica?
esta dividia en dos partes una es en el service que es donde vive la logica de negocio y en controller que es donde se manejan las peticiones http basicamente actua como un recepcionista que va recibiendo las peticiones



