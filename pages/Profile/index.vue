<template>
  <div id="MainContent" class="userProfile">
    <div class="row col-md-12" style="direction: ltr">
      <div class="col-md-8">
        <div class="card">
          <div
            class="card-header cardheaderstyle"
            style="direction: ltr; margin: 0"
          >
            <div class="row">
              <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <h4 class="card-title" style="color: white; margin: 10px">
                  Edit Profile
                </h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <v-form ref="formProfile">
              <div class="col-lg-12 row">
                <div class="col-md-6 col-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >First name</label
                  >
                  <v-text-field
                    class="px-2"
                    dir="ltr"
                    outlined
                    v-model="profileInfo.profile.first_name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </div>
                <div class="col-md-6 col-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >Last name</label
                  >
                  <v-text-field
                    class="px-2"
                    dir="ltr"
                    outlined
                    v-model="profileInfo.profile.last_name"
                    :rules="[rules.required]"
                  ></v-text-field>
                </div>
                <div class="col-md-6 col-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >User name</label
                  >
                  <v-text-field
                    class="px-2"
                    dir="ltr"
                    outlined
                    v-model="profileInfo.username"
                    :rules="[rules.required]"
                  ></v-text-field>
                </div>
                <div class="col-md-6 col-12">
                  <label style="font-weight: 600; font-size: 16px">Email</label>
                  <v-text-field
                    dir="ltr"
                    outlined
                    v-model="profileInfo.email"
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </div>
                <div class="col-md-6 col-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >Birth date</label
                  >
                  <DatePicker
                    @changeDate="(val) => (profileInfo.profile.birthday = val)"
                  />
                </div>
                <div
                  class="col-md-12"
                  style="margin-top: 10px; text-align: right"
                >
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="updateProfile()"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8PxkWscGxitIhJp3Lnswwjuygp_UTExmNzPoxcfZy-JCBmUCm8NHRLjUBV5s9Mg1kxZtqNYUH-995J7tafpUMJiWR_OCH9H07cxtGbdGh1StxtrIS9hMa2W8wxuqW8UeJJrulEv05NLQ_3xWVX8TzuMDYsdo7pyeNee7z-InTyHDwQzfWwArpsYzivlTtmHlXQ"
              />
            </v-form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div
            class="card-header cardheaderstyle"
            style="direction: ltr; margin: 0"
          >
            <div class="row">
              <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <h4 class="card-title" style="color: white; margin: 10px">
                  Edit password
                </h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div id="ShowUser" class="col-lg-12">
              <v-form
                ref="changePassword"
                class="col-lg-12"
                style="margin-top: 30px"
              >
                <div class="col-md-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >Old password</label
                  >
                  <v-text-field
                    class="px-2"
                    dir="ltr"
                    outlined
                    type="password"
                    :rules="[
                      rules.required,
                      rules.safePassword,
                      rules.safePassword2,
                      rules.safePassword3,
                      rules.safePassword4,
                    ]"
                    v-model="changePasswordBody.old_password"
                  ></v-text-field>
                </div>
                <div class="col-md-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >New password</label
                  >
                  <v-text-field
                    class="px-2"
                    dir="ltr"
                    outlined
                    v-model="changePasswordBody.new_password"
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
                <div class="col-md-12">
                  <label style="font-weight: 600; font-size: 16px"
                    >Confirm new password</label
                  >
                  <v-text-field
                    class="px-2"
                    dir="ltr"
                    outlined
                    v-model="changePasswordBody.new_password1"
                    type="password"
                    :rules="[rules.required, rules.password]"
                  ></v-text-field>
                </div>
                <div
                  class="col-md-12"
                  style="margin-top: 10px; text-align: right"
                >
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="updatePassword()"
                  >
                    Save Changes
                  </button>
                </div>
                <input
                  name="__RequestVerificationToken"
                  type="hidden"
                  value="CfDJ8PxkWscGxitIhJp3Lnswwjuygp_UTExmNzPoxcfZy-JCBmUCm8NHRLjUBV5s9Mg1kxZtqNYUH-995J7tafpUMJiWR_OCH9H07cxtGbdGh1StxtrIS9hMa2W8wxuqW8UeJJrulEv05NLQ_3xWVX8TzuMDYsdo7pyeNee7z-InTyHDwQzfWwArpsYzivlTtmHlXQ"
                />
              </v-form>
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
  name: "IndexPage",
  data() {
    return {
      profileInfo: {
        email: "",
        username: "",
        profile: {
          first_name: "",
          last_name: "",
          phone_number: "",
          birthday: "",
          gender: "",
        },
      },
      changePasswordBody: {
        old_password: "",
        new_password: "",
        new_password1: "",
      },
      rules: {
        required: (value) => !!value || "Required.",
        password: (value) =>
          value === this.changePasswordBody.new_password ||
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
            pattern.test(value) || "Ensure string has three lowercase letters."
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
  mounted() {
    this.$vuetify.goTo(0);
    this.getProfile();
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
        .then((res) => {
          this.profileInfo = res.data;
        })
        .catch((e) => {
          localStorage.clear();
          this.$router.push("/auth/signin");
        });
    },
    async updateProfile() {
      const token = localStorage.getItem("token");
      if (this.$refs.formProfile.validate()) {
        httpRequest
          .put("/accounts/profile/", this.profileInfo, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            this.$swal({
              icon: "success",
              title: "Update Profile was successful",
            });
          })
          .catch((e) => {
            this.$swal({
              icon: "error",
              title: "Try Again",
            });
          });
      }
    },
    async updatePassword() {
      const token = localStorage.getItem("token");
      if (this.$refs.changePassword.validate()) {
        httpRequest
          .put("/accounts/change-password/", this.changePasswordBody, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            this.$swal({
              icon: "success",
              title: "change password was successful",
            });
          })
          .catch((e) => {
            this.$swal({
              icon: "error",
              title: "Try Again",
            });
          });
      }
    },
  },
};
</script>
