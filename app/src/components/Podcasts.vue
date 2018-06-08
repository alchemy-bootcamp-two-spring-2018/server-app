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
            :onUpdate="handleUpdate"
        />
    </ul>
    <h3>Add a Podcast</h3>
    <PodcastForm 
        label="Add"
        :on-edit="handleAdd"/>
</section>
</template>
            
<script>
    import Podcast from './Podcast';
    import PodcastForm from './PodcastForm.vue';
    import { 
        getPodcasts, 
        addPodcast, 
        updatePodcast,
        removePodcast } from '../services/api';
    
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
            PodcastForm
        },
       
        methods: {
            handleAdd(podcast) {
                return addPodcast(podcast)
                    .then(saved => {
                        this.podcasts.push(saved);
                });
            },
        handleRemove(id) {
            return removePodcast(id)
                .then(() => {
                    const index = this.podcasts.findIndex(podcast => podcast.id === id);
                    if(index === -1) return;
                    this.podcasts.splice(index, 1);
                });    
            },
        handleUpdate(toUpdate) {
            return updatePodcast(toUpdate)
                .then(updated => {
                    this.podcasts = this.podcasts.map(podcast => {
                        return podcast.id === updated.id ? updated : podcast;
                    });
                });
            }
        }
    };
   
</script>
            
<style>
ul.list {
  margin: 10;
  padding: 5;
  list-style-type: none;
}
            
</style>
            