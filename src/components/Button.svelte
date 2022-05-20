<!-- <script>
    import Hola from "./Hola.svelte";
    import Chao from "./Chao.svelte";

    export let title = "del aire";

	const options = [
		{ color: 'red',   component: Hola   },
        { color: 'green', component: Chao   },
	];

	let selected = options[0];
</script>



<button on:click>Tipos de contaminación {title} </button>
<svelte:component this={selected.component}/>
-->

<!-- <script>
  //   import Hola from "./Hola.svelte";
  //   import Chao from "./Chao.svelte";
  //   import Grid from "./Grid.svelte";

	// const options = [
	// 	{ color: 'red',   component: false   },
	// 	{ color: 'green', component: Hola },
  //       { color: 'blue', component: Chao },
	// ];

	// let selected = options[0];

  //   let i=0;
  //   function handleClick() {
  //       selected = options[i];
  //       console.log(selected);
  //       i++;
  //   }

  //   let currentPage = Hola;
  //   let body = document.getElementsByTagName("body");


  //   function changePage(newPage) {
  //       // body[0].innerHTML = "";

  //       currentPage = newPage;
  // }
</script> -->
<!-- <style>
    .nav {
      display: grid;
      grid-gap: 5px;
      grid-template-columns: repeat(3, 100px);
      justify-content: center;
    }
</style>
  
  <div class="nav">
    <button on:click={() => changePage(Hola)}>Hola</button>
    <button on:click={() => changePage(Chao)}>Chao</button>
    <button on:click={() => changePage(Grid)}>None</button>
  </div>

  <svelte:component this={currentPage} /> -->


<!-- <select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select> -->
<!-- <button on:click={handleClick}> </button>

<svelte:component this={selected.component}/> -->

<script>   
    export let title = "del aire";
</script>

<style>
    button {
    border: none;
    background: none;
    font-size: 15px;
    font-weight: 300;
    color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
}

</style>
<button on:click >{title}</button>