<h1>Welcome to Electron Sveltekit Bootstrap</h1>
<p><a href="https://kit.svelte.dev/docs">SvelteKit documentation</a> is available here.</p>
<p><a href="https://www.electronjs.org/docs">Electron documentation</a> is available here.</p>
<br>
<strong>API Test:</strong>
{#await APIRequest()}
    <p>Loading...</p>
{:then response}
    <p>{response.message}</p>
{/await}

<script lang="ts">
    async function APIRequest(): Promise<any> {
        let request = await fetch("http://localhost:5000/api/test")
        return await request.json()
    }
</script>
