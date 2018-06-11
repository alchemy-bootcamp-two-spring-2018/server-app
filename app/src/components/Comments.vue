<template>
  <section class="comments-section">
    <Comment 
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <CommentForm />
  </section>
</template>

<script>
import Comment from './Comment';
import CommentForm from './Comment';
import { getComments, createComment, updateComment, deleteComment } from '../services/api';

export default {
  data() {
    return {
      comments: null
    };
  },
  components: {
    Comment,
    CommentForm
  }
};
</script>

<style>

</style>
