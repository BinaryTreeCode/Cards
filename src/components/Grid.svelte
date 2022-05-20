<script>
    export let about = [{},{},{},];
    import Card from "./Card.svelte";
    // import { component } from "./store/store";

    let src = '../assets/casa.png'
</script>

<style>
    .cards {    
        margin-top: 4rem;
        margin-bottom: 4rem;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);

        grid-row-gap: 4rem;
        grid-column-gap: 4rem;

        grid-auto-rows: minmax(100px, auto);
    }

</style>


<div class="page">
    <a href="https://svelte-deploy--contaminacion.netlify.app/">
        <figure>
            <img src="data:image/png;base64,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" alt="home" width="60px">          
        </figure>
    </a>  
    <div class="cards">
        {#each about as about}
        <Card {...about} />
        {/each}
    </div>
    <!-- <h1>{$component}</h1> -->
</div>


<!-- A have a question querida comunidad the svelte: i have conjunto of cards with the siguiente estructura of components:
Grid (is the container of cards,  and have a each para crear and pasar los props) {
sumary:
    <div class="cards">
        {#each about as about}
        <Card {...about} />
        {/each}
    </div>
} -->
<!-- The component card is a card with an information and button(que en teoria deberia pasar a otra page por medio del componet componet "svelte:componet" and an variable que cambie al precionar el button "por medio del store.js") -->