<template>
  <div id="MainContent" v-if="true">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12" style="padding: 0; margin: 0">
          <div
            class="card pb-4"
            :style="{
              padding: 0,
              margin: 0,
              minHeight: 'calc(100vh - 3rem)',
            }"
          >
            <div class="card-body" style="padding: 0">
              <div class="col-lg-12" style="direction: ltr">
                <div class="col-md-12" style="padding: 0; margin: 0">
                  <div class="row rowdirectionpractice">
                    <div
                      class="col-md-2 sidebarXHide sidebarY mt-10 h-100 grayScale2 d-block"
                      :class="
                        isOpenNav
                          ? 'sidebarXHide sidebarY'
                          : 'sidebarX sidebarYHide'
                      "
                      id="xyz"
                    >
                      <ul
                        class="nav nav-tabs p-1 mx-n4"
                        id="myTab"
                        role="tablist"
                      >
                        <li
                          v-for="(item, index) in menuItem"
                          class="nav-item"
                          style="width: 100%"
                          :key="index"
                        >
                          <a
                            :class="{
                              active:
                                Number($route.query.part) === Number(item.id),
                            }"
                            class="nav-link xss Videos"
                            @click="
                              generateLink($event, $route.query.bookid, item.id)
                            "
                            >{{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div
                      :class="isOpenNav ? 'hidemain' : 'showmain'"
                      class="col-md-7"
                      id="main"
                    >
                      <div class="col-md-12" style="margin-top: 20px">
                        <a
                          class="hidebtn"
                          id="hide"
                          style="color: white; cursor: pointer"
                          @click="openNav()"
                          ><i class="material-icons" style="color: #e73883"
                            >menu</i
                          ></a
                        >
                      </div>
                      <hr style="background-color: darkcyan" />
                      <NuxtChild />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>
<script>
import { httpRequest } from "../plugins/axios";

export default {
  data() {
    return {
      itemsBook: [],
      itemsPractice: [],
      isOpenNav: true,
      clickResources: false,
    };
  },
  computed: {
    menuItem() {
      if (this.$route.name.search("resources") >= 0) {
        return this.itemsBook;
      } else {
        return this.itemsPractice;
      }
    },
  },
  mounted() {
    this.getParts();
  },
  methods: {
    openNav() {
      this.isOpenNav = !this.isOpenNav;
    },
    async getParts() {
      const token = localStorage.getItem("token");
      httpRequest
        .get(
          `/books/book-part-section/book-parts/${this.$route.query.bookid}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          const data = JSON.parse(JSON.stringify(res.data));
          this.itemsBook = data.resources;
          this.$router.push(
            `/Book/resources?bookid=${this.$route.query.bookid}&part=${this.itemsBook[0].id}`
          );
          this.itemsPractice = data.practices;
        });
    },
    generateLink(event, bookid, partId) {
      event.preventDefault();
      this.$router.push(
        `/Book/${
          this.$route.path.search("resources") > 0 ? "resources" : "practices"
        }?bookid=${bookid}&part=${partId}`
      );
    },
  },
};
</script>
