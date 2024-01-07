# Elección REST API

## Criterios de elección

Como antes hemos realizado en todas las anteriores elecciones vamos a comenzar 
con los criterios necesarios para poder elegir la herramienta:

- Queremos que sea sencillo de utilizar e implementar en nuestro proyecto y la posibilidad de uso con `JSON`.
- Eficiente y escalable.
- Otra parte importante del proyecto es que, al estar solos, hay que minimizar los errores causados por librerías de terceros. Por ello, una buena documentación y comunidad es necesaria de cara a los posibles problemas.
- Facilidad de integración con Deno.

Por otro lado, en cuanto a Flask y Express son dos frameworks famosos y conocidos pero no por ello los mejores:

- `Flask` tiene desventajas claras en torno a su carencia de amplia comunidad, su escalabilidad a aplicaciones grandes, sin posibilidad de ejecutar como administrador, login o autenticación y una migración dificultosa de la base de datos
- `Express`: el principal objetivo de una `API REST` es que sea rápida, sin embargo, aunque este tiene una enorme cantidad de posibilidades es demasiado pesado y lento para procesos pequeños.

## Posibles herramientas

### [Oak](https://deno.land/x/oak@v12.6.1)

Es extremadamente popular dentro de los usuarios de deno debido a que está ampliamente reconocido con una comunidad amplia que ayuda a la solución de errores. Se implementa de forma sencilla sobre el código y permite fácil instalación en deno debido a que existe como paquete dentro de [deno.land](http://deno.land) así como un uso amplio de los JSON. Su última actualización  fue hace 4 meses.

### [Fastify](https://fastify.dev/)

Gran tiempo de respuesta siendo uno de los más rápidos, posibilidad de añadir schemas JSON, y sencillo de utilizar con un framework muy expresivo con amplia documentación y comunidad. Se añade a través de npm. 93/100 en seguridad de [snyk.io](http://snyk.io) (aunque no es un criterio relevante es siempre importante).

### [Hapi](https://hapi.dev/)

Se centran en su seguridad y como realizan la conectividad end-to-end cuyo código ha sido verificado linea por linea (según afirman aunque en snyk no he podido encontrar mucho sobre ellos). Eficiencia en sus librerías con un 100% de cobertura de código lo cual es que el código fuente ha sido ejecutado con pruebas unitarias por todos lados. Instalación a través de npm.

### [Axiod](https://deno.land/x/axiod@0.26.2)

Inspirado por axios para su uso en deno se ha creado utilizando el cliente HTTP para deno desde node.js, soporta Promise API, intercepción y transformación de peticiones y respuestas a JSON y capacidad de cancelar peticiones. Sin embargo, no tiene una amplia comunidad debido a que está basado en AXIOS pero no es el mismo y su última actualización fue hace 1 año.

## Elección Final

Eliminando la última por su falta de consistencia, las tres anteriores me parecen todas muy buenas e interesantes para el uso en nuestra aplicación. No obstante, al tener que elegir, **Oak**  es la que mejor cumple con nuestras expectativas con un uso de los propios usuarios de deno, su amplia documentación y comunidad, además de la seguridad que, no por no salir en snyk advisor es mala y varios artículos también lo defienden. Por último, no hay que añadirlo a través de npm sino del propio `deno.land`.