<template>
  <div>
    <template v-for="item in data.queries">
      <p class="mb-0">&nbsp;</p>
      <p style="font-size: 1rem" :style="data.query_style" class="mb-0">
        <template v-for="(char, index) in item.sentence">
          <template v-if="char === '~'">
            <br />
          </template>
          <template v-else-if="findIndexes(item.sentence).includes(index)">
            <img
              v-if="chosenItem(item, index).type === 'image'"
              alt=""
              :src="chosenItem(item, index).url"
            />
            <input
              v-if="chosenItem(item, index).type === 'simple_blank'"
              type="text"
              class="formstyle textoption"
              @change="changeInput($event, item, index, item.query_id)"
              :class="chosenColor(item, index)"
              :maxlength="limitCount(item, index)"
              :size="limitCount(item, index)"
              :value="chosenText(item, index)"
            />
            <span
              v-if="chosenItem(item, index).type === 'span'"
              :style="chosenItem(item, index).style"
              class="mx-1 px-1"
            >
              {{ chosenItem(item, index).correct }}
            </span>
          </template>
          <template v-else>{{ char }}</template>
        </template>
      </p>
      <p class="mb-0">&nbsp;</p>
    </template>
  </div>
</template>
<script>
export default {
  props: ["data", "checkAnswer", "seeAnswer"],
  methods: {
    findIndexes(str) {
      const string = str;
      const regex = /%/g;
      const indexes = [];
      let match;

      while ((match = regex.exec(string)) !== null) {
        indexes.push(match.index);
      }
      return indexes;
    },
    chosenText(item, index) {
      const findIndex = item.words.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        return item.words[findIndex].chosen;
      } else {
        return null;
      }
    },
    chosenItem(item, index) {
      const findIndex = item.words.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        return item.words[findIndex];
      } else {
        return null;
      }
    },
    limitCount(item, index) {
      const findIndex = item.words.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        return item.words[findIndex].limit_count;
      } else {
        return null;
      }
    },
    chosenColor(item, index) {
      if (this.checkAnswer || this.seeAnswer) {
        let className;
        const findIndex = item.words.findIndex((item) => {
          return item.index === index;
        });
        if (findIndex >= 0) {
          const corrected =
            item.words[findIndex].chosen === item.words[findIndex].correct;
          if (corrected) {
            className = "correctNullSpace";
          } else {
            className = "wrongNullSpace";
          }
        }
        return className;
      } else {
        return "";
      }
    },
    changeInput(evt, itemData, index, query_id) {
      const value = evt.target.value;
      const newWords = itemData.words.map((item) => {
        if (item.index == index) {
          return { ...item, chosen: value };
        } else {
          return item;
        }
      });
      this.$emit("changeSuccess", {
        query_id,
        newWords,
      });
    },
  },
};
</script>
