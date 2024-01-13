<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, i) in sections" :key="i">
      <v-expansion-panel-header
        expand-icon="$BottomArrow"
        class="primary--text"
        @click="openSection(item.id)"
      >
        <span class="d-flex justify-content-start align-items-center">
          <i class="material-icons me-4" style="color: #e73883">toc</i>
          {{ item.name }}
        </span>
      </v-expansion-panel-header>
      <v-divider></v-divider>
      <v-expansion-panel-content v-if="!loadingOpenSection">
        <div
          class="col-md-12"
          style="padding: 0"
          v-for="content in listContentSection"
        >
          <div class="row align-items-center">
            <div class="col-md-10">
              <div class="row">
                <div
                  class="col-md-auto col-auto"
                  style="padding: 0; color: #e73883"
                >
                  <i class="material-icons">videocam</i>
                </div>
                <div class="col-md-auto col-auto ml-2" style="padding: 5px 0">
                  {{ content.name }}
                </div>
              </div>
            </div>
            <div class="col-md-2" style="text-align: right">
              <a
                download="Introduction"
                href="https://ftp.lib-res.info/BigBangFiles/ResourceFile/29/c14a96bd53244f16983cffb1da82b7d8.m4v"
                target="_blank"
                ><i class="material-icons" style="color: #e73883">get_app</i></a
              >
            </div>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import { httpRequest } from "./../../plugins/axios";
export default {
  name: "IndexPage",
  data() {
    return {
      sections: [],
      loadingOpenSection: false,
      listContentSection: [],
    };
  },
  mounted() {},

  destroyed() {},
  methods: {
    async getSections() {
      const token = localStorage.getItem("token");
      httpRequest
        .get(
          `/books/book-part-section/book-sections/${this.$route.query.bookid}/${this.$route.query.part}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          const data = JSON.parse(JSON.stringify(res.data));
          this.sections = data;
        });
    },
    async openSection(sectionId) {
      const token = localStorage.getItem("token");
      this.loadingOpenSection = true;
      httpRequest
        .get(
          `/books/book-part-section/book-contents/${this.$route.query.bookid}/${this.$route.query.part}/${sectionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          const data = JSON.parse(JSON.stringify(res.data));
          this.listContentSection = data;
          this.loadingOpenSection = false;
        });
    },
  },
  watch: {
    $route(to, from) {
      this.getSections();
    },
  },
};
</script>
