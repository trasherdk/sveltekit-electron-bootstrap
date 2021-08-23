{#if ready}
    <slot />
{/if}

<script lang="ts">
    import "../styles/tailwind.scss"
    import { onMount } from "svelte"

    let ready: boolean = false
    onMount(() => ready = true)
    
</script>
