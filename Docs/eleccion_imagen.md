# Elección de imagen de docker

## Criterios a seguir

Siguiendo las buenas prácticas realizadas hasta ahora lo primero es seleccionar los criterios para poder elegir la imagen más conveniente.

- La imagen debe poder **funcionar**, debido a la deuda técnica en la elección del gestor de dependencias, **en deno**

- La imagen ha de ser segura, es decir, debe ser actualizada con frecuencia y a través de un equipo conocido o que sea verificado

- **Rapidez**: cada imagen puede tener alguna dependencia que pueda retrasar la ejecución del programa por tanto, buscamos, en las distintas imagenes que se encuentren, la que realice los tests en menos tiempo.

- Por seguridad, además, debe solo poder incluir las herramientas necesarias para el proyecto

## Imágenes candidatas

La elección de las buenas prácticas dentro del entorno docker puede requerir una primera instalación de un sistema operativo y, después, la instalación de Deno en el mismo o elegir una imagen que tenga ambas a la vez. En nuestro caso, la elección de la segunda opción es clara puesto que en el primer criterio a seguir confirmamos que la imagen funcione perfectamente en nuestro ámbito. 

Por ello, las imágenes con este pack son 4 y todas generadas por una persona particular, [Ryah](https://hub.docker.com/u/ryah),  que ha sido determinada para llevar el docker oficial de deno. Este mantiene deno en 4 Sistemas Operativos: Debian, Centos, Ubuntu y Alpine.

## Elección

Después de desglosar las distintas opciones, al proceder de una entidad oficial el segundo criterio de la **seguridad y actualizaciones** queda completamente cerrada.

Ahora, para probar las distintas velocidades debemos instalarnos las 4 y probarlas con nuestros tests.

[Tests en docker Ubuntu](./images/ubuntu.png) - 5ms | 71.8MB

[Tests en docker Centos](./images/centos.png) - 4ms | 124.19MB

[Tests en docker Debian](./images/debian.png) - 4ms | 72.34MB

[Tests en docker Alpine](./images/Alpine.png) - 4ms | 50.94MB

Tras los tests solo podemos eliminar a Ubuntu como posible imagen. Ahora lo que haremos sera buscar en [snyk](snyk.io) las vulnerabilidades de los sistemas operativos en docker.

[Centos](https://snyk.io/test/docker/centos) - 30 High, 303 Medium, 214 low

[Alpine](https://snyk.io/test/docker/alpine) - 2 High

[Debian](https://snyk.io/test/docker/debian) - 1 Critical

Es cierto que Centos tiene más puesto que es un SO más utilizado pero siendo objetivos con los criterios. **Alpine** será la [imagen](https://hub.docker.com/r/denoland/deno/) utilizada por nosotros en este proyecto y será nuestro contenedor de pruebas.
 
