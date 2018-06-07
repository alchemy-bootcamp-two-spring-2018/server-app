<template id="podcast-template">
    <article>
        <h3>{{ podcast.name }}</h3>
        <p>Published by: {{ podcast.publisher }}</p>
        <p>Length (average minutes): {{ podcast.averageminutes }}</p>
        <p>Category: {{ podcast.category }}</p> 
        <p>NSFW? (not safe for work): {{ podcast.nsfw }}</p>
        <p>Description: {{ podcast.description }}</p>
    </article>
</template>
        
<script>
    export default {
        props: ['podcast']
    };
    
    
</script>
        
<style>
        
</style>
        