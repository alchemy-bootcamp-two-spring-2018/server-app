<template>
  <div>

    <ul>
      <h2><b>{{ cocktail.name }}</b></h2>
      <li><b style="color:burlywood">Alcohol:</b> {{ cocktail.alcohol }}</li>
      <li><b style="color:burlywood">Main Ingredients:</b> {{ cocktail.ingredients }}</li>
      <li><b style="color:burlywood">Served:</b> {{ cocktail.served }}</li>
      <li><b style="color:burlywood">Standard garnish:</b> {{ cocktail.garnish }}</li>
      <li><b style="color:burlywood">Tried: </b> <span v-if="cocktail.tried">Yes</span> <span v-else>No</span></li>
    </ul>

    <img :src="cocktail.image"> 

  </div>
</template>

<script>
export default {
  props: ['cocktail']
};
</script>

<style scoped>

h2 {
  color: mediumseagreen;
  margin-top: 0;
}

ul {
  list-style-type: none;
  width: 50%;
  margin: 0;
  padding: 0;
  font-size: 1.25em;
  font-family: 'Song Myung', serif;
}

li {
  color: whitesmoke;
  margin-bottom: 2px;
}

img {
  display: flex;
  align-self: center;
  width: 225px;
}

div {
  display: flex;
  justify-content: space-around;
  background: rgba(0, 0, 0, .85);
  border-radius: 5px;
  padding: 20px 0px 20px 10px;
  margin-bottom: 20px;
}

</style>


