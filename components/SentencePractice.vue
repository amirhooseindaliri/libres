<template>
  <div class="col-md-12 mb-4">
    <h6 :style="question.question_style" id="QTextContent">
      <p v-if="question.question_type === 'text'">
        <strong>{{ question.question.join(" ") }}</strong>
      </p>
    </h6>
  </div>
</template>
<script>
export default {
  props: ["question"],
};
</script>
