/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Fajardo Poyatos Menéndez",
				Photo: "fajardo.jpg",
				Quote: "<<Sapere Aude>> y de paso viaja",
				Age: 38,
				Occupation: "Historiador del arte trabajando de redactor freelance para una revista de viajes",
				Family: "Soltero, tiene un canario y dos periquitos",
				Location: "Argamasilla de Calatrava (Ciudad Real)",
				Character: "Es animado y le apasiona su trabajo; algo intrusivo a la hora de hablar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Generar nuevas experiencias para nutrir sus artículos", "Profundizar más en su pasión por el arte"],
				Frustrations: ["No es un gran amigo de las nuevas tecnologías", "Se siente bastante solo"],
				Bio: "Afincado en Toledo, originario de Argamasilla de Calatrava, Fajardo es un apasionado historiador del arte que, harto de no encontrar trabajo, decidió lanzarse a la carrera del periodismo freelance. Actualmente trabaja en la revista VIAJAR, en su sección cultural.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Necesita inspiración para su nuevo artículo sobre el valor artístico y cultural de la Costa Cantábrica",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Toph Bei Fong",
				Photo: "toph.jpg",
				Quote: "'Comamos de este pan duro, luego haremos una lucha' Arcipreste de Hita, Libro del Buen Amor",
				Age: 21,
				Occupation: "Estudiante de cocina en Japón, de intercambio en Cádiz",
				Family: "Familia tradicional japonesa; no han viajado con ella",
				Location: "Algodonales, Cádiz",
				Character: "Reservada, pero coge confianza rápido",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Profundizar en sus estudios de cocina", "Conocer más de cerca la cultura del flamenco", "Ir a la playa", "Pasarlo bien y abrir sus horizontes"],
				Frustrations: ["No saber comunicarse demasiado bien con la gente", "No encajar", "El racismo y las primeras impresiones"],
				Bio: ["Procedente de Hokkaido, Japón, Toph es una joven estudiante de cocina y restauración a punto de graduarse, con una afición muy peculiar: el flamenco. Ha decidido realizar un intercambio cultural en Cádiz para vivir más de cerca su afición, y ya de paso conocer más y mejor la gastronomía española."],
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "Viajar a San Fernando, Cádiz, para visitar la casa de Camarón" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])