<template>
  <div
    id="ExtralistButton"
    class="closeQuestionlist"
    :style="extralist === true ? { display: 'block' } : { display: 'none' }"
  >
    <div style="height: 100%">
      <a
        id="sidebarCollapse"
        :style="{
          float: 'right',
          padding: '15px',
          color: 'white',
          width: 'auto',
          display: 'flex',
          cursor: 'pointer',
        }"
        @click="$emit('extralistEmit', false)"
      >
        <img
          src="./../assets/images/close.png"
          style="display: block; color: white; direction: rtl"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  layout: "practiceLayout",
  props: ["extralist"],
  methods: {},
};
</script>
