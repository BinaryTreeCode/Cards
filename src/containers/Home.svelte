<script>
    import Grid  from "../components/Grid.svelte";

    let about = [ 

/*agua =*/ {
type: "contaminación",
title: "del agua",
about: "cuando el agua sufre cambios en su composición hasta ser toxica,\
        lo que causa que no se puede tomar o utilizar para la agricultura.\ ",

url: 'url("https://tinyurl.com/y53rhadj")', // agua
colum : 1,
row : 1,
number : 1,
}, 

/*aire =*/ {
    type: "contaminación",
    title: "del aire",
    about: "La contaminación del aire se produce por pequeñas partículas o productos gaseosos que implican riesgo de daño o molestia para los seres vivos en el ambiente (procesos industriales, automóviles, etc.).",

    url: 'url("https://tinyurl.com/y68vwrtp")', // aire
    colum : 2,
    row : 1,
},

/*tierra =*/ {
type: "contaminación",
title: "de la tierra",
about: "es el desequilibrio físico, químico o biológico, por la\
        acumulación de sustancias a niveles tóxicos, para los\
        organismos que hay habitan.",

url: 'url("https://tinyurl.com/yxes7u69")', // tierra
colum : 3,
row : 1
},


/*visual*/ {
type: "contaminación",
title: "visual",
about: "Contaminación visual es el impacto de estímulos \
visuales que rompen la relación entre el humano y la \
naturaleza (llegando a desequilibrar)",

url: 'url("https://tinyurl.com/y5kd6mws")', // visual
colum : 2,
row : 1        
},

/*termica*/ {
type: "contaminación",
title: "térmica",
about: "es la alteración de la temperatura, lo que genera perjuicio\
        para los seres vivos que lo habitan el planeta, esta contaminación\
        es producida principalmente por la combustión de materialesquímicos",

url: 'url("https://tinyurl.com/y4hccgkd")', // termica
colum : 2,
row : 2
},

/*auditiva*/ {
type : "contaminación",
title: "auditiva",
about: "es cualquier sonido molesto (ruido), que altera las condiciones\
        normales del ambiente, si es mayor a 65 decibeles, con el tiempo puede\
        enfermar y disminuir la audición de las personas u animales",

url: 'url("https://tinyurl.com/y43gc6un")', // auditiva
colum : 1,
row : 2
},

];
</script>

<Grid about={about} />
