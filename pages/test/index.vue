<template>
  <div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="drag-el"
        @dragstart="startDrag($event, item)"
        @drag-end="endDrag(item)"
        draggable
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div class="blue">
        <div
          v-for="item in getList(2)"
          :key="item.id"
          class="drag-el mt-10"
          draggable="true"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 0, title: "A", list: 1 },
        { id: 1, title: "B", list: 1 },
        { id: 2, title: "C", list: 2 },
      ],
    };
  },
  computed: {},
  methods: {
    getList(list) {
      return this.items.filter((item) => item.list === list);
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
    },
    endDrag(item) {},
  },
};
</script>
<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: red;
  padding: 10px;
  min-height: 10px;
}
.drag-el {
  background-color: aquamarine;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
