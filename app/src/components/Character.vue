<template>
  <div>
    <button class="edit" @click="editing = !editing">{{ editing ? 'Cancel' : '✏️' }}</button>
    <button class="edit" @click="handleClick">Delete</button>
    <section v-if="!editing">
      <ul class="character">
        <h2>{{character.name}}</h2>
        <li>From {{character.universe}}</li>
        <li>{{difficultyLevel() + 'and' + canWalljump()}}</li>
        <li>Home stage: {{character.stageName}}</li>
      </ul>
    </section>
    <character-form
      v-else
      label="Update"
      :character="character"
      :on-edit="onUpdate"
      :editing="editing"
    />
  </div>
</template>

<script>
import CharacterForm from './CharacterForm.vue';

export default {

  data() {
    return {
      editing: false
    };
  },

  components: {
    CharacterForm
  },

  props: ['character', 'onRemove', 'onUpdate'],

  methods: {
    canWalljump: function() {
      if(this.character.walljump === true) {
        return ' can walljump.';
      }
      else { return ' cannot walljump.';}
    },
    //The method below doesn't work on new added characters. Why?
    difficultyLevel: function() {
      switch(this.character.difficulty) {
        case 1:
        case 2:
          return this.character.name + ' is very easy to control ';
        case 3:
        case 4:
          return this.character.name + ' is easy to control ';
        case 5:
        case 6:
          return this.character.name + ' is of normal difficulty to control ';
        case 7:
        case 8:
          return this.character.name + ' is hard to control ';
        case 9:
        case 10:
          return this.character.name + ' is very hard to control ';
      }
    },
    handleClick() {
      if(confirm(`Delete ${this.character.name}?`)) {
        this.onRemove(this.character.id);
      }
    }
  }
};
</script>

<style scoped>
.character {
  width: 500px;
}
h2 {
  text-shadow: 1px -1px 7px rgb(214, 126, 255);
  text-decoration: underline;
}

div {
  list-style: none;
  border-bottom: 1px dashed rgb(202, 182, 0);
  width: 60%;
}


li {
  margin-bottom: 5px;
}

.edit {
  float: right;
  margin: 5px;
}

button {
  background: -webkit-linear-gradient(rgb(120, 96, 143), rgb(17, 17, 172));
  color: rgb(255, 235, 57);
  border-radius: 5px;
  border: 1px solid rgb(202, 182, 0);
}

button:hover {
  cursor: pointer;
  background: -webkit-linear-gradient(rgb(153, 137, 168), rgb(45, 45, 172));
  color: rgb(255, 235, 57);
  border-radius: 5px;
  border: 1px solid rgb(202, 182, 0);
}

</style>