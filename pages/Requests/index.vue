<template>
  <div id="MainContent" class="requests-page">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header cardheaderstyle">
          <div class="row">
            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <h4 class="card-title" style="color: white; margin: 10px">
                Request List
              </h4>
            </div>
            <div
              class="col-lg-5 col-md-5 col-sm-12 col-xs-12"
              style="text-align: right"
            >
              <button
                class="btn btn-pink"
                @click="dialogRequest = true"
                style="margin: 10px"
              >
                New request
              </button>
            </div>
          </div>
        </div>
        <div class="card-body ltr">
          <div id="ShowUser" class="col-lg-12">
            <v-card>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon small class="mr-2" @click="seeTicket(item.id)">
                    mdi-eye
                  </v-icon>
                </template>
              </v-data-table>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialogRequest" width="600" origin="center top">
      <div class="modal-content">
        <form id="addticketForm" method="post">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <h5 class="modal-title" id="exampleModalLongTitle">New request</h5>
          </div>
          <div class="modal-body">
            <div class="col-md-12" style="direction: ltr">
              <label class="col-md-12 col-12" style="padding: 0">Title</label>
              <input
                type="text"
                class="form-control"
                data-val="true"
                data-val-required="Please fill this field"
                id="Title"
                name="Title"
                v-model="ticketBody.subject"
              />
              <span
                class="text-danger field-validation-valid"
                data-valmsg-for="Title"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div class="col-md-12" style="direction: ltr">
              <label class="col-md-12 col-12" style="padding: 0"
                >Request text</label
              >
              <textarea
                class="form-control"
                data-val="true"
                data-val-required="Please fill this field"
                id="Body"
                name="Body"
                v-model="ticketBody.text"
              ></textarea>
              <span
                class="text-danger field-validation-valid"
                data-valmsg-for="Body"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div class="col-auto">
              <label for="FileUpload1" style="cursor: pointer">
                <i class="material-icons" style="color: black"
                  >attach_file</i
                ></label
              >
              <input
                type="file"
                id="FileUpload1"
                style="display: none"
                accept="image/png, image/jpeg"
                name="File"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="dialogRequest = false"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="createTicket">
              Save changes
            </button>
          </div>
          <input
            name="__RequestVerificationToken"
            type="hidden"
            value="CfDJ8PxkWscGxitIhJp3LnswwjsYDZq3k_fZljc729VnQdCaUsr6EPfUUYDf7dcMMubTE6w-_tfU-xfVy6kOg0_CJS0YyUnmO_CD9kpHOex_OjMKayc5mObl0ayG2RcJkyyLy8qP7tHAEtXIXItQ536cYuMnW7XnWmf-irfMPLETQl6-zeZ4ODB8FsvieAr6wA7ulg"
          />
        </form>
      </div>
    </v-dialog>
    <v-dialog v-model="dialogTicket" width="500" origin="center top">
      <div class="modal-content" v-if="ticket">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="dialogTicket = false"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h5 class="modal-title" id="exampleModalLongTitle">Ticket Detail</h5>
        </div>
        <div class="modal-body">
          <div
            class="col-md-12"
            style="
              box-shadow: 1px 5px 13px 0 grey;
              padding: 15px;
              border-radius: 5px;
              padding-bottom: 0;
            "
          >
            <div
              class="col-md-auto alert alert-info"
              style="font-weight: 500; color: black"
            >
              <label>User Request</label>
            </div>
            <div class="col-md-12" style="color: black; margin-bottom: 15px">
              <label style="font-weight: 900; text-decoration: underline"
                >Request Title</label
              >
              <div class="col-md-12" id="RequestTitle">
                {{ ticket.subject }}
              </div>
              <label style="font-weight: 900; text-decoration: underline"
                >Request Text</label
              >
              <div class="col-md-12" id="RequestText">
                {{ ticket.text }}
              </div>
            </div>
            <!-- <div
              class="row"
              style="direction: rtl; border-top: 1px solid; margin: 0"
            >
              <div
                class="col-md-auto col-auto"
                style="color: blue; padding: 3px"
                id="RequestTime"
              ></div>
              <div
                class="col-md-auto col-auto"
                style="color: blue; padding: 3px"
                id="RequestDate"
              ></div>
            </div> -->
          </div>
          <!-- <div id="replySection" class="row" style="direction: ltr; margin: 0">
            <div class="col-md-auto d-md-block d-none" style="margin-top: 20px">
              <div
                class="card-avatar"
                style="text-align: center; border-radius: 50%; overflow: hidden"
              >
                <a href="javascript:" tabindex="0">
                  <img
                    class="img"
                    src="./../../assets/images/avatar.png"
                    style="width: 100px; height: 100px"
                  />
                </a>
              </div>
              <div style="text-align: center">Admin</div>
            </div>
            <div
              class="col-md col-12"
              style="
                box-shadow: 1px 5px 13px 0 grey;
                padding: 15px;
                border-radius: 5px;
                padding-bottom: 0;
                margin-top: 20px;
              "
            >
              <div
                class="col-md-auto alert alert-success"
                style="font-weight: 500; color: black"
              >
                <label>Reply Request</label>
              </div>
              <div class="col-md-12" style="color: black; margin-bottom: 15px">
                <label style="font-weight: 900; text-decoration: underline"
                  >Reply Text</label
                >
                <div class="col-md-12" id="ReplyText"></div>
              </div>
              <div
                class="row"
                style="direction: rtl; border-top: 1px solid; margin: 0"
              >
                <div
                  class="col-md-auto col-auto"
                  style="color: blue; padding: 3px"
                  id="replytime"
                ></div>
                <div
                  class="col-md-auto col-auto"
                  style="color: blue; padding: 3px"
                  id="replydate"
                ></div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import { httpRequest } from "../../plugins/axios";

export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Title",
          value: "subject",
        },
        { text: "Date", value: "created_at" },
        { text: "Time", value: "time" },
        { text: "Read/UnRead", value: "Read" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      dialogRequest: false,
      dialogTicket: false,
      ticket: null,
      ticketBody: {
        subject: "",
        text: "",
        image: "",
      },
    };
  },
  mounted() {
    this.getTickets();
  },
  methods: {
    async getTickets() {
      const token = localStorage.getItem("token");
      httpRequest
        .get(`/tickets/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.desserts = res.data.results.map((item) => {
            return {
              subject: item.subject,
              created_at: item.created_at.split("T")[0],
              time:
                item.created_at.split("T")[1].split(":")[0] +
                ":" +
                item.created_at.split("T")[1].split(":")[1],
              Read: "Read",
              id: item.id,
            };
          });
        });
    },
    async seeTicket(id) {
      const token = localStorage.getItem("token");
      httpRequest
        .get(`/tickets/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.ticket = res.data;
          this.dialogTicket = true;
        });
    },
    async createTicket(id) {
      const token = localStorage.getItem("token");
      httpRequest
        .post(`/tickets/`, this.ticketBody, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.getTickets();
          this.dialogRequest = false;
        });
    },
  },
};
</script>
