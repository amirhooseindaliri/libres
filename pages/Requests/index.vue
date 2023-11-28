<template>
    <div id="MainContent" class="requests-page">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header cardheaderstyle">
                    <div class="row">
                        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <h4 class="card-title" style="color:white;margin:10px">Request List</h4>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12" style="text-align:right"><button
                                class="btn btn-pink" onclick="AddModel()" style="margin:10px">New request</button></div>
                    </div>
                </div>
                <div class="card-body">
                    <div id="ShowUser" class="col-lg-12">
                        <div class="table-responsive" style="direction:ltr;padding:10px">
                            <div id="myTable_wrapper" class="dataTables_wrapper no-footer">
                                <div class="dataTables_length" id="myTable_length"><label>Show <select name="myTable_length"
                                            aria-controls="myTable" class="">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select> entries</label></div>
                                <div id="myTable_filter" class="dataTables_filter"><label>Search:<input type="search"
                                            class="search-input" placeholder="" aria-controls="myTable"></label></div>
                                <table id="myTable" class="table dataTable no-footer" role="grid"
                                    aria-describedby="myTable_info">
                                    <thead class="text-primary">
                                        <tr role="row">
                                            <th class="sorting_asc" tabindex="0" aria-controls="myTable" rowspan="1"
                                                colspan="1" aria-sort="ascending"
                                                aria-label="Title: activate to sort column descending"
                                                style="width: 264.344px;">Title</th>
                                            <th class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1"
                                                aria-label="Date: activate to sort column ascending"
                                                style="width: 283.359px;">Date</th>
                                            <th class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1"
                                                aria-label="Time: activate to sort column ascending"
                                                style="width: 290.344px;">Time</th>
                                            <th class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1"
                                                aria-label="Read/Unread: activate to sort column ascending"
                                                style="width: 569.938px;">Read/Unread</th>
                                            <th class="sorting" tabindex="0" aria-controls="myTable" rowspan="1" colspan="1"
                                                aria-label=": activate to sort column ascending" style="width: 130.016px;">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd">
                                            <td valign="top" colspan="5" class="dataTables_empty">No data available in table
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="dataTables_info" id="myTable_info" role="status" aria-live="polite">Showing 0 to
                                    0 of 0 entries</div>
                                <div class="dataTables_paginate paging_simple_numbers" id="myTable_paginate"><a
                                        class="paginate_button previous disabled" aria-controls="myTable" data-dt-idx="0"
                                        tabindex="-1" id="myTable_previous">Previous</a><span></span><a
                                        class="paginate_button next disabled" aria-controls="myTable" data-dt-idx="1"
                                        tabindex="-1" id="myTable_next">Next</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addmodal" role="dialog" aria-labelledby="exampleModalCenterTitle" style="display: none;"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <form id="addticketForm" method="post" onsubmit="SaveTickets()">
                        <div class="modal-header"><button type="button" class="close" data-dismiss="modal"
                                aria-label="Close"> <span aria-hidden="true">×</span> </button>
                            <h5 class="modal-title" id="exampleModalLongTitle">New ticket</h5>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12" style="direction:ltr"><label class="col-md-12 col-12"
                                    style="padding:0">Title</label> <input type="text" class="form-control" data-val="true"
                                    data-val-required="Please fill this field" id="Title" name="Title"> <span
                                    class="text-danger field-validation-valid" data-valmsg-for="Title"
                                    data-valmsg-replace="true"></span></div>
                            <div class="col-md-12" style="direction:ltr"><label class="col-md-12 col-12"
                                    style="padding:0">Request text</label> <textarea class="form-control" data-val="true"
                                    data-val-required="Please fill this field" id="Body" name="Body"></textarea> <span
                                    class="text-danger field-validation-valid" data-valmsg-for="Body"
                                    data-valmsg-replace="true"></span></div>
                            <div class="col-auto"><label class="col-md-12 col-12" style="padding:0">Card Photo</label>
                                <input type="file" id="FileUpload1" accept="image/png, image/jpeg" name="File">
                            </div>
                        </div>
                        <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                data-dismiss="modal">Close</button> <button type="submit" class="btn btn-primary">Save
                                changes</button></div><input name="__RequestVerificationToken" type="hidden"
                            value="CfDJ8PxkWscGxitIhJp3LnswwjsYDZq3k_fZljc729VnQdCaUsr6EPfUUYDf7dcMMubTE6w-_tfU-xfVy6kOg0_CJS0YyUnmO_CD9kpHOex_OjMKayc5mObl0ayG2RcJkyyLy8qP7tHAEtXIXItQ536cYuMnW7XnWmf-irfMPLETQl6-zeZ4ODB8FsvieAr6wA7ulg">
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="addmodal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <form id="addticketForm" method="post">
                        <div class="modal-header"><button type="button" class="close" data-dismiss="modal"
                                aria-label="Close"> <span aria-hidden="true">×</span> </button>
                            <h5 class="modal-title" id="exampleModalLongTitle">New request</h5>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12" style="direction:ltr"><label class="col-md-12 col-12"
                                    style="padding:0">Title</label> <input type="text" class="form-control" data-val="true"
                                    data-val-required="Please fill this field" id="Title" name="Title"> <span
                                    class="text-danger field-validation-valid" data-valmsg-for="Title"
                                    data-valmsg-replace="true"></span></div>
                            <div class="col-md-12" style="direction:ltr"><label class="col-md-12 col-12"
                                    style="padding:0">Request text</label> <textarea class="form-control" data-val="true"
                                    data-val-required="Please fill this field" id="Body" name="Body"></textarea> <span
                                    class="text-danger field-validation-valid" data-valmsg-for="Body"
                                    data-valmsg-replace="true"></span></div>
                            <div class="col-auto"><label for="FileUpload1" style="cursor:pointer"> <i class="material-icons"
                                        style="color:black">attach_file</i></label> <input type="file" id="FileUpload1"
                                    style="display:none" accept="image/png, image/jpeg" name="File"></div>
                        </div>
                        <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary"
                                onclick="SaveTickets()">Save changes</button></div><input name="__RequestVerificationToken"
                            type="hidden"
                            value="CfDJ8PxkWscGxitIhJp3LnswwjsYDZq3k_fZljc729VnQdCaUsr6EPfUUYDf7dcMMubTE6w-_tfU-xfVy6kOg0_CJS0YyUnmO_CD9kpHOex_OjMKayc5mObl0ayG2RcJkyyLy8qP7tHAEtXIXItQ536cYuMnW7XnWmf-irfMPLETQl6-zeZ4ODB8FsvieAr6wA7ulg">
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade" id="EditModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span> </button>
                        <h5 class="modal-title" id="exampleModalLongTitle">Ticket Detail</h5>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12"
                            style="box-shadow:1px 5px 13px 0 grey;padding:15px;border-radius:5px;padding-bottom:0">
                            <div class="col-md-auto alert alert-info" style="font-weight:500;color:black"><label>User
                                    Request</label></div>
                            <div class="col-md-12" style="color:black;margin-bottom:15px"><label
                                    style="font-weight:900;text-decoration:underline">Request Title</label>
                                <div class="col-md-12" id="RequestTitle"></div><label
                                    style="font-weight:900;text-decoration:underline">Request Text</label>
                                <div class="col-md-12" id="RequestText"></div>
                            </div>
                            <div class="row" style="direction:rtl;border-top:1px solid;margin:0">
                                <div class="col-md-auto col-auto" style="color:blue;padding:3px" id="RequestTime"></div>
                                <div class="col-md-auto col-auto" style="color:blue;padding:3px" id="RequestDate"></div>
                            </div>
                        </div>
                        <div id="replySection" class="row" style="direction:ltr;margin:0">
                            <div class="col-md-auto d-md-block d-none" style="margin-top:20px">
                                <div class="card-avatar" style="text-align:center;border-radius:50%;overflow:hidden"><a
                                        href="javascript:" tabindex="0"> <img class="img"
                                            src="./../../assets/images/avatar.png" style="width:100px;height:100px"> </a>
                                </div>
                                <div style="text-align:center">Admin</div>
                            </div>
                            <div class="col-md col-12"
                                style="box-shadow:1px 5px 13px 0 grey;padding:15px;border-radius:5px;padding-bottom:0;margin-top:20px">
                                <div class="col-md-auto alert alert-success" style="font-weight:500;color:black">
                                    <label>Reply Request</label>
                                </div>
                                <div class="col-md-12" style="color:black;margin-bottom:15px"><label
                                        style="font-weight:900;text-decoration:underline">Reply Text</label>
                                    <div class="col-md-12" id="ReplyText"></div>
                                </div>
                                <div class="row" style="direction:rtl;border-top:1px solid;margin:0">
                                    <div class="col-md-auto col-auto" style="color:blue;padding:3px" id="replytime"></div>
                                    <div class="col-md-auto col-auto" style="color:blue;padding:3px" id="replydate"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>