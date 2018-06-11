<template>
  <div v-if="comment" class="comment">
    <p><strong>{{ comment.username }}</strong></p>
    <p>{{ comment.comment }}</p>
    <CommentForm />
  </div>
</template>

<script>
import CommentForm from './CommentForm';
export default {
  components: {
    CommentForm
  },
  props: ['comment']
};
</script>

<style>
</style>
