# Runtime

Los criterios de decisión pueden y crean deudas técnicas en torno a todo el trabajo, esto 
conlleva que la elección de cualquier parte de nuestra app ha de ser bien planteada. 

Para el runtime de nuestra app tenemos que tener en cuenta unos criterios preelegidos para 
nuestro proyecto. Para ello, los estableceremos ahora: lo más importante de nuestra comparación 
tiene que ser que sean cómodos tanto de utilizar como de poder encontrar información, descartando 
así la mayoría de runtimes que crea la comunidad por su cuenta o no son demasiado conocidos. 
Por otro lado, al encontrarnos dentro de un proyecto fruto de una asignatura de la universidad 
innovar y no tirar de lo “popular” es también oportuno. Además, también es necesario indicar que 
se sigan los estándares y guiarnos por la cantidad de información que podamos encontrar del mismo. 
Por último, al encontrarnos en la rama de Tecnologías de Información, la seguridad es un punto clave.

## Node.js

Es el claro ganador de los runtime en cuanto a popularidad y cantidad de información que se puede 
encontrar del mismo Su ecosistema es muy amplio debido a que la mayoría de la gente lo ha implementado 
en sus proyectos y se conocen infinidad de soluciones para sus errores, así como una amplia gama de 
librerías y recursos. Sin embargo, un defecto que este tiene es la necesidad de un gestor de dependencias 
como NPM, YARN, PNPM… así como es necesario 2 fases para poder ejecutar el código de typescript.

## Deno

Basado en Rust se creó con el pensamiento de desbancar a Node.js. Este tiene un ecosistema estable con 
suficientes desarrolladores que cumplen la función para poder resolver problemas comunes y bugs oportunos. 
Además presenta un avance en la seguridad por tener que establecer explícitamente el acceso de ficheros, 
entorno y red, así como, soportar mejor JSX y Typescript. A diferencia de Node.js este no necesita de un 
gestor de dependencias sino que estas se instalan a través de la URL donde se encuentra la dependencia y 
su gestor interno facilita también al desarrollador la implementación de nuevo código. Su última versión se realizó hace 2 semanas (v1.37.2.)

## Bun

Implementado por Zig es también compatible con la mayoría de paquetes de Node.js y mucho más rápido que
cualquiera de los dos anteriores con hasta el doble y triple de respuestas por segundo comparado con 
Deno y Node.js, respectivamente. Además, al igual que Deno permite un todo-en-uno sin necesidad de un 
gestor de dependencias externo. Sin embargo, aunque todo esto suena muy convincente, la realidad es 
que se encuentra en su primera versión en producción lo que está resultando en bugs constantes por parte de los
desarrolladores que lo implementan y, por tanto, un problema de seguridad en el mismo, aún así su 
valoración en SNYK es de 95/100 con la última versión lanzada este mes, el 10/2023. 

## Elección

Finalmente, la elección más equilibrada es Deno debido a su estabilidad y en creciente comunidad, la 
facilidad que nos resulta no tener que depender de un gestor de dependencias externo y así probar otros 
runtimes que no se han probado previamente para abrir el horizonte de opciones.