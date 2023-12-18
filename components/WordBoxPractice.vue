<template>
  <div>
    <div :class="data.className" class="alert alert-dark">
      <div id="itemsBox_11495" class="row itemsBox align-items-center">
        <template v-for="item in data.contents">
          <div
            id="0Spain11495"
            class="col-md-auto col-auto"
            style="border-radius: 10px; z-index: 1"
          >
            <p
              class="pDragClass mb-0"
              :draggable="data.draggable"
              data-id="Spain_11495"
              @drag-start="drag"
              id="option_0Spain11495"
            >
              {{ item }}
            </p>
          </div>
          <span>{{ data.delimiter }}</span>
        </template>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    drag(ev) {
      console.log("ssssssssss");
      // ev.dataTransfer.setData("text", ev.target.id);
    },
  },
};
</script>
