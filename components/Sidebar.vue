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
            :class="{ MenuActive: $route.name.search('Practice') >= 0 }"
          >
            <NuxtLink
              class="Menuitenms"
              :to="`/book/Practice?bookid=${$route.query.bookid}`"
            >
              <i class="material-icons" style="font-size: 37px">check_circle</i>
              <span style="font-size: 14px"> Practices</span>
            </NuxtLink>
          </li>
          <li
            id="resoucesection"
            class="precticePart"
            :class="{
              MenuActive:
                $route.name.search('videos') >= 0 ||
                $route.name.search('StudentsBook') >= 0 ||
                $route.name.search('Workbook') >= 0,
            }"
          >
            <NuxtLink
              class="Menuitenms"
              :to="`/book/videos?bookid=${$route.query.bookid}`"
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
            <a class="Menuitenms" href="/Logout">
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
export default {
  name: "IndexPage",
  data() {
    return {};
  },
  mounted() {
    this.$vuetify.goTo(0);
  },

  destroyed() {},
};
</script>
