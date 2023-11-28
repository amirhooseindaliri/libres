<template>
    <div>
        <nav id="sidebar" class="active">
            <ul id="MinimizeMenu" class="list-unstyled components mb-5"
                style="background:#60e7c8;box-shadow:0 .125rem .125rem #888;padding-bottom:4px !important">
                <li class="active" id="ministatebtn"><a id="sidebarCollapse" style="border-bottom:none;cursor:pointer"> <img
                            src="./../assets/images/burger-line.png"> </a></li>
                <li id="largestatebtn" style="display:none;background-color:#60e7c8;padding:8px"><a
                        id="sidebarCollapseMobileMode"
                        style="border-bottom:none;float:right;direction:rtl;width:100%;height:100%;cursor:pointer"> <img
                            src="./../assets/images/burger-line.png"> </a></li>
            </ul>
            <div id="sidebarContent" class="sidebarContentactive">
                <ul class="list-unstyled components mb-5">
                    <li :class="{ MenuActive: $route.name === 'index' }" id="HomeSidebar">
                        <NuxtLink class="Menuitenms" to="/"> <i class="material-icons" style="font-size:40px">home</i> <span
                                style="font-size:14px">
                                Home </span>
                        </NuxtLink>
                    </li>
                    <li id="practicesection" class="precticePart" style="display:none;cursor:pointer"><a class="Menuitenms">
                            <i class="material-icons" style="font-size:37px">check_circle</i> <span style="font-size:14px">
                                Practices</span> </a></li>
                    <li id="resoucesection" class="precticePart" style="display:none;cursor:pointer"><a class="Menuitenms">
                            <i class="material-icons" style="font-size:45px">get_app</i> <span style="font-size:14px">
                                Resources</span>
                        </a></li>
                    <li id="classsection" class="ClassPart" style="display:none;cursor:pointer"><a class="Menuitenms"> <i
                                class="material-icons" style="font-size:45px">class</i> <span style="font-size:14px">
                                Class</span> </a>
                    </li>
                </ul>
                <ul class="components" style="position:fixed;bottom:0;margin-bottom:0">
                    <li :class="{ MenuActive: $route.name === 'Requests' }">
                        <NuxtLink to="/Requests" class="Menuitenms" style="cursor:pointer"> <i class="material-icons"
                                style="font-size:40px">live_help</i> <span style="font-size:14px">
                                Request</span> </NuxtLink>
                    </li>
                    <li :class="{ MenuActive: $route.name === 'Profile' }">
                        <NuxtLink to="Profile" class="Menuitenms" style="cursor:pointer"> <i class="material-icons"
                                style="font-size:40px">assignment_ind</i> <span style="font-size:14px">
                                Profile</span> </NuxtLink>
                    </li>
                    <li><a class="Menuitenms" href="/Logout"> <i class="material-icons"
                                style="font-size:50px">exit_to_app</i>
                            <span style="font-size:14px">sign out</span> </a></li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="z-index:2">
            <div class="container-fluid"><button class="btn btn-dark d-inline-block d-lg-none ml-auto"
                    style="margin-right:auto !important;margin-left:unset !important;display:none !important" type="button"
                    data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <i class="fa fa-bars"></i> </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style="display:flex">
                    <div style="width: 100%;text-align: center;font-size: x-large;font-weight: 800;">{{ $route.name ===
                        'index' ? 'Dashboard' : $route.name }}</div>
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
        console.log(this.$route);
    },

    destroyed() { },
};
</script>