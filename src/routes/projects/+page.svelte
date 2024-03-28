// src/routes/index.svelte
<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    onMount(() => {
        goto('/projects/project1');
    });
</script>