<script>

import About  from "../components/About.svelte";

   let about = { 
	title: "auditiva",
    about: "es cualquier sonido molesto (ruido), que altera las condiciones\
        	normales del ambiente, si es mayor a 65 decibeles, con el tiempo puede\
        	enfermar y disminuir la audición de las personas u animales",
	
	info: [
		{ /*tráfico =*/
			type: "contaminación auditiva",
			title: "por el tráfico",
			about: "El tráfico así como la industria incrementan la contaminación acústica, lo que genera que las diversas especies escojan hábitats de menor ruido generando la migración de diversas especies, desequilibrando el ecosistema. Además de causar graves daños a los seres vivos expuestos constantemente a estos ruidos. ",


		img: 'url("https://tinyurl.com/y66wuwh3")', // tráfico
		colum : 1,
		row : 1,
	}, 

    { /*explotación  =*/
		type: "contaminación auditiva",
		title: "por la explotación minera",
		about: "La explotación minera, así como otras industrias que usan explosivos como la construcción, no solo generan daños en el medio ambiente si no que las explosiones generadas ocasionan traumas acústicos graves.",


		img: 'url("https://tinyurl.com/y6fvfqyw")', // explotación
		colum : 2,
		row : 1,
	}, 

	{ /*deforestación =*/
		type: "contaminación auditiva",
		title: "por la música a alto volumen",
		about: "La música a alto volumen genera estrés en los individuos del medio ambiente, así como puede llegar al umbral del dolor, en el que se empieza a sentir dolor.",


		img: 'url("https://tinyurl.com/y5rauy9c")', // deforestación 
		colum : 3,
		row : 1,
	}
] };

</script>
<About {...about} />
