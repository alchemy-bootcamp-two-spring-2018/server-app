<template id="amp-template">
  <div>
    <article v-if="!editing">
      <h3>{{ amp.name }}</h3>
      <p>Country of Origin: {{ amp.countryName }}</p>
      <p>Introduced: {{ amp.introduced }}</p>
      <p class="tubes">
        Uses tubes: {{ amp.tubes }}
      </p>
      <p>
        <button @click="handleClick">Remove this amp</button>
      </p>
    </article>
    <amp-form
      v-else
      label="update"
      :amp="amp"
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
    'onUpdate'
  ],
  methods: {
    handleClick() {
      if(confirm(`Are you sure you want to remove ${this.amp.name}$`)) {
        this.onRemove(this.amp.id);
      }
    }
  }
};

</script>
      
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
</style>