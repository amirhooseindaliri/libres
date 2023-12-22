<template>
  <div>
    <template v-for="item in data.queries">
      <p class="mb-0">&nbsp;</p>
      <p style="font-size: 1rem" :style="data.query_style" class="mb-0">
        <template v-for="(char, index) in item.sentence">
          <template v-if="findIndexes(item.sentence).includes(index)">
            <span
              :id="`droppable${index}`"
              class="alert alert-dark customewidth nulloption text-center"
              @drop="onDrop($event, item, index, item.query_id)"
              @dragenter.prevent
              @dragover.prevent
              :class="checkAnswer ? chosenColor(item, index) : null"
            >
              {{ chosenText(item, index) }} </span
            ><input
              type="text"
              class="formstyle textoption"
              id="droppable0txt"
              style="display: none"
            />
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
  props: ["data", "checkAnswer"],
  methods: {
    findIndexes(str) {
      const string = str;
      const regex = /%/g;
      const indexes = [];
      let match;

      while ((match = regex.exec(string)) !== null) {
        indexes.push(match.index);
      }
      console.log(indexes);
      return indexes;
    },
    onDrop(evt, itemData, index, query_id) {
      const itemID = evt.dataTransfer.getData("item");
      const newWords = itemData.words.map((item) => {
        if (item.index == index) {
          return { ...item, chosen: itemID };
        } else {
          return item;
        }
      });
      this.$emit("dropSuccess", {
        query_id,
        newWords,
      });
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
      console.log("chosen Color");
      let color;
      const findIndex = item.words.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        const corrected =
          item.words[findIndex].chosen === item.words[findIndex].correct;
        if (corrected) {
          color = "green--text";
        } else {
          color = "red--text";
        }
      }
      return color;
    },
  },
};
</script>
