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
                          <NuxtLink
                            :class="{ active: $route.query.part === item.name }"
                            class="nav-link xss Videos"
                            :to="`/Book/resources?bookid=${$route.query.bookid}&part=${item.name}`"
                            >{{ item.name }}
                          </NuxtLink>
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
    };
  },
  computed: {
    menuItem() {
      if (this.$route.name.search("resources") >= 0) {
        console.log(this.itemsBook, "item books");
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
            `/Book/resources?bookid=${this.$route.query.bookid}&part=${this.itemsBook[0].name}`
          );
          this.itemsPractice = data.practices;
          console.log(this.itemsPractice);
        });
    },
  },
};
</script>
