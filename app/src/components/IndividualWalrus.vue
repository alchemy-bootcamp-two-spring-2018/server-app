<template id="individual-walrus-template">
  <div>
    <article v-if="!editing">
      <h3>{{ walrus.name }}</h3>
      <p><strong>Type:</strong> {{ walrus.type }}</p>
      <p><strong>Weight:</strong> {{ walrus.weight }}</p>
      <p>More Info: {{walrus.url}}</p>
      <p>Photo URL: {{walrus.photo_url}}</p>
      <p>A Real Walrus? {{ walrus.fictional }}</p>
      <p><strong>Description:</strong><br/> {{ walrus.description }}</p>
      <button @click="deleteWalrus">Delete this Walrus</button>
    </article>
    <WalrusForm
      v-else
      label="Update"
      :walrus="walrus"
      :on-edit="onUpdate"
      />
      <button @click="editing = !editing">{{editing ? 'Cancel' : '✏️'}}</button>
  </div>
</template>

<script>
import WalrusForm from './WalrusForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    WalrusForm
  },
  props: 
    ['walrus',
    'onRemove',
    'onUpdate'
    ],
    
  methods: {
    deleteWalrus() {
      this.onRemove(this.walrus.id);
    }
}
};

</script>

<style>
h3 {
  font-family: 'Chewy', cursive;
  font-size: 2.0em;
}
</style>
