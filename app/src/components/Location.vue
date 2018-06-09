<template>
  <div class="location">
      <div class="buttons">
        <button @click="handleDelete" id="delete">x</button>
        <button v-if="!editing" @click="editing = true">edit</button>
      </div>
      <article v-if="!editing">
      <h2 class="name">{{ location.name }}</h2>
      <p><strong>Location: {{ location.location }}</strong></p>
      <p><strong>Climbing Type: {{ climbingStyle }}</strong></p>
      <p><strong>Elevation: {{ location.elevation }}ft.</strong></p>
      <p v-if="location.yearroundclimbing == true"><strong>Year Round Climbing</strong></p>
      <p v-if="location.yearroundclimbing !== true"><strong>Seasonal Climbing</strong></p>
      <p id="description">{{location.description}}</p>
      <hr>
    </article>
    <LocationForm
      v-else
      label="Update"
      label2="Edit Location"
      :editing="editing"
      :location="location"
      :climbingStyles="climbingStyles"
      :on-edit="handleUpdate"
      :on-cancel="() => editing = false"
      />
  </div>
</template>

<script>
import LocationForm from './LocationForm';
export default {
  data() {
    return {
      editing: false
    };
  },
  props: {
    climbingStyles: {
      type: Array,
      required: true
    },
    location: {
      type: Object
    },
    onDelete: {
      type: Function,
      required: true
    },
    onUpdate: {
      type: Function,
      required: true
    }
  },
  components: {
    LocationForm
  },
  computed: {
    climbingStyle() {
      if(!this.climbingStyles) return null;
      const climbingStyle = this.climbingStyles.find(q => q.id === this.location.climbingstyleID);
      console.log(climbingStyle);
      console.log(this.location);

      return climbingStyle ? `${climbingStyle.type}` : 'Unknown';
    }
  },
  methods: {
    handleDelete() {
      this.onDelete(this.location);
      return (this.location.id);
    },
    handleUpdate(toUpdate) {
      return this.onUpdate(toUpdate)
        .then(() => {
          this.editing = false;
        });
    }
  }
};
</script>
<style>
.location {
  margin: auto;
  margin-top: 10px;
  width: 95%;
  max-height: auto;
  border-radius: 5px;
}
.buttons {
  float: left;
  align-items: left;

}
#description {
  width: 85%;
  margin: auto;
  margin-bottom: 10px;
}
p {
  margin: 2px;
}
h2 {
  margin: auto;
  margin-top: 0px;
  margin-bottom: 2px;
  color: darkslategray;
  width:44%;
}
img {
  max-width: 300px;
  margin-top: 15px;
}
button {
  font-size: 13px;
  margin: 5px;
  color: white;
  background: rgba(155, 153, 121, 0.671);
  border-style: none;
  border-radius: 5px;
}
button:hover {
  cursor: pointer;
  background: rgba(216, 210, 161, 0.671);
}
</style>
