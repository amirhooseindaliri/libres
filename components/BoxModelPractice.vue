<template>
  <div :style="data.style" :class="data.className">
    <div id="questionDetail" style="pointer-events: all">
      <template v-for="section in data.body">
        <SentencePractice v-if="section.type === 'sentence'" :data="section" />
        <BoxModelPractice v-if="section.type === 'box'" :data="section" />
        <WordBoxPractice v-if="section.type === 'words_box'" :data="section" />
        <TablePractice v-if="section.type === 'table'" :data="section" />
        <SentenceBlank
          v-if="section.type === 'sentence_blank'"
          :data="section"
        />
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
