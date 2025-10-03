<script lang="ts">
import NetworkActions from './NetworkActions.svelte';
import type { NetworkInfoUI } from './NetworkInfoUI';

export let object: NetworkInfoUI;
</script>

<NetworkActions volume={object} on:update />
