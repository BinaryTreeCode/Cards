<script>

import Home from "./Home.svelte"; 
import Water from "./Water.svelte"; 
import Air from "./Air.svelte";
import Floor from "./Floor.svelte";
import Visual from "./Visual.svelte";


let currentPage = Home;

function changePage(newPage) {
    currentPage = newPage;
}
</script>

<style>
    :global(body) {
        background-color: #676778;
        color: white;
    }
</style>

<div class="nav">
    <button on:click={() => changePage(Home)}>Home</button>
    <button on:click={() => changePage(Water)}>Water</button>
    <button on:click={() => changePage(Air)}>Air</button>

    <button on:click={() => changePage(Floor)}>floor</button>
    <button on:click={() => changePage(Visual)}>visual</button>

</div>
<div>
    <div class="name">
        <h1>'Hola' !</h1>
    </div>

    <header>
        <!-- <table style="width:100%" border="1">
            <caption>tareas</caption>
            <tr>
                <th>categoria</th>
                <th>Importante</th>
                <th>No importante</th>
            </tr>
            <tr>
                <th>Urgente</th>
                <td>
                    //urgente e importante
                    <ul>
                        <li>punto uno</li>
                        {#each arrayUI as item}
                        <li>{item}</li>
                        {/each}
                    </ul>
                </td>
                <td>
                    // urgente pero no  importante
                    <ul>
                        <li>punto uno</li>
                        {#each arrayI as item}
                        <li>{item}</li>
                        {/each}
                    </ul>
                </td>
            </tr>
            <tr>
                <th>No urgente</th>
                <td>
                    //no urgente pero importante
                    <ul>
                        <li>punto uno</li>
                        {#each arrayU as item}
                        <li>{item}</li>
                        {/each}
                    </ul>
                </td>
                <td>
                    //no urgente ni importante
                    <ul>
                        <li>punto uno</li>
                        {#each array as item}
                        <li>{item}</li>
                        {/each}
                    </ul>
                </td>
            </tr>
            </table> -->
    </header>

    <!-- <component /> -->
    <svelte:component this={currentPage} />

</div>

