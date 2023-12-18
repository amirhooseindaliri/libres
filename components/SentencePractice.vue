<template>
  <div class="col-md-12 mb-4">
    <h6 :style="data.style" id="QTextContent">
      <p>
        <strong>{{ data.contents.join(" ") }}</strong>
      </p>
    </h6>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
