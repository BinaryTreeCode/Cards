import Home from './Home.svelte';

import Water from "./Water.svelte";
import Air from "./Air.svelte";
import Floor from "./Floor.svelte";
import Visual from "./Visual.svelte";
import Thermal from "./Thermal.svelte";
import Auditory from "./Auditory.svelte";

const routes = {
    '/': Home,
    '/water': Water,
    '/air': Air,
    '/floor': Floor,
    '/visual': Visual,
    '/thermal': Thermal,
    '/auditory': Auditory
};

export default routes;
