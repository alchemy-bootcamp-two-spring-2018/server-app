<template>
  <ul>
    <h3>{{character.name}}</h3>
    <li>From {{character.universe}}</li>
    <li>{{difficultyLevel() + 'and' + canWalljump()}}</li>
  </ul>
</template>

<script>
export default {
  props: ['character'],

  methods: {
    canWalljump: function() {
      if(this.character.walljump === 'true') {
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
    }
  }
};
</script>

<style scoped>
h3 {
  text-shadow: 1px -1px 7px rgb(214, 126, 255);
  text-decoration: underline;
}

ul {
  list-style: none;
  border-bottom: 1px dashed rgb(173, 173, 0);
}

li {
  margin-bottom: 5px;
}
</style>
