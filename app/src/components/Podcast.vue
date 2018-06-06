<template id="podcast-template">
    <article>
        <h3>{{ podcast.name }}</h3>
        <p>Published by: {{ podcast.publisher }}</p>
        <p>Length (average minutes): {{ podcast.averageMinutes }}</p>
        <p>Category: {{ podcast.category }}</p> 
        <p>NSFW?: {{ podcast.NSFW }}</p>
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
        
        </template>
        
        <script>
        export default {
        
        }
        </script>
        
        <style>
        
        </style>
        