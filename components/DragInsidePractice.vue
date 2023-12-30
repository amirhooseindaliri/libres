<template>
  <div>
    <div class="col-md-12 mb-3" v-for="(query, index) in queries">
      <div class="row sortcheck brokenoption" id="sortable_11583">
        <draggable
          v-model="queries[index].words[0].chosen"
          @change="onListUpdate"
        >
          <div
            v-for="item in queries[index].words[0].chosen"
            data-id="friend"
            :draggable="true"
            class="col-md-auto BrokenSentenceOption"
          >
            {{ item }}
          </div>
        </draggable>
      </div>
    </div>
    <draggable v-model="list" @change="onListUpdate">
      <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  props: ["data", "checkAnswer", "seeAnswer"],
  components: {
    draggable,
  },
  data() {
    return {
      queries: this.data.queries,
      list: ["Item 1", "Item 2", "Item 3", "Item 4"],
    };
  },
  methods: {
    onListUpdate(event) {
      // Do something with the updated list
      console.log(this.queries);
    },
  },
};
</script>
