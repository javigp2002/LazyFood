# Sistemas de Integración Continua 

Son una herramienta de software que centraliza todas las operaciones de integración continua y proporciona una plataforma fiable y estable para poder crear sus proyectos.

## Criterios 

Vamos a introducir el CI de Github obligatoriamente y, además, incluiremos otro CI que siga:

- **Checks API**: para poder integrarlo con GitHub

- **Fiablidad**: actualizaciones recibidas o últimas versiones lanzadas

- **Gratuito**: debe ser gratuito para proyectos públicos.

- **Trabajar con Docker**: permite trabajar con docker.

- **Trabajar con Deno**: permite trabajar con deno y typescript.

## Elección

### [Circle CI](https://circleci.com/)
Permite fácil integración entre **GitHub**, existen tutoriales para poder trabajar y construir pipelines sobre proyectos **Deno**, se puede ejecutar imagenes **docker** para iniciar un contenedor y es **gratuito**

Además contiene fácil integración y la úlltima actualización fue en **noviembre de 2023**.

### [Azure Pipeline](https://azure.microsoft.com/es-es/products/devops)

Tras varios intentos con la **prueba gratuita** de Azure DevOps no ha sido fácil la integración con **Deno**, por tanto, lo eliminamos como opción. Azure DevOps permite una manera de hacer pipelines pero no se especifica fácilmente en la documentación sobre como ejecutar tests de una **imagen**. Se puede comprobar en los pull request generados el intento de hacer el mismo. Asimismo, al ejecutar el test pedía realizar un *formulario  para poder realizar testeos en paralelo* que responderían de 1-3 días laborables...

### [Amazon Web Services](https://aws.amazon.com/es/codepipeline/)

Tiene una **versión gratuita** sin embargo, esta permite un número limitado de peticiones al pipeline hasta que llegue el cobro, sin embargo, cuando te estas creando la cuenta pide una tarjeta de crédito para ejecutar dichas transacciones llegado el momento lo que no me transmitía ninguna seguridad. Por ello, podríamos decir que **es de pago**.

### [Cirrus Ci](https://cirrus-ci.org/)

Permite una instalación sobre el repositorio de github de una manera sencilla y la creacion de .cirrus.yml así como un código fácil y una interfaz sencilla y se puede utilizar sobre **Github**. Además para permite un entorno de ejecucción de imagenes **docker** y ofrece soporte con problemas o errores en aquellas que sean remotas. Por tanto, esto lleva a poder ejecutar **deno** sin problemas. La última actualización de su documentación fue en **julio de 2023**

### [Semaphore Ci](https://semaphoreci.com/)

No emplea checks API sino statuses y permite trabajar con docker, sin embargo, no se puede instalar gratuitamente con Github. Por lo que ya no puede ser una opción a elegir


### Elección

Entre las opciones que tenemos, personalmente, me hubiera gustado encontrar más información sobre `Azure Pipelines` aunque no ha sido posible por la falta de documentación sobre el entorno docker y deno que he podido encontrar. Por otra parte, es una pena que `AWS` no permita a los usuarios conocer sus productos sin la necesidad de introducir una tarjeta de crédito aunque no haga falta pagar las primeras veces puesto que dejar eso ahi lo carga el diablo... Finalmente entre `Cirrus` y `Circle` me ha gustado más, [después de intentar integrar ambas](./images/apps_github.png), `Circle Ci` por su facilidad y manejo sencillo.