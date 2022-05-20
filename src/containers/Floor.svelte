<script>

import Grid  from "../components/Grid.svelte";

    let about = [
		{ /*basuras =*/
			type: "contaminación del suelo",
			title: "por arrojo de residuos",
			about: "El arrojo de residuos causan: el deterioro estético y desvalorización del terreno, contaminación el agua por filtración, daño a los ecosistemas terrestres, así como los seres que ahí habitan, causando la infertilidad de los suelos y la pérdida de cosechas además liberar malos olores y toxinas al aire.",


		url: 'url("https://tinyurl.com/y3wc5d7m")', // basuras
		colum : 1,
		row : 1,
	}, 

    { /*petróleo  =*/
		type: "contaminación del suelo",
		title: "por petróleo",
		about: "El petróleo causa problemas de irritación cutánea y ocular, problemas neurológicos y respiratorios, y de estrés, además de ser inflamable y liberar sustancias químicas.",


		url: 'url("https://tinyurl.com/y4qnfnw3")', // petróleo
		colum : 2,
		row : 1,
	}, 

	{ /*deforestación =*/
		type: "contaminación del suelo",
		title: "por la quema de basuras",
		about: "La deforestación causa la pérdida del 70% de la fauna y flora que ahí habita además de secar los suelos, al no estar protegidos por los árboles.",


		url: 'url("https://tinyurl.com/y5rauy9c")', // deforestación 
		colum : 3,
		row : 1,
	}
];

</script>
<Grid about={about} />
