# Sistemas de Integración Continua 

Sones una herramienta de software que centraliza todas las operaciones de integración continua y proporciona una plataforma fiable y estable para poder crear sus proyectos.

## Criterios 

Vamos a introducir el CI de Github obligatoriamente y, además, incluiremos otro CI que siga:

- **Checks API**: para poder integrarlo con GitHub

- **Fiablidad**: actualizaciones recibidas o últimas versiones lanzadas

- **Gratuito**: debe ser gratuito para proyectos públicos.

- **Trabajar con Docker**: permite trabajar con docker.

- **Trabajar con Deno**: permite trabajar con deno y typescript.

## Elección

### Circle CI
Permite fácil integración entre GitHub, Deno, docker y es gratuito

Además contiene fácil integración y la úlltima actualización fue en noviembre de 2023.

### Azure Pipeline

Tras varios intentos con la prueba gratuita de Azure DevOps no ha sido fácil la integración con Deno, por tanto, lo eliminamos como opción. Azure DevOps permite una maner de hacer pipelines pero no se especifica fácilmente en la documentación sobre como ejecutar tests de una imagen. Se puede comprobar en los pull request generados el intento de hacer el mismo.

### Amazon Web Services

No permite tampoco una versió gratuita de prueba para estudiantes lo que lo inhabilita tras pedir obligatoriamente la tarjeta de cŕedito.

### Cirrus Ci

Permite una instalación sobre el repositorio de github de una manera sencilla y la creacion de .cirrus.yml así como un código fácil y una interfaz sencilla y se puede utilizar sobre Github

### Semaphore Ci

Emplea checks API y permite trabajar con docker, sin embargo, no se puede instalar gratuitamente con Github.


### Elección

Entre las opciones que tenemos, personalmente, me hubiera gustado encontrar más información sobre `Azure Pipelines` aunque no ha sido posible por la falta de documentación sobre el entorno docker y deno que he podido encontrar. Por otra parte, es una pena que `AWS` no permita a los usuarios conocer sus productos sin la necesidad de introducir una tarjeta de crédito aunque no haga falta pagar las primeras veces puesto que dejar eso ahi lo carga el diablo... Finalmente entre `Cirrus` y `Circle` me ha gustado más, [después de intentar integrar ambas](./images/apps_github.png), `Circle Ci` por su facilidad y manejo sencillo.