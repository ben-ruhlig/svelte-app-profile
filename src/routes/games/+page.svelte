// src/routes/index.svelte
<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    let default_page = 'trivia';

    onMount(() => {
        goto('/games/'.concat(default_page));
    });
</script>