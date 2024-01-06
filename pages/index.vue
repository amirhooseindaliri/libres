<template>
  <div id="MainContent">
    <div
      id="content"
      class="container-fluid"
      :style="{ height: 'max-content', marginBottom: '10px' }"
    >
      <div id="questionheader" class="questionheader">
        <div class="col-md-12">
          <div
            class="row"
            v-bind:style="{
              direction: 'ltr',
              padding: 0,
              margin: 0,
              marginTop: '20px',
              display: 'flex',
              flexWrap: 'wrap',
            }"
          >
            <div
              v-for="book in books"
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              style="margin-top: 25px"
            >
              <div :style="{ boxShadow: '0 0 6px 1px grey' }">
                <div
                  class="alert"
                  :style="{
                    background: 'rgb(85, 30, 102)',
                    borderColor: '#bee5eb',
                    display: 'flex',
                  }"
                >
                  <div class="col-md-auto">
                    <img
                      src="https://ftp.lib-res.info/BigBangFiles/BookImage/thumb/gg2.png"
                      :style="{ width: '100px', height: '80px' }"
                    />
                  </div>
                  <div class="col row">
                    <span class="col-md-12" style="color: white">{{
                      book.name
                    }}</span>
                    <span
                      class="col-md-12"
                      :style="{ color: 'white', cursor: 'pointer' }"
                      @click="$router.push(`/Book/resources?bookid=${book.id}`)"
                      >Go to resource and practice
                      <i class="material-icons" style="vertical-align: bottom"
                        >link</i
                      ></span
                    >
                  </div>
                </div>
                <div class="col-md-12" id="135847"></div>
                <div class="col-md-12">
                  <span
                    >You can use the resources in this book and download them,
                    and in the future you can also use the exercises section of
                    this book .</span
                  >
                </div>
                <hr />
                <div class="col-md-12" style="padding-top: 30px">
                  <p
                    :style="{
                      fontSize: '1rem',
                      fontWeight: '600',
                      bottom: '0.75rem',
                      color: 'grey',
                      lineHeight: '1.5',
                      margin: '1rem 0 0',
                      position: 'absolute',
                    }"
                  >
                    Expires November 1th 2024
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              style="margin-top: 25px; text-align: center"
              @click="dialog = true"
            >
              <div
                :style="{
                  boxShadow: '0 0 6px 1px grey',
                  height: '100%',
                  cursor: 'pointer',
                }"
                onclick="addmodal()"
              >
                <div>
                  <i
                    class="material-icons"
                    style="font-size: 80px; padding-top: 10px"
                    >add_circle</i
                  >
                </div>
                <div class="col-md-12">
                  <span style="font-size: 25px">Add access code</span>
                  <p style="font-size: 1rem; font-weight: 600">
                    Add your access code to use practices and resources
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              style="margin-top: 25px; text-align: center"
            >
              <div
                :style="{
                  boxShadow: ' 0 0 6px 1px grey',
                  height: '100%',
                  cursor: 'pointer',
                }"
                @click="dialogGuid = true"
              >
                <div>
                  <i
                    class="material-icons"
                    :style="{
                      fontSize: '80px',
                      paddingTop: '10px',
                    }"
                    >?</i
                  >
                </div>
                <div class="col-md-12">
                  <span style="font-size: 25px">Guide</span>
                  <p style="font-size: 1rem; font-weight: 600">
                    Tips for adding access code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="addmodal"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md modal-dialog-centered" role="document">
        <div class="modal-content">
          <form id="addForm" method="post">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h5 class="modal-title" id="exampleModalLongTitle">
                New Access Code
              </h5>
            </div>
            <div class="modal-body">
              <div class="row" style="direction: ltr">
                <label class="col-md-12 col-12">Enter access code </label>
                <div class="col-md-10 col-10">
                  <input
                    type="text"
                    class="form-control"
                    id="codeInput"
                    name="Code"
                  />
                </div>
                <div class="col-md-2 col-2">
                  <i
                    class="material-icons"
                    style="color: green; font-weight: 900; cursor: pointer"
                    id="checkbtn"
                    onclick="checkAccessCode()"
                    >check</i
                  >
                  <div id="loader" class="loader" style="display: none"></div>
                </div>
                <span
                  class="text-danger field-validation-valid"
                  data-valmsg-for="Code"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8PxkWscGxitIhJp3Lnswwjv9AkBx63eJKT9z-UD3o5cnStAEcyyjcPhArMq3K9I79bEtZig2-20rHWIPyEV6bwGqHhOR-Tcm7bTaw-wh8fXcRWRhGR1zBb031Q5gT3VMOELfjfGQ2WzL8NwNhX7Km_I9MFald6iTTARCNF9XWM4jGO5b7LY0VmLoiUfRb6YjUw"
            />
          </form>
        </div>
      </div>
    </div>
    <div class="modal">
      <v-dialog v-model="dialogGuid" width="auto" origin="center top">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="dialogGuid = false"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h5 class="modal-title" id="exampleModalLongTitle">Guide</h5>
          </div>
          <div class="modal-body">
            <div style="text-align: center">
              <div>
                <img
                  src="./../assets/images/guide.png"
                  class="mt-4"
                  style="height: 100%; width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </v-dialog>
    </div>
    <div class="modal">
      <v-dialog v-model="dialog" width="auto" origin="center top">
        <div class="modal-content">
          <form id="addForm3" method="post">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="dialog = false"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h5 class="modal-title" id="exampleModalLongTitle">Join class</h5>
            </div>
            <div class="modal-body">
              <div class="row" style="direction: ltr">
                <label class="col-md-12 col-12">Please Enter class code </label>
                <div class="col-md-10 col-10">
                  <input
                    type="text"
                    class="form-control"
                    id="joinClassName"
                    data-val="true"
                    data-val-required="The ClassCode field is required."
                    name="ClassCode"
                    v-model="tokenApplay"
                  />
                </div>
                <div class="col-md-2 col-2">
                  <i
                    v-if="tokenApplay.length > 2"
                    class="material-icons"
                    style="color: green; font-weight: 900; cursor: pointer"
                    id="checkbtn3"
                    @click="applyToken()"
                    >check</i
                  >
                  <div id="loader3" class="loader" style="display: none"></div>
                </div>
                <span
                  class="text-danger field-validation-valid"
                  data-valmsg-for="ClassCode"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="CfDJ8PxkWscGxitIhJp3Lnswwjv9AkBx63eJKT9z-UD3o5cnStAEcyyjcPhArMq3K9I79bEtZig2-20rHWIPyEV6bwGqHhOR-Tcm7bTaw-wh8fXcRWRhGR1zBb031Q5gT3VMOELfjfGQ2WzL8NwNhX7Km_I9MFald6iTTARCNF9XWM4jGO5b7LY0VmLoiUfRb6YjUw"
            />
          </form>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { httpRequest } from "./../plugins/axios";
export default {
  name: "IndexPage",
  data() {
    return {
      dialog: false,
      dialogGuid: false,
      books: [],
      tokenApplay: "",
    };
  },
  mounted() {
    this.$vuetify.goTo(0);
    this.getProfile();
    this.getBooks();
  },

  destroyed() {},
  methods: {
    async getProfile() {
      const token = localStorage.getItem("token");
      httpRequest
        .get("/accounts/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {})
        .catch((e) => {
          localStorage.clear();
          this.$router.push("/auth/signin");
        });
    },
    async getBooks() {
      const token = localStorage.getItem("token");
      httpRequest
        .get("/books/?page=1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.books = res.data.results;
        })
        .catch((e) => {});
    },
    async applyToken() {
      const token = localStorage.getItem("token");
      httpRequest
        .post(
          "/books/token/add/apply/",
          {
            token: this.tokenApplay,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          this.dialog = false;
          this.getBooks();
        });
    },
  },
};
</script>
