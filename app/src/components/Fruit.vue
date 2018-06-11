<template id="fruit-template">
  <div>
    <article v-if="!editing">
      <h3>{{ fruit.name }}</h3>
      <p>Classification: {{ fruit.classificationClassification }}</p>
      <p>Color: {{ fruit.color }}</p>
      <p>Skin Edible: {{fruit.skinedible}}</p>
      <p>Calories: {{fruit.calories}}</p>
      <p>
        <button @click="handleClick">remove this fruit</button>
      </p>  
    </article>
    <FruitForm
      v-else
      label="Update"
      :fruit="fruit"
      :on-edit="onUpdate"
    />
     <button @click="editing = !editing">{{ editing ? 'Cancel' : '✏️'}}</button>  
  </div>  
</template>

<script>
import FruitForm from './FruitForm';

export default {
  data() {
    return {
      editing: false
    };
  },
  components: {
    FruitForm
  },
  props: [
    'fruit',
    'onRemove',
    'onUpdate'
  ],
  methods: {
    handleClick() {
      if(confirm(`Are you sure want to remove ${this.fruit.name}?`)) {
        this.onRemove(this.fruit.id);
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