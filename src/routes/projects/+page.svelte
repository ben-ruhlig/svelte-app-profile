// src/routes/index.svelte
<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    let default_page = 'project1';

    onMount(() => {
        goto('/projects/'.concat(default_page));
    });
</script>