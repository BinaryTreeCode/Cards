<script>
    import Grid  from "../components/Grid.svelte";

    let about = [
        /*aceite =*/ {
type: "contaminación del agua del agua",
title: "por el aceite",
about: "El aceite y al ser un gran contaminante(5.000 veces más carga contaminante que el \
        agua residual) llega a abarcar 40.000 litros de agua por cada litro de aceite, dejándolos contaminados\ ",

url: 'url("https://laderasur.com/content/uploads/2019/04/02.png")', // aceite
colum : 1,
row : 1,
}, 

/*petróleo  =*/ {
    type: "contaminación del agua",
    title: "por petroleo",
    about: "El petróleo causa problemas de irritación cutánea y ocular, problemas neurológicos y respiratorios, y de estrés, además de dificultar la vida marina con consecuencias como evitar el paso de la luz solar.",

    url: 'url("https://tinyurl.com/y5vrfoqu")', // petróleo 
    colum : 2,
    row : 1
},

/*tierra =*/ {
type: "contaminación del agua",
title: "de la tierra",
about: "es el desequilibrio físico, químico o biológico, por la\
        acumulación de sustancias a niveles tóxicos, para los\
        organismos que hay habitan.",

url: 'url("https://tinyurl.com/yxes7u69")', // tierra
colum : 3,
row : 1
},
    ]
</script>
<Grid about={about} />
