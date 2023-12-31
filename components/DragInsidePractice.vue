<template>
  <div>
    <div class="col-md-12 mb-3" v-for="(query, index) in queries">
      <div>
        <draggable
          v-model="queries[index].words[0].chosen"
          @change="onListUpdate"
          class="row sortcheck brokenoption"
        >
          <div
            v-for="(item, indexItem) in queries[index].words[0].chosen"
            data-id="friend"
            :draggable="true"
            class="col-md-auto BrokenSentenceOption"
            :class="
              chosenColor(item, indexItem, queries[index].words[0].correct)
            "
          >
            {{ item }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  props: ["data", "checkAnswer", "seeAnswer"],
  components: {
    draggable,
  },
  mounted() {},
  data() {
    return {
      queries: this.data.queries,
      list: ["Item 1", "Item 2", "Item 3", "Item 4"],
    };
  },
  methods: {
    onListUpdate() {
      this.$emit("changeSuccess", this.queries);
    },
    chosenColor(item, indexItem, correctList) {
      if (this.checkAnswer || this.seeAnswer) {
        let className;
        const findIndex = correctList.findIndex((i) => {
          return i === item;
        });
        if (findIndex === indexItem) {
          className = "correctNullSpace";
        } else {
          className = "wrongNullSpace";
        }
        return className;
      } else {
        return "";
      }
    },
  },
};
</script>
