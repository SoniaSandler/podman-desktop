<script lang="ts">
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Fa from 'svelte-fa';

let dropdownOpen = false;
</script>

<div class="flex flex-col items-start w-min-[400px] w-fit pt-2">
  <button class="flex flex-row text-lg self-center" on:click="{() => (dropdownOpen = !dropdownOpen)}">
    <Fa class="m-1 mr-2" size="0.9x" icon="{dropdownOpen ? faChevronDown : faChevronRight}" /> Options
  </button>
  {#if dropdownOpen}
    <slot />
  {/if}
</div>
