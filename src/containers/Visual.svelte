<script>

	import Grid  from "../components/Grid.svelte";

    let about = [

    { /*publicidad =*/
		type: "contaminación visual",
		title: "por publicidad",
		about: "La publicidad afecta la estética del paisaje, disminución de la eficiencia, causa trastornos de atención o disminución de esta y puede ocasionar accidentes por la obstrucción visual y los obstáculos. ",


		url: 'url("https://tinyurl.com/y3wc5d7m")', // publicidad
		colum : 1,
		row : 1,
	}, 

    { /*publicidad  =*/
		type: "contaminación visual",
		title: "por petróleo",
		about: "El petróleo causa problemas de irritación cutánea y ocular, problemas neurológicos y respiratorios, y de estrés, además de ser inflamable y liberar sustancias químicas.",


		url: 'url("https://tinyurl.com/y4qnfnw3")', // publicidad
		colum : 2,
		row : 1,
	}, 

	{ /*deforestación =*/
		type: "contaminación visual",
		title: "por la quema de basuras",
		about: "La deforestación causa la pérdida del 70% de la fauna y flora que ahí habita además de secar visuals, al no estar protegidos por los árboles.",


		url: 'url("https://tinyurl.com/y5rauy9c")', // deforestación 
		colum : 3,
		row : 1,
	}
];

</script>
<Grid about={about} />
