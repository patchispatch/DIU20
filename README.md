# Prácticas Diseño Interfaces de Usuario 2019-20 (Economía Colaborativa) 

Grupo: DIU1_01Mmm.  Curso: 2019/20 

Proyecto: DIU1.Mmm

Descripción: Mmm.

Logotipo:

Miembros
 * :bust_in_silhouette:   Ana María Romero Delgado     :octocat:     
 * :bust_in_silhouette:  Juan Ocaña Valenzuela     :octocat:

-----

En esta práctica estudiaremos un caso de plataforma de economía colaborativa y realizaremos una propuesta para su diseño Web/movil. Utilizaremos herramientas y entregables descritos en el siguiente CheckList (https://github.com/mgea/UX-DIU-Checklist) 


Qué es economía colaborativa: Martínez-Polo, J. (2019). **El fenómeno del consumo colaborativo: del intercambio de bienes y servicios a la economía de las plataformas**, *Sphera Publica, 1*(19), 24-46. http://sphera.ucam.edu/index.php/sphera-01/article/view/363/14141434


# Proceso de Diseño 

## Paso 1. UX Desk Research & Analisis 

![Método UX](img/Competitive.png) 1.a Competitive Analysis
-----

>>> Describe brevemente características de las aplicaciones que tienes asignadas, y por qué has elegido una de ellas (150-300 caracteres) 

Las aplicaciones asignadas son de viajes basados en economía colaborativa. La finalidad de estos viajes puede ser únicamente de transporte como de experiencias. 

Hemos elegido Nomadizers por el concepto que tiene de las experiencias y porque consideramos que puede mejorar su experiencia de usuario.

![Método UX](img/Persona.png) 1.b Persona
-----

>>> Comenta brevemente porqué has seleccionado a esas personas y sube una captura de pantalla de su ficha  (80-150 caracteres)

Son dos personas con perfiles que encajan como usuarios de la página, con contextos, edades diversas y necesidades distintas.

![](P1/Fajardo_UserPersona.png)

![](P1/Toph_UserPersona.png)

![Método UX](img/JourneyMap.png) 1.c User Journey Map
----

>>> Comenta brevemente porqué has escogido estas dos experiencias de usuario (y si consideras que son habituales) (80-150 caracteres) 

Es común que gente reacia a la tecnología tenga problemas sin una buena experiencia de usuario. Aun así, una buena experiencia de usuario es útil.

![](P1/Fajardo_JourneyMap.png)

![](P1/Toph_JourneyMap.png)

![Método UX](img/usabilityReview.png) 1.d Usability Review
----
>>>  Revisión de usabilidad: (toma los siguientes documentos de referencia y verifica puntos de verificación de  usabilidad
>>>> Se deben incluir claramente los siguientes elementos
>>> - Ruta del documento:
>>> - Valoración final (numérica):
>>> - Comentario sobre la valoración:  (60-120 caracteres)

La revisión de usabilidad se encuentra en P1/usability review.xlsx

Valoración numérica: 49 puntos.

La aplicación deja mucho que desear, a cada función que probábamos encontrábamos errores. Además es poco visual y está llena de publicidad.


## Paso 2. UX Design  


![Método UX](img/feedback-capture-grid.png) 2.a Feedback Capture Grid
----


>>> Comenta con un diagrama los aspectos más destacados a modo de conclusión de la práctica anterior:

![](P2/mallareceptoradeinformacion.png)

> > > ¿Qué planteas como "propuesta de valor" para un nuevo diseño de aplicación para economía colaborativa? (150-200 caracteres).

Reforzar la parte "social" de la aplicación, simplificar las secciones para que el acceso sea más intuitivo y fácil, y añadir distintos perfiles de usuario.



![Método UX](img/Sitemap.png) 2.b Tasks & Sitemap 
-----

> > > Definir "User Map" y "Task Flow".

Matriz de Tareas y Usuarios:

|                                    | Usuario no identificado | Usuario identificado | Usuario verificado | Administrador |
| ---------------------------------- | :---------------------: | :------------------: | :----------------: | :-----------: |
| Registrarse                        |            M            |                      |                    |               |
| Identificarse                      |                         |          A           |         A          |       A       |
| Borrar usuario                     |                         |                      |                    |       B       |
| Buscar viaje                       |            M            |          A           |         A          |       A       |
| Ver viaje                          |            M            |          A           |         A          |       A       |
| Inscribirse a viaje                |                         |          M           |         M          |               |
| Publicar viaje                     |                         |          M           |         M          |               |
| Modificar viaje propio             |                         |          B           |         B          |               |
| Cancelar viaje propio              |                         |          B           |         B          |               |
| Cancelar viaje ajeno               |                         |                      |                    |       B       |
| Promocionar viajes propios         |                         |                      |         A          |               |
| Ver estadísticas de viajes propios |                         |                      |         A          |               |
| Ver perfil                         |            M            |          M           |         M          |       A       |
| Modificar perfil propio            |                         |          B           |         B          |               |
| Utilizar mensajería                |                         |          A           |         A          |               |
| Publicar mensaje                   |                         |          A           |         A          |               |
| Eliminar mensaje propio            |                         |          B           |         B          |               |
| Eliminar mensajes ajeno            |                         |                      |                    |       B       |
| Participar en foros                |                         |          A           |         A          |               |
| Moderar foros                      |                         |                      |                    |       M       |



Sitemap:

![](P2/mapadelsitio.png)


![Método UX](img/labelling.png) 2.c Labelling 
----


>>> Identificar términos para diálogo con usuario.

| Término                                   | Significado                                                  |
| ----------------------------------------- | ------------------------------------------------------------ |
| Inicio                                    | Página inicial y central de la aplicación; muestra el *muro* |
| Iniciar sesión                            | Introducir datos de usuario para entrar en la aplicación     |
| Registro                                  | Formulario para el ingreso de un nuevo usuario               |
| Muro                                      | Conjunto de mensajes que escriben los usuarios               |
| Publicar mensaje                          | Formulario para escribir un nuevo mensaje en el muro         |
| Búsqueda                                  | Búsqueda del contenido de la aplicación (viajes y perfiles)  |
| Resultados                                | Resultados de la búsqueda de contenido (viajes y perfiles)   |
| Foros                                     | Conjunto de mensajes sobre temas de interés                  |
| Página del foro                           | Mensajes, dudas y opiniones de los usuarios sobre el tema de interés |
| Publicar mensaje en el foro               | Formulario para escribir un nuevo mensaje en el foro         |
| Perfil                                    | Información de un usuario                                    |
| Editar perfil                             | Edición de la información de un usuario                      |
| Mensajes                                  | Conjunto de conversaciones en las que participa un usuario   |
| Chat                                      | Conversación en la que participa un usuario                  |
| Notificaciones del muro y de foros        | Avisos sobre nuevos mensajes                                 |
| Viaje                                     | Página descriptiva de un viaje publicado                     |
| <img src="img/home.svg" width="30">       | Icono relacionado con la página *Inicio*                     |
| <img src="img/search.svg" width="30">     | Icono relacionado con la página *Búsqueda* y la acción de buscar resultados |
| <img src="img/user.svg" width="30">       | Icono relacionado con la página *Perfil*                     |
| <img src="img/mail.svg" width="30">       | Icono relacionado con la página *Mensajes*                   |
| <img src="img/blog.svg" width="30">       | Icono relacionado con la publicación de mensajes, tanto en el *muro* como en el *foro* |
| <img src="img/plus.svg" width="30">       | Icono relacionado con la publicación de un nuevo *viaje*     |
| <img src="img/edit.svg" width="30">       | Icono relacionado con la *edición* de una página, ya sea el *perfil* o un *viaje* |
| <img src="img/plusperson.svg" width="30"> | Icono relacionado con la inscripción a un *viaje*            |
| <img src="img/arrow.svg" width="30">      | Icono relacionado con el *envío* de un mensaje               |




![Método UX](img/Wireframes.png) 2.d Wireframes
-----

>>> Plantear el  diseño del layout para Web/móvil (organización y simulación). 

Estas son las distintas pantallas de la interfaz de la aplicación.

| Inicio                             | Búsqueda                          | Notificaciones                     |
| ---------------------------------- | --------------------------------- | ---------------------------------- |
| ![](P2/bocetos/MURO.png)           | ![](P2/bocetos/BÚSQUEDA.png)      | ![](P2/bocetos/NOTIFICACIONES.png) |
| **Perfil**                         | **Mensajes**                      | **Viaje**                          |
| ![](P2/bocetos/PERFIL.png)         | ![](P2/bocetos/MENSAJES.png)      | ![](P2/bocetos/VIAJE.png)          |
| **Foros**                          | **Página foro**                   | **Publicar mensaje foro**          |
| ![](P2/bocetos/FOROS.png)          | ![](P2/bocetos/PÁGINA-FORO.png)   | ![](P2/bocetos/PUBLICAR-FORO.png)  |
| **Publicar mensaje muro**          | **Editar perfil**                 | **Editar viaje:**                  |
| ![](P2/bocetos/PUBLICAR.png)       | ![](P2/bocetos/EDITAR-PERFIL.png) | ![](P2/bocetos/EDITAR-VIAJE.png)   |
| **Ayuda**                          | **Chat**                          | **Contacto**                       |
| ![](P2/bocetos/AYUDA.png)          | ![](P2/bocetos/CHAT.png)          | ![](P2/bocetos/CONTACTO.png)       |
| **Iniciar sesión**                 | **Registro**                      | **Menú lateral**                   |
| ![](P2/bocetos/INICIAR-SESIÓN.png) | ![](P2/bocetos/REGISTRO.png)      | ![](P2/bocetos/MENÚ-LATERAL.png)   |



****



## Paso 3. Mi equipo UX-Case Study 


![Método UX](img/moodboard.png) 3.a ¿Como se cuenta un UX-Case Study?
-----

Tras leer y analizar el UX Case Study de MuseMap, hemos visto una serie de procedimientos y  técnicas que pueden ser utilizadas para lograr encontrar la finalidad y los detalles de una aplicación a través del diseño, y transmitirlos al equipo de desarrollo, al usuario final o a los clientes y *stakeholders*. 

En primer lugar, aclaran la duración del *sprint* en el que van a realizar este trabajo y los objetivos que pretenden cumplir, basándose en las peticiones del cliente. También destacan las oportunidades que les brinda esta serie de necesidades a cubrir, como la posibilidad de intergrar un mapa interactivo, o procesos de gamificación. 

**Brainstorming y planteamiento inicial**

Dada la información, asumimos que se están utilizando metodologías de trabajo ágiles, centradas en el usuario. Para poder acotar las necesidades del usuario y las soluciones propuestas a las mismas, se ha de realizar un estudio previo sobre el mismo. En el caso de MuseMap, el equipo realiza primero un *brainstorming* sobre su preconcepción del usuario potencial de la aplicación, para desspués investigar cómo se relaciona la gente de su entorno (la ciudad de Londres) con el arte urbano. 

**Estudio de características en aplicaciones similares**

A partir de esta información, elaboran una comparativa de soluciones similares actuales para ver qué aportan, de qué carecen y, en esencia, qué es lo que necesita MuseMap para destacar y mejorar la experiencia de los usuarios objetivo en base a las características observadas.

**Entrevista con potenciales usuarios**

Basándose en la observación y asunciones antes tomadas por el equipo, que aún no ha realizado un estudio de usuarios real, elabora un mapa de empatía para ayudarles en el proceso de entrevistas a usuarios potenciales.

Tras realizar las correspondientes entrevistas, el equipo de desarrollo plasmó las respuestas en un mapa de afinidad, extrayendo en común los puntos clave y descubrimientos realizados. Estos descubrimientos les son de utilidad a la hora de realizar el siguiente paso: el diseño basado en escenarios.

**Diseño basado en escenarios**

Para identificar mejor las necesidades y conflictos de los potenciales usuarios de la aplicación, se plantean dos personas de usuario diferentes, cada una representando a un sector diferencial del público objetivo: aquel que busca arte urbano de forma intencionada, y aquel que no. De esta forma, pueden modelar la aplicación teniendo en cuenta el mayor número de intereses posible.

Tras elaborar estas personas de usuario, estudian las frustraciones y problemas a solucionar a través de un *Journey Map* y un *Experience Map*, que describen la situación emocional de cada persona con respecto a las acciones representadas.

Se elaboran **escenarios** en los que los usuarios harían uso de la aplicación para describir su interacción con la misma, y así encontrar la necesidad general a resolver.
A partir de este punto, el equipo comienza a plantearse cómo hacerlo, planteando hipótesis sobre ello.

**Modelo de interacción**
Para comenzar con el proceso de diseño, se plantea un diagrama de flujo que representa la interacción del usuario con la aplicación, para identificar una posible estructura.

**Wireframes**
Tras identificar posibles páginas, el equipo de diseño se reúne para elaborar bocetos simples y poner en común la visión sobre la aplicación.

Para establecer la prioridad de los elementos de la aplicación, utilizan una plantilla de matriz 2x2, clasificando entre aspectos esenciales y añadidos en un eje, y el esfuerzo necesario para llevarlos a cabo. Sobre estas ideas, el equipo decide priorizar sobre las que considera esenciales, y crea los primeros wireframes a papel.

**Test de usabilidad con el primer prototipo**

Tras elaborar un prototipo de uso con los primeros wireframes, el equipo detecta problemas de interacción con los conceptos que han planteado, por lo que decide cambiar de enfoque de cara a una segunda iteración.

**Segunda iteración del primer prototipo**
El enfoque de la aplicación cambia sustancialmente, aunque mantiene las ideas recogidas en el estudio de usuarios. Ahora plantea un mapa interactivo y recomendaciones para tomar fotos y realizar visitas.

**Wireframes de alta fidelidad**
Una vez definidos los wireframes a papel y consolidado la idea sobre la aplicación, se producen los wireframes de alta fidelidad, para consolidar aún más la idea sobre la estructura de la aplicación. Además, se define un flujo de interacción.

No obstante, aún existen problemas, esta vez menores, a la hora de realizar el test de usabilidad.

**Evolución**
Para ilustrar la evolución del diseño, utilizan una de las páginas y muestran su evolución a traves de las diferentes iteraciones de diseño, hasta llegar al *mockup* final.

**Sitemap**
Para mostrar el funcionamiento de la aplicación y las diferentes páginas, exponen el sitemap con imágenes del *mockup* final.

**Guía de estilo**
También muestran la guía de estilo definida para la aplicación y los motivos para ello, acompañada de los *mockups* finales.

**Próximos pasos**
Finalmente, el equipo de desarrollo expone los próximos pasos a tomar en el desarrollo de la aplicación.

![Método UX](img/landing-page.png)  3.b Logotipo
----


>>> Si diseña un logotipo, explique la herramienta utilizada y la resolución empleada. ¿Puede usar esta imagen como cabecera de Twitter, por ejemplo, o necesita otra?

![Método UX](img/guidelines.png) 3.c Guidelines
----

>>> Tras documentarse, muestre las deciones tomadas sobre Patrones IU a usar para la fase siguiente de prototipado. 

![Método UX](img/mockup.png)  3.d Video
----

>>> Documente y resuma el diseño de su producto en forma de video de 90 segundos aprox


## Paso 4. Evaluación 


![Método UX](img/ABtesting.png) 4.a Casos asignados
----


>>> Descripción de las asignaciones (3 UX Case Study) y enlace a  sus repositorios.

>>>> En la seccioón P4/readme.md se debe acceder además a sus respectivas hojas de evaluación y conclusiones 


![Método UX](img/usability-testing.png) 4.b User Testing
----

>>> Seleccione a una de sus personas ficticias. Exprese las ideas de posibles situaciones conflictivas de esa persona en las propuestas evaluadas


![Método UX](img/Survey.png)4.c Ranking 
----

>>> Concluya con un ranking de los casos evaluados 

>>> Valoración personal 


## Paso 5. Evaluación de Accesibilidad  


![Método UX](img/Accesibility.png)  5.a Accesibility evaluation Report
----

>>> Indica qué pretendes evaluar (de accesibilidad) y qué resultados has obtenido + Valoración personal

>>> Evaluación de la Accesibilidad (con simuladores o verificación de WACG) 



## Conclusión final / Valoración de las prácticas


>>> (90-150 palabras) Opinión del proceso de desarrollo de diseño siguiendo metodología UX y valoración (positiva /negativa) de los resultados obtenidos  



