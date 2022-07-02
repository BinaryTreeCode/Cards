<script>
import About  from "../components/About.svelte";
   let about = {	
        title: "del agua",
	about:"es cuando el agua sufre cambios en su composición hasta ser toxica,\
        lo que causa que no se puede tomar o utilizar para la agricultura. ", 
        info: [ 
        /*aceite =*/ {
type: "contaminación del agua del agua",
title: "por el aceite",
about: "El aceite y al ser un gran contaminante(5.000 veces más carga contaminante que el \
        agua residual) llega a abarcar 40.000 litros de agua por cada litro de aceite, dejándolos contaminados\ ",

img: 'url("https://laderasur.com/content/uploads/2019/04/02.png")', // aceite
colum : 1,
row : 1,
}, 

/*petróleo  =*/ {
    type: "contaminación del agua",
    title: "por petroleo",
    about: "El petróleo causa problemas de irritación cutánea y ocular, problemas neurológicos y respiratorios, y de estrés, además de dificultar la vida marina con consecuencias como evitar el paso de la luz solar.",

    img: 'url("https://tinyurl.com/y5vrfoqu")', // petróleo 
    colum : 2,
    row : 1
},

/*basura =*/ {
type: "contaminación del agua",
title: "por el arrojo de basuras",
about: "El arrojo de basura causa el deterioro estético del océano, la contaminación del agua, el daño a los ecosistemas acuáticos expuestos, inundaciones, malos olores y liberación de toxinas. Nota: los plásticos son confundidos por comida y afectan la cadena alimenticia.",

img: 'url("https://tinyurl.com/y53rhadj")', // basura
colum : 3,
row : 1
},
]
};
</script>
<About {...about} />
