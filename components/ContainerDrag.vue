<template>
  <div id="DetailBody" class="col-md-12">
    <div class="row d-flex justify-content-center">
      <template v-for="item in data.queries">
        <div
          class="col-lg-4 col-md-6"
          style="border: 1px solid gray; padding: 0; background-color: #cdf7ee"
        >
          <table style="width: 100%">
            <tbody>
              <tr>
                <td
                  class="alert pr-1 pl-1"
                  style="
                    text-align: center;
                    background-color: white;
                    word-break: break-word;
                    height: 70px;
                  "
                >
                  {{ item.sentence }}
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    class="pr-1 pl-1 txtoption d-flex justify-content-center row"
                    @drop="onDrop($event, item, item.query_id)"
                    @dragenter.prevent
                    @dragover.prevent
                    style="min-height: 200px; margin-top: 10px"
                  >
                    <div
                      v-for="(chose, index) in item.words[0].chosen"
                      :key="index"
                      id="answer'0'"
                      data-id="Chinese"
                      ondrop="drop(event)"
                      draggable="true"
                      ondragstart="drag(event)"
                      class="col-md-auto col-auto"
                      :class="
                        checkAnswer
                          ? item.words[0].correct.includes(chose)
                            ? 'correctAnswer'
                            : 'wrongAnswer'
                          : null
                      "
                      style="
                        background-color: white;
                        position: relative;
                        padding: 0.75rem 0.5rem;
                        margin-bottom: 1rem;
                        margin-right: 10px;
                        margin-left: 10px;
                        border: 1px solid transparent;
                        border-radius: 0.25rem;
                        height: max-content !important;
                      "
                    >
                      <p id="panswer'0'" class="my-0">{{ chose }}</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "checkAnswer", "seeAnswer"],
  methods: {
    onDrop(evt, itemData, query_id) {
      const DragData = evt.dataTransfer.getData("item");
      let newWords = itemData.words[0];
      newWords.chosen = [...newWords.chosen, DragData];
      this.$emit("dropSuccess", {
        query_id,
        newWords: [newWords],
      });
    },
  },
};
</script>
