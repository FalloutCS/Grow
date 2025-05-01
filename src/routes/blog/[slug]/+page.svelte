<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    $inspect(data)
</script>

You're now reading blog post {data.params}

