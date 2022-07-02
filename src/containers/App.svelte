
<script>
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>


<Router routes="{routes}" />

<style>
    :global(body) {
        background-color: #676778;
        color: white;
    }
</style>



<div>
    <!-- <li><a href="/" use:link use:active>Page1</a></li> -->
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
</div>

