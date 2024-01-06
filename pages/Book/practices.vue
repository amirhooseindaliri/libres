<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="(item, i) in 5" :key="i">
      <v-expansion-panel-header
        expand-icon="$BottomArrow"
        class="primary--text"
      >
        <span class="d-flex justify-content-start align-items-center">
          <i class="material-icons me-4" style="color: #e73883">toc</i>
          Item
        </span>
      </v-expansion-panel-header>
      <v-divider></v-divider>
      <v-expansion-panel-content>
        <div class="col-md-12" style="padding: 0">
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
                  Introduction
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
