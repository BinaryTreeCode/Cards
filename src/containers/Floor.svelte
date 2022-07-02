<script>

import About  from "../components/About.svelte";

let about = {
	title: "de la tierra",
	about: "es el desequilibrio físico, químico o biológico, por la\
        acumulación de sustancias a niveles tóxicos, para los\
        organismos que hay habitan.", 
	info: [
		{ /*basuras =*/
			type: "contaminación del suelo",
			title: "por arrojo de residuos",
			about: "El arrojo de residuos causan: el deterioro estético y desvalorización del terreno, contaminación el agua por filtración, daño a los ecosistemas terrestres, así como los seres que ahí habitan, causando la infertilidad de los suelos y la pérdida de cosechas además liberar malos olores y toxinas al aire.",


		img: 'url("https://tinyurl.com/y3wc5d7m")', // basuras
		colum : 1,
		row : 1,
	}, 

    { /*petróleo  =*/
		type: "contaminación del suelo",
		title: "por petróleo",
		about: "El petróleo causa problemas de irritación cutánea y ocular, problemas neurológicos y respiratorios, y de estrés, además de ser inflamable y liberar sustancias químicas.",


		img: 'url("https://tinyurl.com/y4qnfnw3")', // petróleo
		colum : 2,
		row : 1,
	}, 

	{ /*deforestación =*/
		type: "contaminación del suelo",
		title: "por la quema de basuras",
		about: "La deforestación causa la pérdida del 70% de la fauna y flora que ahí habita además de secar los suelos, al no estar protegidos por los árboles.",


		img: 'url("https://tinyurl.com/y5rauy9c")', // deforestación 
		colum : 3,
		row : 1,
	}
],
}
    

</script>
<About {...about} />

