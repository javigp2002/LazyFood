# Elección de herramientas de test

Las herramientas para los tests han de ser lo suficientemente complejas para que permitan conocer 
si el nuevo código ingresado es correcto y, sencillas, para poder terminar en un `Ok` o `Nok`.

## Metodología empleada

La metodología empleada para los de tests será guiada por el principio FIRST y "la cantidad no equivale a calidad". Por ello, debemos tener:

- **Fast**: test rápidos (ayudándonos de las herramientas a elegir para los mismos). 
- **Independent**: los tests deben ser independientes de los otros, es decir, no deben de ejecutarse en un orden para que funcione.

- **Repeatable**: el resultado de las pruebas no tiene dependencias sobre el servidor, hora de ejecución, usuario... 
- **Self-validating**: autoevaluables, oportunas (las pruebas se desarrollan antes del código).

## Herramientas CLI

Empleadas para poder ejecutar los tests, analizar la salida y producir un informe, nuestro proyecto 
ya tiene integrado el mismo en nuestro [Runtime](runtime.md) Deno con el cual la suborden `test`  
realiza ya la propia labor.

## Frameworks o test runners

La elección del mismo vendrá determinada por la mantenibilidad que está teniendo con actualizaciones (minimizando la `deuda técnica`), facilidad de inserción en nuestro proyecto.

### [Orange](https://deno.land/x/orange@v0.5.0)

Es un framework para deno, aunque originalmente para [Manderine Framework](https://github.com/mandarineorg/mandarinets). Utiliza decoradores para declarar los tests, además tenemos que usar  `tsconfig.json`.

### [Machiatto](https://github.com/drashland/rhum/)

Modulo creado para aparentar la interfaz de Mocha con soporte en tests asíncronos. Además, provee de agrupación de tests con los comandos `Describe` con sus `it`. Por otro lado, permite también escribir, ejecuciones [asincronas](https://docs.deno.com/runtime/manual/basics/testing/) debido al runtime, dado una agrupación de tests, que hacer antes y despues de cada test. Todos los tests se ejecutan de manera definida en la programación a no ser que se decida el estilo asíncrono.

### [Deno Standard Library - Bdd.ts](https://deno.land/std@0.205.0/testing/bdd.ts?doc=)

Este se encuentra, a diferencia de los dos anteriores, en la libreria estandar de deno y permite numerosas funciones y agrupa tests y añade 'hooks' como otros frameworks de javascript (Mocha, Jasmine y Jest)
La inserción del mismo en el código y los tests es simple y se pueden agrupar con `Describe` y sus `it`. Por otro lado, permite numerosos pros con sus funcionalidades de agrupación (*nested*, *flat* y *mixex*), condicionantes para realizar o no un test... 

### Elección

En realidad cualquiera de los 3 es óptimo para nuestro proyecto aportando fiabilidad y facilidad en los mismos. No obstante, Orange necesita usar de json para su configuración y, entre Machiatto y Bdd.ts, la elección es equivalente aunque el standard de Deno no permite asincronía en la ejecución por test. No obstante, la elección por defecto de deno permite también más facilidades a la hora de elegir las diferentes herramientas y la seguridad de las actualizaciones frecuentes del mismo. Por ello, prevalece la librería que ofrece sin terceros a Deno, es decir, `Bdd.ts`.

## Libreria de aserciones

Para este apartado la necesidad de un buen y amplio conjunto de aserciones es favorable debido a que estas pueden clarificar el test desde
el punto de vista del desarrollador y la funcionalidad que se les espera dar.

### [Deno Standard Library - mod.ts](https://deno.land/std@0.205.0/assert/mod.ts)

Librería de aserciones por defecto de Deno con numerosas funciones que permiten conocer el estado y resultado que va a utilizar el task runner aunque deno permite añadir a esta distintos módulos de terceros. Esta librería ha implementado [Test Suite](https://deno.land/x/test_suite@0.16.1) cuyas aserciones se forman de manera similar a los conocidos *Jasmine*, *Jest* y *Mocha*. Esta permite agrupar tests, capacidad de ignorar o centrarse en tests, agrupación de tests cuyo conjunto pueden heredar opciones de configuración y hooks para los tests como *beforeAll*, *afterAll*, *beforeEach*, *afterEach* permitiendo mayor versatilidad.



### [Chai](https://deno.land/x/chai@v5.0.0)

BDD assertion library para node que también se puede utilizar en Deno para los tests en nuestro framework. Este permite tres estilos distintos de aserciones : Assert, expect y should. Estos pueden ser muy interesantes y facilitar el desarrollo. Además, es capaz de trabajar con estilos BDD (expresión de lenguaje y estilo de lectura), mientras que, TDD aplica un estilo más clasico. 

### [Explicity](https://deno.land/x/explicitly@0.5.0)

Esta en realidad simplemente añade nuevas aserciones al módulo de deno donde se encuentran numerosas nuevas funciones que hacen más explicito, como su propio nombre indica, la aserción que se está realizando en el test.

### Elección

Para la libreria de aserciones vamos a utilizar el que trae por defecto, por comodidad, Deno en su `Deno Standard Library` y, para añadir utilidad, ampliaremos con las aserciones que nos trae `Explicity` a esta para poder distinguirlos mejor. 