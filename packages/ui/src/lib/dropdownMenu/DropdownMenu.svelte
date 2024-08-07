<script lang="ts">
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Fa from 'svelte-fa';

import DropDownMenuItems from './DropDownMenuItems.svelte';

export let onBeforeToggle = (): void => {};
export let icon: IconDefinition = faEllipsisVertical;
export let shownAsMenuActionItem = false;
export let hidden = false;
export let title = '';

// Show and hide the menu using clickOutside
let showMenu = false;

// If we touch outside the window, hide the menu
let outsideWindow: HTMLButtonElement;

// If we hit ESC while the menu is open, close it
function handleEscape({ key }: KeyboardEvent): void {
  if (key === 'Escape') {
    showMenu = false;
  }
}

let clientY: number;
let clientX: number;

function toggleMenu(): void {
  onBeforeToggle();
  showMenu = !showMenu;
}

// If we click outside the menu, close the menu
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onWindowClick(e: any): void {
  if (!hidden) showMenu = outsideWindow.contains(e.target);
}

function onButtonClick(e: MouseEvent): void {
  // keep track of the cursor position
  clientY = e.clientY;
  clientX = e.clientX;
  toggleMenu();
}
</script>

<!-- Required in order for Svelte to track all key presses and if you pressed "ESC" -->
<svelte:window on:keyup={handleEscape} on:click={onWindowClick} />

{#if !hidden}
  <!-- Create a "kebab" menu for additional actions. -->
  <div class="relative inline-block text-left">
    <!-- Button for the dropdown menu -->
    <button
      aria-label={title.length > 0 ? title : 'kebab menu'}
      on:click={onButtonClick}
      title={title}
      bind:this={outsideWindow}
      class="text-[var(--pd-action-button-text)] {shownAsMenuActionItem
        ? 'bg-[var(--pd-action-button-details-bg)] px-3'
        : 'hover:bg-[var(--pd-action-button-details-bg)]'} hover:text-[var(--pd-action-button-hover-text)] font-medium rounded-md inline-flex items-center px-2 py-2 text-center">
      <Fa class="h-4 w-4" icon={icon} />
    </button>

    <!-- Dropdown menu for all other actions -->
    {#if showMenu}
      <DropDownMenuItems clientY={clientY} clientX={clientX}><slot /></DropDownMenuItems>
    {/if}
  </div>
{/if}
