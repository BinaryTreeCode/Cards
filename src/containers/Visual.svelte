<script>

import About  from "../components/About.svelte";

   let about = { 
    title: "visual",
    about:
    "Contaminación visual es el impacto de estímulos \
    visuales que rompen la relación entre el humano y la \
    naturaleza (llegando a desequilibrar)",

	info: [
    { /*publicidad =*/
		type: "contaminación visual",
		title: "por publicidad",
		about: "La publicidad afecta la estética del paisaje, disminución de la eficiencia, causa trastornos de atención o disminución de esta y puede ocasionar accidentes por la obstrucción visual y los obstáculos. ",


		img: 'url("https://tinyurl.com/y3kxyepv")', // publicidad
		colum : 1,
		row : 1,
	}, 

    { /*saturación  =*/
		type: "contaminación visual",
		title: "por saturación de colores",
		about: "Las luces y colores intensos causan dolor de cabeza, desorientación a algunas especies que se guían por la luz, rabia debido al estrés generado por saturación de elementos y colores.",


		img: 'url("https://tinyurl.com/y6y9kg64")', // saturación	
		colum : 2,
		row : 1,
	}, 

	{ /*paisaje =*/
		type: "contaminación visual",
		title: "por los cambios en el paisaje",
		about: "Los cambios en el paisaje pueden producir trastornos de atención, estrés, desorientación y, sobre todo, rompen la relación entre el humano y la naturaleza.",


		img: 'url("https://tinyurl.com/y569sjk7")', // paisaje	 
		colum : 3,
		row : 1,
	}
] };

</script>
<About {...about} />
