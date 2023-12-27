# Elección de librería de log

## Criterios de elección
- Compatible con deno
- Posibilidad de impresión por consola
- Impresión a archivo seleccionado
- Actualizado con frecuencia

En realidad la mayoría de estos criterios se siguen por todos las librerías.


## Posibles Candidatos

### [Deno-Logger-standard](https://deno.land/std@0.209.0/log/mod.ts)
Librería de logging con soporte tanto por terminar como por salida a archivo. Además permite construir loggers personalizados. Esta mantenido por Deno y su formato por defecto es {levelName}{msg}. Permite tanto _Inline Logging_ (devuelve datos que se les pasa por el __msg__ parameter) como _Lazy Log Evaluation_ (algunos log statements pueden ser pesados y, por tanto, se previene este cómputo si el logger no va a loggear el mensaje). Estas últimas no nos sirven especialmente para el objetivo pero siempre es bueno que se permitan diferentes e interesantes opciones.

### [Deno-logger](https://deno.land/x/logger@v1.1.3)

Es compatible con deno y trae colores como en NODEJS, proviene de npm y, al ser, oficial está actualizado (hace 3 semanas). Posibildad de uso "console logger", "file logger only" y "file and console logger"

### [Houston](https://deno.land/x/houston@1.0.0)
Logger sin dependencias parecido al famoso winston. Permite tanto "ConsoleTransport", como "FileTransport" y "WebTransport"(envia un put con los logs para ser guardados en un servidor externo). No obstante, la última vez que se actualizó este log fue hace 3 años

### [Tiny Logger](https://deno.land/x/tiny_logger@v1.0.13)
Logs compatible con Deno debido a que es uno de las librerias de terceros que están implementadas, puede crear tanto csv como txt files con objetos JSON y además log por consola. La última actualización fue hace 11 meses. Además tambié tiene el famoso "Pretty console output"

### Decisión Final

En primer lugar, un criterio de elección es la actualización y podríamos descartar tanto Tiny Logger como Houston pueden que empiecen a estar anticuadas y entre los dos logger de deno, los cuales cumplen todos los criterios, siempre es conveniente utilizar los que, normalmente van a seguir actualizados y nos dan más opciones de cara al futuro debido a que son los mantenidos por Deno. Por ende, la elección final es: **Deno-Logger-standard**