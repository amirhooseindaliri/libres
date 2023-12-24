<template>
  <div>
    <template v-for="item in data.queries">
      <p class="mb-0">&nbsp;</p>
      <p style="font-size: 1rem" :style="data.query_style" class="mb-0">
        <template v-for="(char, index) in item.sentence">
          <template v-if="findIndexes(item.sentence).includes(index)">
            <select
              class="select-css selectoption"
              @change="changeSelect($event, item, index, item.query_id)"
              :class="chosenColor(item, index)"
            >
              <option
                v-for="option in item.words[
                  findTarget(findIndexes(item.sentence), index)
                ].options"
                :selected="
                  selectedOption(
                    option,
                    item.words[findTarget(findIndexes(item.sentence), index)]
                      .correct
                  )
                "
                :value="option"
              >
                {{ option }}
              </option>
            </select>
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
    changeSelect(evt, itemData, index, query_id) {
      const value = evt.target.value;
      const newWords = itemData.words.map((item) => {
        if (item.index == index) {
          return { ...item, chosen: value };
        } else {
          return item;
        }
      });
      this.$emit("selectSuccess", {
        query_id,
        newWords,
      });
    },
    findTarget(indexes, indexItem) {
      return indexes.findIndex((I) => I === indexItem);
    },
    selectedOption(option, correct) {
      if (this.seeAnswer) {
        if (option === correct) {
          return true;
        } else {
          return false;
        }
      } else {
        return "selected";
      }
    },
  },
};
</script>
