<script>

	import Grid  from "../components/Grid.svelte";

    let about = [
    { /*carros =*/
		type: "contaminación del aire",
		title: "por los carros",
		about: "La contaminación de los carros genera graves enfermedades respiratorias y emiten co2(genera alrededor del 30% de las emisiones de CO2 mundiale)  a la atmósfera, contribuyendo al cambio climático.",


		url: 'url("https://tinyurl.com/y4rwdsj3")', // carros
		colum : 1,
		row : 1,
	}, 

    { /*fábricas =*/
		type: "contaminación del aire",
		title: "por las fábricas",
		about: " las fábricas al liberar sustancias químicas como partículas sólidas residuales, dióxido de carbono, metano y óxido nitroso; causan graves problemas de salud además de lluvias ácidas las cuales contaminan el agua y daña la vegetación. ",


		url: 'url("https://tinyurl.com/yyvmjd62")', // fábricas
		colum : 2,
		row : 1,
	}, 
	
	{ /*basuras =*/
		type: "contaminación del aire",
		title: "por la quema de basuras",
		about: "la quema de basuras estas causan graves daños por elementos químicos tóxicos(mercurio, plomo y otros metales pesados), estos contaminantes agravan el calentamiento global y se depositan en suelos, aire y aguas subterráneas.40% de la basura es quemada. ",


		url: 'url("https://tinyurl.com/y6thzmmc")', // basuras
		colum : 3,
		row : 1,
	}, 

	

];

</script>
<Grid about={about} />
