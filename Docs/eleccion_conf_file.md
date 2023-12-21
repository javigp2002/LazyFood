# Elección de configuración file

Deno, por defecto, soporta los archivos de configuración con archivos `.json` si los detecta en el directorio de ejecución o superiores. Por tanto, como esto es insuficiente para poder utilizar archivos `.env` y tendremos que crear nuestra propia instancia del mismo. Ahora tenemos 2 opciones, crear el nuestro o encontrar uno de terceros en deno.land o github.

## Criterios de elección

- Tenemos que tener un archivo de configuración que nos permita obtener tanto los .json como los .env

- Que se haya trabajado en este repositorio en los últimos meses, es decir, que esté actualizado

## Opciones

### Creación de nuestro propio archivo de configuración

Esta opcion valida, siempre que lo realicemos así, los criterios. Sin embargo, tiene el problema de que tiene que estar mantenido por nosotros y, si hay algun cambio en los repositorios que se utilicen, entonces fallará.

### (Deno config)[https://deno.land/x/deno_config@v0.1.2]

Está más orientado al mantenimiento a través de "streamline"  la aplicación de deno a traves de cli, .env y archivos json. Sin embargo, la última versión se realizó hace 2 años

### (Config)[https://deno.land/x/config@v1.3.0]

Es un módulo orientado a recoger fácilmente los archivos de configuración pero solo json. Por tanto, no es posible.

### (node-Config)[https://github.com/node-config/node-config/wiki/Configuration-Files]

Módulo bastante completo que permite trabajar con muchisimos tipos de extensiones: `json`, `ts`... que lee la configuración en ./config con un orden y está actualizado hasta hace 6 meses. 

## Elección

Finalmente, la mejor opcioón es crear nuestro propio archivo de configuración ayudandonos de node-config para poder crear una instancia completa que utilice nuestro programa y lea las variables de `.config/default.json`.

