<template>
  <div class="page-content">
    <div class="form-v1-content">
      <div class="wizard-form">
        <div class="form-register">
          <div
            id="form-total"
            role="application"
            class="wizard clearfix vertical"
          >
            <div class="steps clearfix">
              <ul role="tablist">
                <li
                  role="tab"
                  aria-disabled="false"
                  class="first d"
                  aria-selected="false"
                >
                  <nuxt-link
                    id="form-total-t-0"
                    to="/auth/signin"
                    aria-controls="form-total-p-0"
                    ><span class="current-info audible"> </span>
                    <div class="title">
                      <p class="step-icon"><span>01</span></p>
                      <span class="step-text">SignIn</span>
                    </div>
                  </nuxt-link>
                </li>
                <li
                  role="tab"
                  aria-disabled="false"
                  class="d current"
                  aria-selected="true"
                >
                  <nuxt-link
                    id="form-total-t-1"
                    to="/auth/signup"
                    aria-controls="form-total-p-1"
                  >
                    <div class="title">
                      <p class="step-icon"><span>02</span></p>
                      <span class="step-text">SignUp</span>
                    </div>
                  </nuxt-link>
                </li>
                <li
                  role="tab"
                  aria-disabled="false"
                  class="last d"
                  aria-selected="false"
                >
                  <nuxt-link
                    id="form-total-t-2"
                    to="/auth/forgotPassword"
                    aria-controls="form-total-p-2"
                  >
                    <div class="title">
                      <p class="step-icon"><span>03</span></p>
                      <span class="step-text">Forgot Password</span>
                    </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="content clearfix">
              <h2 id="form-total-h-0" tabindex="-1" class="title current">
                <p class="step-icon"><span>01</span></p>
                <span class="step-text">SignIn</span>
              </h2>
              <section
                id="form-total-p-0"
                role="tabpanel"
                aria-labelledby="form-total-h-0"
                class="body current"
                aria-hidden="false"
                style=""
              >
                <v-form ref="form">
                  <div class="inner">
                    <div class="wizard-header">
                      <h3 class="heading">SignUp</h3>
                      <p>
                        Please enter your information to register on the site.
                      </p>
                      <div style="color: red"></div>
                    </div>
                    <div class="form-row">
                      <div
                        class="form-holder form-holder-2 d-flex justify-md-space-between align-center"
                      >
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="First Name"
                          outlined
                          v-model="bodyRequest.profile.first_name"
                          :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="Last Name"
                          outlined
                          v-model="bodyRequest.profile.last_name"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="form-row">
                      <div
                        class="form-holder form-holder-2 d-flex justify-md-space-between align-center"
                      >
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="Your Email"
                          outlined
                          v-model="bodyRequest.email"
                          :rules="[rules.required, rules.email]"
                        ></v-text-field>
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="Your User Name"
                          outlined
                          v-model="bodyRequest.username"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="form-row">
                      <div
                        class="form-holder form-holder-2 d-flex justify-md-space-between align-center"
                      >
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="Confirm Password"
                          outlined
                          v-model="bodyRequest.password1"
                          :rules="[rules.required, rules.password]"
                        ></v-text-field>
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="Password"
                          outlined
                          v-model="bodyRequest.password"
                          :rules="[rules.required]"
                        ></v-text-field>
                      </div>
                    </div>
                    <div class="form-row">
                      <div
                        class="form-holder form-holder-2 d-flex justify-md-space-between align-center"
                      >
                        <DatePicker
                          @changeDate="
                            (val) => (bodyRequest.profile.birthday = val)
                          "
                        />
                      </div>
                    </div>
                    <div
                      class="form-row"
                      style="width: 100%; direction: rtl; font-size: 20px"
                    >
                      <button
                        class="SubmitLoginbtn"
                        @click="accountRegister($event)"
                      >
                        <v-icon small color="white"> mdi-arrow-right </v-icon>
                        SignUp
                      </button>
                    </div>
                  </div>
                </v-form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { httpRequest } from "./../../plugins/axios";
export default {
  layout: "authLayout",
  data() {
    return {
      bodyRequest: {
        email: "",
        username: "",
        password: "",
        password1: "",
        profile: {
          first_name: "",
          last_name: "",
          phone_number: "",
          birthday: "",
          gender: "",
        },
      },
      rules: {
        required: (value) => !!value || "Required.",
        password: (value) =>
          value === this.bodyRequest.password ||
          "It does not match the original password",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    async accountRegister(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        const { data } = await httpRequest.post(
          "/accounts/register",
          this.bodyRequest
        );
      }
    },
  },
};
</script>
