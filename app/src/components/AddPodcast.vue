<template id="podcast-template">
    <section class="add-podcast">
        <h1>New Podcast</h1>
        <form @submit.prevent="handleSubmit">
            <label>
                Name:
                <input type="text" name="name" placeholder="Name of Podcast" required
                    v-model="podcast.name">
            </label>

            <label>
                Published By:
                <input type="text" name="publisher" placeholder="Publisher" required
                    v-model="podcast.publisher">
            </label>

            <label>
                Length(average minutes):
                <input type="text" name="averageMinutes" placeholder="Average minutes" required
                    v-model="podcast.averageMinutes">
            </label>

            <label>
                Category:
                <input type="text" name="category" placeholder="Category" required
                    v-model="podcast.category">
            </label>

            <label>
                NSFW?
                <input type="text" name="NSFW" placeholder="NSFW? true or false" required
                    v-model="podcast.NSFW">
            </label>

            <label>
                Description:
                <textarea name="body" rows="8" cols="40" required 
                    v-model="podcast.description"></textarea>
            </label>

            <label>
                <button type="submit">Add</button>
            </label>
        </form>
    </section>
</template>


<script>
const initPodcast = () => {
  return {
    name: '',
    publisher: '',
    averageMinutes: '',
    category: '',
    NSFW: '',
    description: ''
  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      podcast: initPodcast()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.podcast)
        
        .then(() => {
          this.podcast = initPodcast();
        });
    }
  }
};
</script>

<style>
.add-podcast {
  width: 400px;
  text-align: left;
  margin: auto; 
}

label {
  display: block;
}
</style>
