<script lang="ts">
import { faPaste } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@podman-desktop/ui-svelte';
import Fa from 'svelte-fa';

export let commandDiv;
export let firstCommand = '';
export let onClick: () => void = () => {};
</script>

<div
  class="flex flex-row bg-[var(--pd-details-empty-cmdline-bg)] items-center justify-between rounded-sm p-3 mt-2 w-fit min-w-[400px] self-center">
  <div bind:this="{commandDiv}" class="font-mono text-[var(--pd-details-empty-cmdline-text)]">
    {firstCommand}
  </div>
  <Button title="Copy To Clipboard" class="ml-5" on:click="{onClick}" type="link">
    <Fa class="h-5 w-5 cursor-pointer text-xl text-purple-500 hover:text-purple-600" icon="{faPaste}" />
  </Button>
</div>
