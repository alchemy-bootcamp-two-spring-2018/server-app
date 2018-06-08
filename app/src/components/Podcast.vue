<template id="podcast-template">
    <article>
        <h3>{{ podcast.name }}</h3>
        <p>Published by: {{ podcast.publisher }}</p>
        <p>Length (average minutes): {{ podcast.averageminutes }}</p>
        <p>Category: {{ podcast.category }}</p> 
        <p>NSFW? (not safe for work): {{ podcast.nsfw }}</p>
        <p>Description: {{ podcast.description }}</p>
        <p>
            <button @click="handleClick">remove this podcast</button>
        </p>    
    </article>
</template>
        
<script>
    export default {
        data() {
            return {
                editing: false
            };
        },
        props: [
            'podcast',
            'onRemove',
            'onUpdate'
        ],

        methods: {
            handleClick() {
                if(confirm(`You want to remove ${this.podcast.name}?`)) {
                    this.onRemove(this.podcast);
                }
            }
        }

    };
    
    
</script>
        
<style>
        
</style>
        