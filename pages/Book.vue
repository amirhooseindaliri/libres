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
                            :class="{ active: $route.name === item.routeName }"
                            class="nav-link xss Videos"
                            :to="item.link"
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
import { computed } from "vue";

export default {
  data() {
    return {
      itemsBook: [
        {
          name: "Videos",
          link: `/Book/videos?bookid=${this.$route.query.bookid}`,
          routeName: "Book-videos",
        },
        {
          name: "Student's Book",
          link: `/Book/StudentsBook?bookid=${this.$route.query.bookid}`,
          routeName: "Book-StudentsBook",
        },
        {
          name: "Workbook",
          link: `/Book/Workbook?bookid=${this.$route.query.bookid}`,
          routeName: "Book-Workbook",
        },
      ],
      itemsPractice: [
        {
          name: "Unit 0 Get Started",
          link: `/Book/Practice?bookid=${this.$route.query.bookid}&sectionId=1`,
          routeName: "Book-practice",
        },
      ],
      isOpenNav: true,
    };
  },
  computed: {
    menuItem() {
      if (this.$route.name.search("Practice") >= 0) {
        return this.itemsPractice;
      } else {
        return this.itemsBook;
      }
    },
  },
  methods: {
    openNav() {
      this.isOpenNav = !this.isOpenNav;
    },
  },
};
</script>
