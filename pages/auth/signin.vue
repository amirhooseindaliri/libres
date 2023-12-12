<template>
    <div class="page-content">
        <div class="form-v1-content">
            <div class="wizard-form">
                <div class="form-register">
                    <div id="form-total" role="application" class="wizard clearfix vertical">
                        <div class="steps clearfix">
                            <ul role="tablist">
                                <li role="tab" aria-disabled="false" class="first d current" aria-selected="true"><nuxt-link
                                        id="form-total-t-0" to="/auth/signin" aria-controls="form-total-p-0"><span
                                            class="current-info audible"> </span>
                                        <div class="title">
                                            <p class="step-icon"><span>01</span></p><span class="step-text">SignIn</span>
                                        </div>
                                    </nuxt-link></li>
                                <li role="tab" aria-disabled="false" class="d" aria-selected="false"><nuxt-link
                                        id="form-total-t-1" to="/auth/signup" aria-controls="form-total-p-1">
                                        <div class="title">
                                            <p class="step-icon"><span>02</span></p><span class="step-text">SignUp</span>
                                        </div>
                                    </nuxt-link></li>
                                <li role="tab" aria-disabled="false" class="last d" aria-selected="false"><nuxt-link
                                        id="form-total-t-2" to="/auth/forgotPassword" aria-controls="form-total-p-2">
                                        <div class="title">
                                            <p class="step-icon"><span>03</span></p><span class="step-text">Forgot
                                                Password</span>
                                        </div>
                                    </nuxt-link></li>
                            </ul>
                        </div>
                        <div class="content clearfix">
                            <h2 id="form-total-h-0" tabindex="-1" class="title current">
                                <p class="step-icon"><span>01</span></p><span class="step-text">SignIn</span>
                            </h2>
                            <section id="form-total-p-0" role="tabpanel" aria-labelledby="form-total-h-0"
                                class="body current" aria-hidden="false" style="">
                                <form method="post" id="loginForm" action="/Login">
                                    <div class="inner">
                                        <div class="wizard-header">
                                            <h3 class="heading">SignIn</h3>
                                            <p>Please fill your username and password to enter the website.</p>
                                            <div style="color:red"></div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-holder form-holder-2">
                                                <v-text-field dir="ltr" label="UserName" outlined></v-text-field>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-holder form-holder-2">
                                                <v-text-field dir="ltr" label="Password" outlined></v-text-field>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="g-recaptcha"
                                                data-sitekey="6LecLb8ZAAAAAGCdP49306l8LPRxhfD4zMBzYaGi">
                                                <div style="width: 304px; height: 78px;">
                                                    <div><iframe title="reCAPTCHA" width="304" height="78"
                                                            role="presentation" name="a-bkgk6vmfcv0a" frameborder="0"
                                                            scrolling="no"
                                                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LecLb8ZAAAAAGCdP49306l8LPRxhfD4zMBzYaGi&amp;co=aHR0cHM6Ly9saWItcmVzLmluZm86NDQz&amp;hl=en&amp;v=cwQvQhsy4_nYdnSDY4u7O5_B&amp;size=normal&amp;cb=v4d01hoiqiev"></iframe>
                                                    </div><textarea id="g-recaptcha-response" name="g-recaptcha-response"
                                                        class="g-recaptcha-response"
                                                        style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                                                </div><iframe style="display: none;"></iframe>
                                            </div>
                                        </div>

                                        <div class="form-row" style="width:100%;direction:rtl;font-size:20px"><button
                                                class="SubmitLoginbtn" onclick="loginForm()" type="submit">
                                                <v-icon small color="white">
                                                    mdi-arrow-right
                                                </v-icon>
                                                SignIn
                                            </button></div>
                                    </div><input name="__RequestVerificationToken" type="hidden"
                                        value="CfDJ8HQ-v2_Jj2FIvaYTpcia1pDwj87PRqxnWhN5V28tof4H-PM_Ap7c4tWOXG8PRdCo7hOl9wdbvQ632ePa-49msqG5UY3EX47vgWjwrGSd2YdC64q5OPzS4Q4N7kvIzAkqnuLBIj-Nr9QKQVNnJitVwqE">
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'authLayout',
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