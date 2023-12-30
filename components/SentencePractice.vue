<template>
  <div class="col-md-12 mb-4">
    <h6 :style="question.question_style" id="QTextContent">
      <p>
        <strong
          v-if="question.question_type === 'text'"
          style="letter-spacing: -2px"
        >
          <template v-for="(q, index) in question.question">
            <template v-if="q === '~'">
              <br />
            </template>
            <template v-else-if="q === ' '"> &nbsp; </template>
            <template
              v-else-if="findIndexes(question.question).includes(index)"
            >
              <span
                :style="{
                  backgroundColor: `${
                    chosenSpan(question.question_style, index).backgroundColor
                  }`,
                  color: `${chosenSpan(question.question_style, index).color}`,
                }"
                class="mx-1 px-1"
              >
                {{ chosenSpan(question.question_style, index)["text"] }}
              </span>
            </template>
            <template v-else>
              {{ q }}
            </template>
          </template>
        </strong>
      </p>
    </h6>
  </div>
</template>
<script>
export default {
  props: ["question"],
  methods: {
    findIndexes(str) {
      const string = str;
      const regex = /\$/g;
      const indexes = [];
      let match;

      while ((match = regex.exec(string)) !== null) {
        indexes.push(match.index);
      }
      return indexes;
    },
    chosenSpan(item, index) {
      const findIndex = item.spans.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        return item.spans[findIndex];
      } else {
        return null;
      }
    },
  },
};
</script>
