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
.comment {
  border: 1px solid #A3A646;
  margin: 10px;
  padding: 10px;
}
</style>
