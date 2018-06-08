<template id="podcast-template">
    <div>
        <article v-if="!editing">
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
    <PodcastForm
        v-else
        label="Update"
        :podcast="podcast"
        :on-edit="onUpdate"
    />
        <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
  </div>
</template>
        
<script>
    import PodcastForm from './PodcastForm';

    export default {
        data() {
            return {
                editing: false
            };
        },
        components: {
            PodcastForm
        },
        props: [
            'podcast',
            'onRemove',
            'onUpdate'
        ],

        methods: {
            handleClick() {
                if(confirm(`You want to remove ${this.podcast.name}?`)) {
                    this.onRemove(this.podcast.id);
                }
            }
        }

    };
    
    
</script>
        
<style>       
</style>
        