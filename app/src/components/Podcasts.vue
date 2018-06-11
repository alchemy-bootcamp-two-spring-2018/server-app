<template>
<section>
    <h2>Recommended Podcasts</h2>
    <p v-if="!podcasts">Loading podcasts</p>
    <ul v-else class="list">
        <Podcast
            v-for="podcast in podcasts"
            :key="podcast.name"
            :podcast="podcast"
            :on-remove="handleRemove"
        />
    </ul>
    <AddPodcast :on-add="handleAdd"/>
</section>
</template>
            
<script>
    import Podcast from './Podcast';
    import AddPodcast from './AddPodcast.vue';
    import { getPodcasts, addPodcast, removePodcast } from '../services/api';
    
    export default {
        data() {
            return {
                podcasts: null
            };
        },
        created() {
            getPodcasts()
                .then(podcasts => {
                    this.podcasts = podcasts;
                });
        },
        components: {
            Podcast,
            AddPodcast
            //,  ** this blew up app, try to rework later
            // RemovePodcast
        // },
        // methods: {
        //     handleAdd(podcast) {
        //         return addPodcast(podcast)
        //             .then(saved => {
        //                 this.podcasts.push(saved);
        //         });
        //     },
        //     handleRemove(podcast) {
        //         return removePodcast(podcast)
        //     },
        },     
    };
   
</script>
            
<style>

            
</style>
            