# Historias de usuario
## User Journey
Esta aplicación pretende ayudar a los usuarios de _La Liga Fantasy_ a mejorar sus equipos. Esta aplicación externa funciona de la siguiente manera:

1. Al registrarse el usuario recibe una plantilla de 11 futbolistas aleatoria con valor de 100 Millones y 100 Millones más para fichajes. Lo que genera un presupuesto base de 200 Millones entre los 2. Este equipo irá cambiando con la compra-venta de futbolistas del usuario.

2. El usuario juega contra sus amigos en una "Liga de amigos" donde cada uno tiene un equipo de 11 futbolistas siendo estos únicos en la liga, es decir, solo puede pertenecer a 1.

3. A los futbolistas se les da una puntuación al terminar el partido que se basa en su actuación y si han ganado, empatado o perdido el partido.

4. Cada día sale al mercado de la liga de amigos 10 nuevos futbolistas que no pertenecen a ningún equipo de estos y se puja por ellos hasta el final del día.

5. Si un futbolista no juega, no recibe puntuación. Por ello, hay que tener en cuenta las últimas jornadas los partidos en los que ha jugado, cuanto tiempo lo ha hecho, como ha jugado según las estadísticas y el valor de mercado que tiene asignado, es decir, si un jugador del Girona en las últimas 3 jornadas juega 90 minutos, hace 2 goles, genera ocasiones, pases... y tiene un valor de mercado de 1 Millón es muy probable que su valor de mercado suba y por ello, el usuario quiera comprarlo para su equipo.

6. La heurística es compleja teniendo en cuenta las jornadas anteriores para no comprar un "futbolista de una noche" así como: contra quien se va a enfrentar en la siguiente jornada, trayectoria su equipo real en _La Liga EASports_.

7. Vender jugadores en un momento álgido de su valor también es necesario, es decir, el mismo jugador del Girona del que hemos hablado lleva 2 jornadas hacer nada pues será momento de venderlo y buscar uno nuevo. Además le habremos sacado rentabilidad.

8. El usuario puede comprar jugadores de otros equipos de la liga de amigos pagando su clausula de rescisión.

[Captura Fantasy 1](GerardMoreno.jpeg)
[Captura Fantasy 2](DatosFantasy.jpeg)
[Captura Fantasy 3](DatosFantasy2.jpeg)




## HU01: Antonio quiere conocer un equipo con buena previsión para la siguiente jornada con la puntuación óptima y su presupuesto base 

Antonio es un jugador de _La Liga Fantasy_ que quiere conocer un equipo para la siguiente jornada con la puntuación óptima de los futbolistas y con su presupuesto base de forma que pueda encontrarlos buenos y baratos para su equipo. Por ello, necesita un equipo con el nombre, puntuación y precio de los 11 futbolistas en las posiciones concretas y formación 433 (1 portero, 4 defensas, 3 medios, 3 delanteros) que, en principio, cumplirán la mejor relación puntuación-precio de la siguiente jornada para intentar: comprarlos si salen a mercado o saber si los tiene algún contrincante y pagar su cláusula.


## HU02: Juan quiere saber si es momento de vender a un futbolista

Juan no solo esta preocupado por la compra de jugadores sino también por no perder oportunidades porque coincide con que hay jugadores que son útiles varias jornadas y después desaparecen. Por ello, quiere obtener un listado de las 10 mejores posibles ventas de futbolistas por si necesita deshacerse de alguno de ellos.