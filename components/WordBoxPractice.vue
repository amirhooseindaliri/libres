<template>
  <div>
    <div
      :class="data.words_box_class"
      class="alert alert-dark"
      v-if="data.words_box_type === 'text'"
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
    <br />
  </div>
</template>
<script>
export default {
  props: ["data", "checkAnswer"],
  methods: {
    startDrag(evt, item) {
      console.log(item);
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("item", item);
    },
    endDrag(item) {
      console.log("end drag = ", item);
    },
  },
};
</script>
