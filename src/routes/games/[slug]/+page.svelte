<!-- slug page for different projects -->
<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>{data.title}</h1>
<div>
    {@html data.content}
    {@html data.apiResponse}
</div>