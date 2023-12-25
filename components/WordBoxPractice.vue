<template>
  <div>
    <div
      :class="data.words_box_class"
      class="alert alert-dark"
      v-if="data.words_box_type === 'text' && mode !== 'drag_box'"
    >
      <div id="itemsBox_11495" class="row itemsBox align-items-center">
        <template v-for="item in data.words_box">
          <div
            id="0Spain11495"
            class="col-md-auto col-auto"
            style="border-radius: 10px; z-index: 1"
          >
            <p
              class="pDragClass mb-0"
              :draggable="data.words_box_draggable && checkAnswer === false"
              @dragstart="startDrag($event, item)"
              data-id="Spain_11495"
              id="option_0Spain11495"
            >
              {{ item }}
            </p>
          </div>
          <span>{{ data.words_box_delimiter }}</span>
        </template>
      </div>
    </div>
    <div
      v-if="mode === 'drag_box'"
      id="TopBox"
      class="row d-flex justify-content-center SplitOptionsbgColor m-1"
    >
      <template v-for="item in data.words_box">
        <div
          id="answer'0'"
          data-id="Chinese"
          :draggable="data.words_box_draggable && checkAnswer === false"
          @dragstart="startDrag($event, item)"
          class="col-md-auto col-auto"
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
          <p id="panswer'0'" class="mb-0">{{ item }}</p>
        </div>
      </template>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  props: ["data", "checkAnswer", "mode"],
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("item", item);
    },
    endDrag(item) {},
  },
};
</script>
