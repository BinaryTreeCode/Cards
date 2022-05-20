<script>

import Home from "./Home.svelte"; 
import Water from "./Water.svelte"; 
import Air from "./Air.svelte";
import Floor from "./Floor.svelte";
import Visual from "./Visual.svelte";
import Thermal from "./Thermal.svelte";
import Auditory from "./Auditory.svelte";

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

    
    section {
        justify-content: center;
        align-items: center;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    section h1 {
        font-size: 2em;
        text-align: center;
        grid-column: 1;
        grid-row: 1;
    }

    section p {
        font-size: 1.2rem;
        text-align: center;
        grid-column: 2;
        grid-row: 1;
    }

    .nav {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(5, 100px);
    justify-content: center;
    }

    .nav button {
        border-radius: 4px;
        cursor: pointer;
    }

    .nav button:hover {
        background-color: #676778;
        color: white;
    }

    .nav button:active {
        background-color: #676778;
        color: chocolate;
    }

    .nav button:focus {
        background-color: #676778;
        color: black;
    }
</style>


<div>
    <header>
        <section>
            <h1>Tipos de contaminación</h1>
            <p> 
                La contaminación es el ingreso de sustancias que no pertenecen al ecosistema, lo que afecta su equilibrio; 
                esta contaminación puede ser natural o artificial. Existen diferentes tipos de contaminaciones:
            </p>
        </section>

        <div class="nav">
            <button on:click={() => changePage(Home)}>Home</button>
            <button on:click={() => changePage(Water)}>Water</button>
            <button on:click={() => changePage(Air)}>Air</button>
        
            <button on:click={() => changePage(Floor)}>floor</button>
            <button on:click={() => changePage(Visual)}>visual</button>
        
            <button on:click={() => changePage(Thermal)}>visual</button>
            <button on:click={() => changePage(Auditory)}>visual</button>
        </div>
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

