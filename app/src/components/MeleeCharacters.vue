<template>
  <section>
    <h2>Melee Characters</h2>
    <ul>
      <Character
        v-for="character in meleeCharacters"
        :key="character.name"
        :character="character"
        :on-remove="handleRemove"
      />
    </ul>


    <character-form
      label="Add"
      :on-edit="handleAdd"/>
  </section>

</template>

<script>
import CharacterForm from './CharacterForm.vue';
import { getMeleeCharacters, addMeleeCharacter, removeMeleeCharacter } from '../services/api.js';
import Character from './Character.vue';

export default {
  data() {
    return {
      meleeCharacters: null
    };
  },
  created() {
    getMeleeCharacters()
      .then(meleeCharacters => {
        this.meleeCharacters = meleeCharacters;
      });
  },
  components: {
    Character,
    CharacterForm
  },
  methods: {
    handleAdd(meleeCharacter) {
      return addMeleeCharacter(meleeCharacter)
        .then(saved => {
          this.meleeCharacters.push(saved);
        });
    },
    handleRemove(id) {
      return removeMeleeCharacter(id)
        .then(() => {
          const index = this.meleeCharacters.findIndex(character => character.id === id);
          if(index === -1) return;
          this.meleeCharacters.splice(index, 1);
        });
    }
  }
};
</script>

<style scoped>
h2 {
  background: -webkit-linear-gradient(rgb(199, 179, 255), rgb(3, 1, 77));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: center;
}
</style>
