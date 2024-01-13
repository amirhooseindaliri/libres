<template>
  <div class="col-md-12" id="files_860" style="">
    <div class="col-md-12" style="padding: 0">
      <div class="row">
        <div class="col-md-10">
          <div class="row">
            <div
              class="col-md-auto col-auto"
              style="padding: 0; color: #e73883"
            >
              <i class="material-icons">{{ calcContent.icon }}</i>
            </div>
            <div class="col-md-auto col-auto ml-2" style="padding: 5px 0">
              {{ calcContent.name }}
            </div>
          </div>
        </div>
        <div class="col-md-2" style="text-align: right">
          <a download="Introduction" :href="calcContent.link" target="_blank"
            ><i class="material-icons" style="color: #e73883">get_app</i></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"],
  methods: {},
  computed: {
    calcContent() {
      switch (this.content.content_type) {
        case "Video":
          return {
            icon: "videocam",
            link: "http://google.com",
            name: this.content.name,
            score: this.content.score,
            tag: this.content.tag,
          };
        case "Pdf":
          return {
            icon: "picture_as_pdf",
            link: "http://google.com",
            name: this.content.name,
            score: this.content.score,
            tag: this.content.tag,
          };
        case "Audio":
          return {
            icon: "audiotrack",
            link: "http://google.com",
            name: this.content.name,
            score: this.content.score,
            tag: this.content.tag,
          };

        default:
          break;
      }
    },
  },
};
</script>
