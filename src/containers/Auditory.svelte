<script>

import Grid  from "../components/Grid.svelte";

    let about = [
		{ /*tráfico =*/
			type: "contaminación auditiva",
			title: "por el tráfico",
			about: "El tráfico así como la industria incrementan la contaminación acústica, lo que genera que las diversas especies escojan hábitats de menor ruido generando la migración de diversas especies, desequilibrando el ecosistema. Además de causar graves daños a los seres vivos expuestos constantemente a estos ruidos. ",


		url: 'url("https://tinyurl.com/y66wuwh3")', // tráfico
		colum : 1,
		row : 1,
	}, 

    { /*explotación  =*/
		type: "contaminación auditiva",
		title: "por la explotación minera",
		about: "La explotación minera, así como otras industrias que usan explosivos como la construcción, no solo generan daños en el medio ambiente si no que las explosiones generadas ocasionan traumas acústicos graves.",


		url: 'url("https://tinyurl.com/y6fvfqyw")', // explotación
		colum : 2,
		row : 1,
	}, 

	{ /*deforestación =*/
		type: "contaminación auditiva",
		title: "por la música a alto volumen",
		about: "La música a alto volumen genera estrés en los individuos del medio ambiente, así como puede llegar al umbral del dolor, en el que se empieza a sentir dolor.",


		url: 'url("https://tinyurl.com/y5rauy9c")', // deforestación 
		colum : 3,
		row : 1,
	}
];

</script>
<Grid about={about} />
