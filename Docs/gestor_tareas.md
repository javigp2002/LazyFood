# Gestor de tareas

Un gestor de tareas dentro del proyecto es esencial, provee valores automatizando las tareas a desarrollar dentro del mismo. Para elegir el mismo tendremos que elegir la opción más óptima dentro de nuestro entorno elegido así como aquella que realice de una manera sencilla todos los procesos que necesitemos para, por ejemplo, ejecutar linter (herramienta a cargo de la mejora del código para identificar fallos o problemas del sistema). También es importante la regularidad con la que este se actualiza, es decir, cuando se lanzó su última versión.

## Drake

Inspirado en Make, Rakke y Jake este es un task-runner creado para deno donde los “DrakeFiles” son los módulos  de Deno los cuales importan el módulo, definen y registran las tareas y las ejecutan. Sus scripts se pueden escribir en Typescript y su última versión fue la v1.6.0 hace 1 año.

## Task Runner

Es una herramienta que puede manejar diferentes archivos de tareas así como herramientas. Asimismo, esta es el task runner por defecto que se puede ejecutar con `deno task` y,  por tanto, está actualizada al día con nuestro runtime.

## Moon

Hace 3 meses se anuncio la entrada de este task-runner como nueva herramienta para Deno el cual tiene una interfaz para poder realizar las tareas de una manera más sencilla  e intuitiva, así como en su yml se establece el lenguaje y el tipo de proyecto que estamos creando. No obstante, esta está en fase experimental lo que lo hace un poco inestable con distintos bugs.

## Quasar Tsk Runner (QTR)

Herramienta flexible que deja escribir en Typescript utilizando deno. Está permite ejecutar tareas de la shell  o usar las funcionalidades proias de deno. Por otro lado, se pueden compartir las tareas y las tareas con scripts tras proporcionar objetos de los archivos del sistema, sistema operativo, path… Se actualizó hace 4 semanas con su v0.0.8, es decír están activos realizando cambios en el mismo pero quizás sea una versión demasiado temprana que puede suponer muchos problemas.

## Elección

Finalmente viendo las características de todos elegimos **Task Runner** como nuestro gestor de tareas por la simplicidad que nos va a dar mientras trabajemos con nuestro runtime así como actualizaciones dedicadas debido a que este se establece como el task-runner por defecto.