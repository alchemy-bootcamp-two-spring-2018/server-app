<template id="podcast-template">
    <section class="add-podcast">
        <form @submit.prevent="handleSubmit">
            <label>
            Name:
            <input type="text" name="name" placeholder="Name of Podcast" required
                v-model="edit.name">
            </label>

            
            <label>
                Published By:
                <input type="text" name="publisher" placeholder="Publisher" required
                v-model="edit.publisher">
            </label>

            <label>
            Length(average minutes):
            <input type="text" name="averageminutes" placeholder="Average minutes" required
                v-model="edit.averageminutes">
            </label>

            <label>
            Category:
            <input type="text" name="category" placeholder="Category" required
                v-model="edit.category">
            </label>

            <label>
                NSFW? (not safe for work):
                <input type="text" name="nsfw" placeholder="True or False" required
                    v-model="edit.nsfw">
            </label>
            <label>
                Description:
                <textarea name="body" rows="8" cols="40" required 
                    v-model="edit.description"></textarea>
            </label>
        
            <label>
                <button type="submit">{{ label }}</button>
            </label>
        </form>
        {{ edit }}
    </section>
</template>

<script>

const initPodcast = () => {
  return {
    name: '',
    publisher: '',
    averageminutes: '',
    category: '',
    nsfw: '',
    description: ''
  };
};
export default {
  props: {
    podcast: Object,
    label: String,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.podcast ? Object.assign({}, this.podcast) : initPodcast()//,
      //quadrants: []
    };
  },
//   created() {
//     getQuadrants().then(quadrants => {
//       this.quadrants = quadrants;
//     });
//   },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initPodcast();
        });
    }
  }
};
</script>

<style>
.add-podcast {
  width: 500px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>