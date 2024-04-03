# Intro al Desempeño de Sistemas
* El **desempeño de sistemas** se refiere a la **medición** 
* 
El desempeño de un sistema se puede medir en términos de su velocidad, capacidad, de procesamiento
* 
## ¿Por qué es importante?
* La medición del desempeño de un sistema es importante, porque permite a los usuarios y administradores comprender cómo se está utilizando el sistema y si se están cumpliendo los objetivos establecidos.
*
Además, la medición del desempeño también permite identificar cuellos de botella, problemas de capacidad.

## ¿Cómo se mide?
* Para **medir** el **desempeño de un sistema**, se pueden utilizar diversas técnicas y herraminetas, como **pruebas de carga, pruebas de estrés, monitoreo de sistemas, análisis de logs**, entre otras.

Estas técnicas permiten evaluar el **rendimiento del sistema** bajo diferentes condiciones, como la **carga de usuarios**, la **cantidad de datos procesados**, el **numero de solicitudes recibidas**, entre otras.

* Cuál es la diferencia entre prueba de carga y de estrés? 
> En una prueba de carga se prueban volúmenes, mientras que en una de estrés 

## Logs
> Todos los sistemas tienen una bitácora, aparte de saber lo que tienes que hacer, te dejan un indicio de dónde podría estar el problema.

## Herramientas
* **Monitoreo del sistema:**
    - Las herramientas de monitoreo permiten supervisar el rendimiento del sistema, en tiempo real, incluyendo el uso del **CPU**, la **memoria**, el **almacenamiento**, y el **tráfico de red**. Ejemplos de herramientas de monitorio son **Nagios**, **Zabbix** y **SolarWindws**.

* **Profiling de código**:
    * El profiling de código permite analizar el rendimiento de una aplicación y identificar cuellos de botella en el código. Ejemplos de herramientas de profiling de código son **VisualVM**, **Perf** y **HP LoadRunner**.
* **Benchmarking:**
    * Las herramientas de benchmarking comparan el rendmiento de un sistema con otros sistemas similares, lo que ayuda a identificar las áreas en las que el sistema necesita mejoras. Ejemplos de herramientas de benchmarking son **Geekbench, SPEC CPU** y **Phoronix Test Suite**.

# Herramientas
* Análisis de logs
    * Las herramientas de análisis de logs permiten identificar patrones y tendencias en los registros del sistema, lo que puede ayudar a identificar problemas de rendimiento. Ejemplso de herramientas de anális de logs son **Splunk**, **ELK Stack** y **Graylog**. 

# Intro al Modelamiento
* El **modelado** se refiere al **proceso** de crear un **modelo simplificado** de un **sistema** o **proceso** real con el fin de analizarlo y comprenderlo mejor.
* EN general, un **modelo** es una **representación simplificada** de un objeto o fenómeno que ayuda a describir o predecir su comportamiento.

# Intro Teoría de Filas de Espera
* La teoría de **filas de espera** es una rama de las **matemáticas aplicadas** que se enfoca en el **estudio** de **sistemas** donde las entidades (personas, objetos, paquetes, etc.) deben **esperar** en una **cola** para recibir un **servicio**

* El **análisis** de una **fila de espera** típicamente incluye la determinación de los **tiempos de espera** promedio, la **longitud promedio** de la cola, y la **utilización** del servicio.

## Definición de tiempos de espera, longitud promedio, utilización en términos de teoría de cola
En el contexto de la teoría de colas, se definen los siguientes conceptos:

* **Tiempos de espera:** Se refiere al tiempo que una entidad debe esperar en la cola antes de recibir el servicio. Se puede medir en términos de tiempo promedio de espera.

* **Longitud promedio de la cola:** Es la cantidad promedio de entidades que se encuentran en la cola en un momento dado. Se puede calcular dividiendo el tiempo promedio de espera entre el tiempo promedio de servicio.

* **Utilización del servicio:** Es la fracción de tiempo en la que el servidor está ocupado brindando servicio a una entidad. Se puede calcular dividiendo el tiempo promedio de servicio entre el tiempo total de observación.

> Estos conceptos son fundamentales para el análisis y la optimización de sistemas de colas, ya que permiten evaluar el rendimiento y la eficiencia del sistema.

# Aplicaciones de la teoría de colas
La teoría de colas tiene diversas aplicaciones en diferentes campos, entre las cuales se incluyen:

1. **Gestión de colas en servicios:** La teoría de colas se utiliza para analizar y optimizar el rendimiento de sistemas de atención al cliente, como centros de llamadas, bancos, aeropuertos, entre otros. Permite determinar la capacidad necesaria para minimizar los tiempos de espera y maximizar la satisfacción del cliente.

2. **Planificación de recursos:** La teoría de colas se aplica en la planificación de recursos en sistemas complejos, como la asignación de servidores en centros de datos, la programación de tareas en sistemas operativos, la gestión de tráfico en redes de comunicación, entre otros. Ayuda a optimizar la utilización de los recursos y minimizar los cuellos de botella.

3. **Diseño de sistemas de transporte:** La teoría de colas se utiliza en el diseño y análisis de sistemas de transporte, como carreteras, aeropuertos, estaciones de tren, entre otros. Permite determinar la capacidad necesaria para evitar congestiones y optimizar el flujo de personas o vehículos.

4. **Optimización de procesos industriales:** La teoría de colas se aplica en la optimización de procesos industriales, como líneas de producción, sistemas de distribución, logística, entre otros. Permite identificar los cuellos de botella y mejorar la eficiencia del sistema.

5. **Modelado de sistemas biológicos:** La teoría de colas se utiliza en el modelado de sistemas biológicos, como el flujo de tráfico en vasos sanguíneos, la propagación de enfermedades, la dinámica de poblaciones, entre otros. Ayuda a comprender y predecir el comportamiento de estos sistemas.

> Estas son solo algunas de las aplicaciones de la teoría de colas, y su utilidad se extiende a muchos otros campos donde se requiere analizar y optimizar el rendimiento de sistemas que involucran esperas y servicios.

## Relación con las race conditions
* Las race conditions son un tipo de problema que puede afectar el desempeño de un sistema. Ocurren cuando dos o más hilos de ejecución acceden y modifican una variable o recurso compartido sin una sincronización adecuada.

* Las race conditions pueden causar resultados impredecibles y errores en el sistema. Pueden llevar a situaciones en las que los datos se corrompen o se producen resultados incorrectos.

* La teoría de colas puede ser útil para analizar y mitigar las race conditions en un sistema. Al comprender y modelar el comportamiento de las colas de espera en el sistema, se pueden identificar posibles puntos de conflicto y diseñar estrategias de sincronización adecuadas para evitar race conditions.

* Por ejemplo, en un sistema con múltiples hilos de ejecución que acceden a una cola compartida, se puede utilizar la teoría de colas para analizar el tiempo promedio de espera en la cola y determinar si es necesario implementar mecanismos de sincronización, como locks o semáforos, para evitar race conditions.

* En resumen, la teoría de colas puede ser una herramienta útil para comprender y abordar los problemas de race conditions en un sistema, al proporcionar un enfoque analítico para identificar y mitigar posibles puntos de conflicto.