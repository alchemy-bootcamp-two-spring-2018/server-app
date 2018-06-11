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
  created() {
    if(!this.eventID) return;
    getComments(this.eventID).then(comments => {
      this.comments = comments;
    });
  },
  components: {
    Comment,
    CommentForm
  },
  props: ['eventID']
};
</script>

<style>
.slide-side-enter-active, .slide-side-leave-active  {
  transition: all .5s ease;
}

.slide-side-enter, .slide-side-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
