<template>
  <div class="text-start">
    <v-dialog v-model="dialog" width="500" origin="center top">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="grayScale5" dark v-bind="attrs" v-on="on">
          Read More
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="text-h5 text-left ltr grayScale5 grayScale0--text justify-space-between"
        >
          <span>Read More</span>
          <v-icon small color="white" @click="dialog = false">
            mdi-close
          </v-icon>
        </v-card-title>
        <v-card-text
          class="pa-4"
          v-html="readMore.text.join(`<br/>`)"
        ></v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ["readMore"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
