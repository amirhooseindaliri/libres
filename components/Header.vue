<template>
  <v-container class="pt-0">
    <v-toolbar color="black" elevation="0" height="96px">
      <v-row>
        <v-col md="3" cols="12">
          <v-toolbar-title
            class="grayScale1--text"
            :class="$vuetify.breakpoint.mdAndUp ? 'text-left' : 'text-center'"
            ><img class="logo-header" src="/spacex.svg" /></v-toolbar-title
        ></v-col>
        <v-col md="5" cols="12" v-if="$vuetify.breakpoint.mdAndUp">
          <v-toolbar-items
            class="hidden-sm-and-down align-center justify-space-between h-100"
          >
            <v-btn
              max-height="56px"
              height="56px"
              elevation="0"
              v-for="item in menu"
              :key="item.icon"
              :href="item.link"
              link
              class="transparent"
              ><span class="grayScale1--text font-regular-20">{{
                item.title
              }}</span></v-btn
            >
          </v-toolbar-items>
        </v-col>
        <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          md="4"
          cols="12"
          class="d-flex justify-end"
        >
          <v-btn
            max-height="56px"
            height="56px"
            max-width="151px"
            width="151px"
            class="grayScale0 launch-btn ms-auto"
            dark
            v-if="$vuetify.breakpoint.mdAndUp"
            link
            href="https://hpotoken.io"
            target="_blanck"
          >
            <span class="font-medium-16 primary--text">HPO Token</span>
          </v-btn>
        </v-col>
      </v-row>

      <v-menu class="hidden-md-and-up">
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.icon">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { link: "#marketInfo", title: "Market Info" },
        { link: "#Markets", title: "Markets" },
        { link: "#About", title: "About" },
        { link: "#Roadmap", title: "Roadmap" },
        { link: "#FAQ", title: "FAQ" },
        { link: "https://github.com/hippowallet/hippotoken", title: "Github" },
      ],
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>
