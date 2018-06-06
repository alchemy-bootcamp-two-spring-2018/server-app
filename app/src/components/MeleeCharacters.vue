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
