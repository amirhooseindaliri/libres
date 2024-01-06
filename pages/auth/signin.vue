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
                  class="first d current"
                  aria-selected="true"
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
                  class="d"
                  aria-selected="false"
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
                      <h3 class="heading">SignIn</h3>
                      <p>
                        Please fill your username and password to enter the
                        website.
                      </p>
                      <div style="color: red"></div>
                    </div>
                    <div class="form-row">
                      <div class="form-holder form-holder-2">
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
                      <div class="form-holder form-holder-2">
                        <v-text-field
                          class="px-2"
                          dir="ltr"
                          label="Password"
                          outlined
                          v-model="bodyRequest.password"
                          type="password"
                          :rules="[
                            rules.required,
                            rules.safePassword,
                            rules.safePassword2,
                            rules.safePassword3,
                            rules.safePassword4,
                          ]"
                        ></v-text-field>
                      </div>
                    </div>
                    <div
                      class="form-row"
                      style="width: 100%; direction: rtl; font-size: 20px"
                    >
                      <button class="SubmitLoginbtn" @click="loginForm">
                        <v-icon small color="white"> mdi-arrow-right </v-icon>
                        SignIn
                      </button>
                    </div>
                  </div>
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="CfDJ8HQ-v2_Jj2FIvaYTpcia1pDwj87PRqxnWhN5V28tof4H-PM_Ap7c4tWOXG8PRdCo7hOl9wdbvQ632ePa-49msqG5UY3EX47vgWjwrGSd2YdC64q5OPzS4Q4N7kvIzAkqnuLBIj-Nr9QKQVNnJitVwqE"
                  />
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
        username: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        password: (value) =>
          value === this.bodyRequest.password ||
          "It does not match the original password",
        safePassword: (value) => {
          const pattern = /(?=.*[A-Z].*[A-Z])/;
          return (
            pattern.test(value) || "Ensure string has two uppercase letters"
          );
        },
        safePassword2: (value) => {
          const pattern = /(?=.*[!@#$&*])/;
          return (
            pattern.test(value) || "Ensure string has one special case letter."
          );
        },
        safePassword3: (value) => {
          const pattern = /(?=.*[0-9].*[0-9])/;
          return pattern.test(value) || "Ensure string has two digits.";
        },
        safePassword4: (value) => {
          const pattern = /(?=.*[a-z].*[a-z].*[a-z])/;
          return (
            // pattern.test(value) || "Ensure string has three lowercase letters."
            true
          );
        },
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
    async loginForm(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        httpRequest
          .post("/accounts/token/login/", this.bodyRequest)
          .then((res) => {
            localStorage.setItem("token", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            this.$router.replace({ path: "/" });
            this.$swal({
              icon: "success",
              title: "Your login was successful",
            });
          });
      }
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/");
    }
  },
};
</script>
