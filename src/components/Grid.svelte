<script>
    export let about = [{},{},{},];
    import Card from "./Card.svelte";
    // import { component } from "./store/store";
</script>

<style>
    .cards {    
        margin-top: 4rem;
        margin-bottom: 4rem;
        display: grid;
        place-items: center;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 4rem;
        grid-auto-rows: minmax(100px, auto);
    }
</style>


<div class="page">
    <a href="http://localhost:8080/">
        <figure>
            <img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917014.svg?token=exp=1652662250~hmac=5df99ae9e62f5f6ec374aec36d8ce02f" alt="home" width="60px">
            <!-- <figcaption><i class="home">home</i></figcaption> -->
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