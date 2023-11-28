<template>
    <div id="MainContent">
        <link href="/Template/TableStyle/jquery.dataTables.css" rel="stylesheet">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12" style="padding:0;margin:0">
                    <div class="card pb-4" style="padding:0;margin:0;min-height:calc(100vh - 3rem)">
                        <div class="card-body" style="padding:0">
                            <div class="col-lg-12" style="direction:ltr">
                                <div class="col-md-12" style="padding:0;margin:0">
                                    <div class="row rowdirectionpractice">
                                        <div class="col-md-2 sidebarXHide sidebarY mt-10" id="xyz"
                                            style="background-color:#f8f9fa;height:100%;border-radius:5px;display:block">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist"
                                                style="padding:5px !important;margin-left:-17px;margin-right:-17px">
                                                <li class="nav-item" style="width:100%">
                                                    <NuxtLink :class="{ active: $route.name === 'Book-videos' }"
                                                        class="nav-link xss Videos " to="/Book/videos">Videos
                                                    </NuxtLink>
                                                </li>
                                                <li class="nav-item" style="width:100%">
                                                    <NuxtLink :class="{ active: $route.name === 'Book-StudentsBook' }"
                                                        class="nav-link xss StudentsBook" to="/Book/StudentsBook">
                                                        Student's
                                                        Book </NuxtLink>
                                                </li>
                                                <li class="nav-item" style="width:100%">
                                                    <NuxtLink :class="{ active: $route.name === 'Book-Workbook' }"
                                                        to="/Book/Workbook" class="nav-link xss Workbook" data-toggle="tab">
                                                        Workbook</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="col-md-7" id="main">
                                            <div class="col-md-12" style="margin-top:20px"><a class="showbtn" id="show"
                                                    style="color:white;cursor:pointer" onclick="openNav()"><i
                                                        class="material-icons" style="color:#e73883">menu</i></a> <a
                                                    class="hidebtn" id="hide" style="color:white;cursor:pointer"
                                                    onclick="closeNav()"><i class="material-icons"
                                                        style="color:#e73883">menu</i></a></div>
                                            <hr style="background-color:darkcyan">
                                            <NuxtChild />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>