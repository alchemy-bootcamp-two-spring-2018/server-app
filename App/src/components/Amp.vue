<template id="amp-template">
  <div>
    <article v-if="!editing">
      {{ amp }}
      <h3>{{ amp.name }}</h3>
      <p>Country of Origin: {{ country }}</p>
      <p>Introduced: {{ amp.introduced }}</p>
      <p class="tubes">
        Uses tubes: {{ amp.tubes }}
      </p>
      <p>
        <button @click="handleClick">Remove this amp</button>
      </p>
    </article>
    <AmpForm
      v-else
      label="update"
      :amp="amp"
      :countries="countries"
      :on-edit="onUpdate"
      />
      <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
  </div>  
</template>
      
<script>
import AmpForm from './AmpForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    AmpForm
  },
  props: [
    'amp',
    'onRemove',
    'onUpdate',
    'countries'
  ],
  computed: {
    country() {
      if(!this.countries) return null;
      const country = this.countries.find(c => c.id === this.amp.countryId);
      return country ? country.name : 'Unknown';
    }
  },
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to remove ${this.amp.name}$`)) {
        this.onRemove(this.amp.id);
      }
    },
    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    },
  }
};

</script>
      
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>