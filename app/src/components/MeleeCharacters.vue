<template>
  <section>
    <h2>Melee Characters</h2>
    <ul>
      <Character
        v-for="character in meleeCharacters"
        :key="character.name"
        :character="character"
      />
    </ul>
    <add-character :on-add="handleAdd"/>
  </section>


</template>

<script>
import AddCharacter from './AddCharacter.vue';
import { getMeleeCharacters, addMeleeCharacter } from '../services/api.js';
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
    AddCharacter
  },
  methods: {
    handleAdd(character) {
      return addMeleeCharacter(character)
        .then(saved => {
          this.meleeCharacters.push(saved);
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
