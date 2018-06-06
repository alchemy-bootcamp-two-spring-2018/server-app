<template>
  <div class="location">
    <h2>{{location.name}}.</h2>
    <p><strong>Location: {{location.location}}</strong></p>
    <p><strong>Elevation: {{location.elevation}}ft.</strong></p>
    <p><strong>Year Round Climbing: {{location.yearRoundClimbing}}.</strong></p>
    <p id="description">{{location.description}}</p>
  </div>
</template>

<script>
export default {

  props: ['location']
};
</script>

<style>
.location {
  border: solid .5px;
  margin: auto;
  margin-top: 10px;
  width: 95%;
  background-color: rgba(176, 196, 222, 0.671);
  max-height: auto;
  border-radius: 5px;
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
  margin-bottom: 2px;
}
</style>
