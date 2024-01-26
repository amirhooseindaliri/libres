<template>
  <div>
    <nav id="sidebar" class="active">
      <ul
        id="MinimizeMenu"
        class="list-unstyled components mb-5"
        :style="{
          background: '#60e7c8',
          boxShadow: '0 0.125rem 0.125rem #888',
          paddingBottom: '4px !important',
        }"
      >
        <li class="active" id="ministatebtn">
          <a
            id="sidebarCollapse"
            :style="{
              borderBottom: 'none',
              cursor: 'pointer',
            }"
          >
            <img src="./../assets/images/burger-line.png" />
          </a>
        </li>
        <li
          id="largestatebtn"
          :style="{
            display: 'none',
            backgroundColor: '#60e7c8',
            padding: '8px',
          }"
        >
          <a
            id="sidebarCollapseMobileMode"
            :style="{
              borderBottom: 'none',
              float: 'right',
              direction: 'rtl',
              width: '100%',
              height: '100%',
              cursor: 'pointer',
            }"
          >
            <img src="./../assets/images/burger-line.png" />
          </a>
        </li>
      </ul>
      <div id="sidebarContent" class="sidebarContentactive">
        <ul class="list-unstyled components mb-5">
          <li :class="{ MenuActive: $route.name === 'index' }" id="HomeSidebar">
            <NuxtLink class="Menuitenms" to="/">
              <i class="material-icons" style="font-size: 40px">home</i>
              <span style="font-size: 14px"> Home </span>
            </NuxtLink>
          </li>
          <li
            id="practicesection"
            class="precticePart"
            :class="{ MenuActive: $route.name.search('practices') >= 0 }"
            v-if="showPracticeAndResource"
          >
            <NuxtLink
              class="Menuitenms"
              :to="`/Book/practices?bookid=${$route.query.bookid}`"
            >
              <i class="material-icons" style="font-size: 37px">check_circle</i>
              <span style="font-size: 14px"> Practices</span>
            </NuxtLink>
          </li>
          <li
            v-if="showPracticeAndResource"
            id="resoucesection"
            class="precticePart"
            :class="{
              MenuActive: $route.name.search('resources') >= 0,
            }"
          >
            <NuxtLink
              class="Menuitenms"
              :to="`/Book/resources?bookid=${$route.query.bookid}`"
            >
              <i class="material-icons" style="font-size: 45px">get_app</i>
              <span style="font-size: 14px"> Resources</span>
            </NuxtLink>
          </li>
        </ul>
        <ul
          class="components"
          :style="{
            position: 'fixed',
            bottom: '0',
            marginBottom: '0',
          }"
        >
          <li :class="{ MenuActive: $route.name === 'Requests' }">
            <NuxtLink to="/Requests" class="Menuitenms" style="cursor: pointer">
              <i class="material-icons" style="font-size: 40px">live_help</i>
              <span style="font-size: 14px"> Request</span>
            </NuxtLink>
          </li>
          <li :class="{ MenuActive: $route.name === 'Profile' }">
            <NuxtLink to="Profile" class="Menuitenms" style="cursor: pointer">
              <i class="material-icons" style="font-size: 40px"
                >assignment_ind</i
              >
              <span style="font-size: 14px"> Profile</span>
            </NuxtLink>
          </li>
          <li>
            <a class="Menuitenms" @click="signOut($event)">
              <i class="material-icons" style="font-size: 50px">exit_to_app</i>
              <span style="font-size: 14px">sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="z-index: 2"
    >
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
          <div class="w-100 text-center font-weight-black">
            {{ $route.name === "index" ? "Dashboard" : $route.name }}
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { httpRequest } from "./../plugins/axios";
export default {
  name: "IndexPage",
  data() {
    return {
      showPracticeAndResource: false,
    };
  },
  mounted() {
    this.$vuetify.goTo(0);
  },
  methods: {
    signOut(e) {
      e.preventDefault();
      // const token = localStorage.getItem("token");
      // httpRequest
      //   .post(
      //     "accounts/token/logout/",
      //     {},
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   )
      // .then((res) => {

      // });
      localStorage.clear();
      this.$router.replace({ path: "/auth/signin" });
      this.$swal({
        icon: "success",
        title: "logout was successful",
      });
    },
  },

  destroyed() {},
  watch: {
    $route(to, from) {
      this.showPracticeAndResource = this.$route.path.search("Book") > 0;
    },
  },
};
</script>
