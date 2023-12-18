<template>
  <nav class="questiontitle">
    <div class="container-fluid">
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="display: flex; direction: rtl"
      >
        <div style="margin: auto">
          <span href="#" id="Qsubject" style="padding: 0.5rem 1rem">{{
            ecercise.exercize_name
          }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["ecercise"],
};
</script>
