<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="z-index: 2">
    <div class="container-fluid">
      <button
        class="btn btn-dark d-inline-block d-lg-none ml-auto"
        :style="{
          marginRight: 'auto !important',
          marginLeft: 'unset !important',
          display: 'none !important',
        }"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="display: flex"
      >
        <div>
          <a
            id="OpenQuestionlist"
            style="cursor: pointer"
            :style="extralist ? { display: 'none' } : {}"
            @click="$emit('extralistEmit', true)"
          >
            Content
            <img style="padding-right: 5px" src="./../assets/images/Open.png"
          /></a>
        </div>
        <div style="margin: auto; direction: rtl; flex: none" class="row">
          <div
            onclick="NextQuestion()"
            class="NextQbtn col-md-auto col-auto"
            style="color: #e73883"
          >
            <img
              src="./../assets/images/Next.png"
              width="18px"
              style="margin-left: 5px"
            />next
          </div>
          <div
            onclick="PreviewsQuestion()"
            class="NextQbtn col-md-auto col-auto"
            style="color: #e73883"
          >
            previous<img
              src="./../assets/images/prevoius.png"
              width="18px"
              style="margin-right: 5px"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  layout: "practiceLayout",
  props: ["extralist"],
  methods: {},
};
</script>
