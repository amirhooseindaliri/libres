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
          v-for="content in listContentSection.content_data"
        >
          <contents-component
            v-if="content.content_type !== 'Practice'"
            :content="content"
          />
          <div
            class="col-md-12"
            v-else-if="content.content_type === 'Practice'"
          >
            <div class="row">
              <div class="col-md-12">
                <nuxt-link
                  target="_blank"
                  :to="`/StartPractice?id=${content.id}`"
                >
                  <div class="row align-center" style="margin-right: -40px">
                    <div
                      class="col-md-auto col-auto pr-2"
                      style="color: #333437"
                    >
                      <i class="material-icons" style="font-size: 25px"
                        >check_circle</i
                      >
                    </div>
                    <div class="col-md-auto col-auto" style="padding: 5px 0">
                      {{ content.name }}
                    </div>
                    <div
                      class="col-md-auto col-auto cat-green py-0 px-1 ml-3 mt-1"
                    >
                      {{ content.tag }}
                    </div>

                    <div
                      class="LasttryStyle col-md col pt-1"
                      :style="{
                        textAlign: 'right',
                        color: 'darkgray',
                        fontSize: '16px',
                      }"
                    >
                      <span class="pr-1">{{ content.score }}%</span>

                      <div style="font-size: small; color: beige; color: black">
                        last try
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </div>
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
