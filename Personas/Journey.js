/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Fajardo Poyatos Menéndez",
                Photo: "fajardo.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Ha de redactar un artículo sobre el valor histórico y cultural de la costa cantábrica y busca inspiración",
                touch1: "correo electrónico",
                feel1: "3",
                con1: "Dispone de poco plazo para planificar el viaje y redactar el artículo, y no le gusta trabajar bajo presión",
                ima1: "fajardocar.jpg",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Asumido el viaje y a sabiendas de que los vuelos son muy caros con poca antelación, busca viajes en bus o aplicaciones conocidas como Blablacar o Amovens",
                touch2: "ordenador",
                feel2: "1",
                con2: "No hay gran cantidad de viajes disponibles, y los que se ofrecen tienen restricciones de equipaje o se van de precio",
                ima2: "fajardomail.jpg",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Fajardo no está para perder el tiempo, así que investiga sobre más páginas de viajes y encuentra en Nomadizers a una chica buscando compañeros para un viaje en autocaravana por el Cantábrico; es el día de suerte de Fajardo",
                touch3: "ordenador",
                feel3: "2",
                con3: "No ha oído hablar de esta página nunca y parece algo sospechosa debido al poco cuidado aspecto visual de la misma",
                ima3: "fajardudas.jpg",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Establece un primer contacto con la chica, y pregunta por datos del viaje. Ella le aclara sus dudas, y le asegura que la página es fiable ya que lleva utilizándola bastante tiempo",
                touch4: "ordenador",
                feel4: "4",
                con4: "Sería la primera vez que Fajardo viaja en autocaravana, y esperaba un alojamiento tradicional en un hotel u hostal",
                ima4: "fajaravana.jpg",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Consulta en internet experiencias de otros usuarios con respecto a Nomadizers y los viajes en autocaravana",
                touch5: "ordenador",
                feel5: "5",
                con5: "Encuentra experiencias positivas sobre nomadizers, pero no se decide con respecto a la autocaravana",
                ima5: "fajaraje.jpg",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Dudoso, lanza una moneda y se decide a confirmar el viaje en autocaravana, convenciéndose a sí mismo de que será un buen punto de vista para su artículo",
                touch6: "ordenador, móvil",
                feel6: "4",
                con6: "Tuvo que compartir datos personales con la chica para mejorar la comunicación",
                ima6: "fajenda.jpg",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Toph Bei Fong",
                Photo: "toph.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere organizar una ruta de varios días a San Fernando para conocer más sobre la historia de Camarón",
                touch1: "*******",
                feel1: "3",
                con1: "No quiere hacer el viaje sola",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECISION ***/ 
                goal2: "Busca algún viaje ya organizado para participar en él",
                touch2: "teléfono móvil",
                feel2: "3",
                con2: "No encuentra ninguno",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Buscando viajes, desesperada, encuentra la web Nomadizers, se registra y comienza a organizar el viaje",
                touch3: "ordenador",
                feel3: "5",
                con3: "Al principio le cuesta un poco usar la página porque no es clara",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Tras publicar la oferta, recibe varias solicitudes de personas interesadas en el viaje",
                touch4: "ordenador",
                feel4: "3",
                con4: "Se agobia porque es su primera vez organizando una excursión y no sabe lo que va a esperar la gente de ella",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Habla con las personas interesadas sobre la actividad y les comenta la idea que tiene en mente para ver qué opinan",
                touch5: "teléfono móvil",
                feel5: "4",
                con5: "Hay una persona que no responde a los mensajes",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Cierra el viaje exitosamente dos días antes de realizarlo",
                touch6: "Ordenador",
                feel6: "5",
                con6: "La persona que no contestaba a los mensajes anuló su participación en el viaje",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



