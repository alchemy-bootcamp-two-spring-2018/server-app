<template>
  <section>
    <ul>
      <Character
        v-for="character in meleeCharacters"
        :key="character.name"
        :character="character"
        :on-remove="handleRemove"
        :on-update="handleUpdate"
      />
    </ul>


    <character-form
      label="Add"
      :on-edit="handleAdd"/>
  </section>
</template>

<script>
import CharacterForm from './CharacterForm.vue';
import Character from './Character.vue';
import { getMeleeCharacters, addMeleeCharacter, updateMeleeCharacter, removeMeleeCharacter } from '../services/api.js';

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
    handleAdd(character) {
      return addMeleeCharacter(character)
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
    },
    handleUpdate(toUpdate) {
      return updateMeleeCharacter(toUpdate)
        .then(updated => {
          this.meleeCharacters = this.meleeCharacters.map(character => {
            return character.id === updated.id ? updated : character;
          });
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
  font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  text-align: center;
  font-size: 2.5em;
  margin: 0;
}
</style>
