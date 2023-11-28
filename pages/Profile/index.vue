<template>
    <div id="MainContent">
        <div class="row col-md-12" style="direction:ltr">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header cardheaderstyle" style="direction:ltr;margin:0">
                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <h4 class="card-title" style="color:white;margin:10px">Edit Profile</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <form id="EditProfileForm" method="post">
                            <div class="col-lg-12 row"><input type="hidden" class="form-control" autocomplete="off"
                                    value="22cdc9ee-bd3e-4633-cd45-08db4df87214" data-val="true"
                                    data-val-required="The UserId field is required." id="UserId" name="UserId">
                                <div class="col-md-6 col-12"><label style="font-weight:600;font-size:16px">First
                                        name</label> <input type="text" class="form-control" autocomplete="off"
                                        value="Aibeik" data-val="true"
                                        data-val-maxlength="The field Name must be a string or array type with a maximum length of '200'."
                                        data-val-maxlength-max="200" data-val-required="The Name field is required."
                                        id="Name" maxlength="200" name="Name"> <span
                                        class="text-danger field-validation-valid" data-valmsg-for="Name"
                                        data-valmsg-replace="true"></span></div>
                                <div class="col-md-6 col-12"><label style="font-weight:600;font-size:16px">Last name</label>
                                    <input type="text" class="form-control" autocomplete="off" value="Sirin" data-val="true"
                                        data-val-maxlength="The field Family must be a string or array type with a maximum length of '200'."
                                        data-val-maxlength-max="200" data-val-required="The Family field is required."
                                        id="Family" maxlength="200" name="Family"> <span
                                        class="text-danger field-validation-valid" data-valmsg-for="Family"
                                        data-valmsg-replace="true"></span>
                                </div>
                                <div class="col-md-6 col-12"><label style="font-weight:600;font-size:16px">User name</label>
                                    <input type="text" class="form-control" autocomplete="off" value="saban.fg367@gmail.com"
                                        id="UserName" name="UserName"> <span class="text-danger field-validation-valid"
                                        data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                                </div>
                                <div class="col-md-6 col-12"><label style="font-weight:600;font-size:16px">Email</label>
                                    <input type="text" class="form-control" autocomplete="off" value="saban.fg367@gmail.com"
                                        id="Email" name="Email"> <span class="text-danger field-validation-valid"
                                        data-valmsg-for="Email" data-valmsg-replace="true"></span>
                                </div>
                                <div class="col-md-6 col-12"><label style="font-weight:600;font-size:16px">Birth
                                        date</label> <input type="date" class="form-control" value="1998-02-04"
                                        autocomplete="off" data-val="true"
                                        data-val-required="The BirthDate field is required." id="BirthDate"
                                        name="BirthDate"> <span class="text-danger field-validation-valid"
                                        data-valmsg-for="BirthDate" data-valmsg-replace="true"></span></div>
                                <div class="col-md-12" style="margin-top:10px;text-align:right"><button type="button"
                                        class="btn btn-success" onclick="ChangeProfile()">Save Changes</button></div>
                            </div><input name="__RequestVerificationToken" type="hidden"
                                value="CfDJ8PxkWscGxitIhJp3Lnswwjuygp_UTExmNzPoxcfZy-JCBmUCm8NHRLjUBV5s9Mg1kxZtqNYUH-995J7tafpUMJiWR_OCH9H07cxtGbdGh1StxtrIS9hMa2W8wxuqW8UeJJrulEv05NLQ_3xWVX8TzuMDYsdo7pyeNee7z-InTyHDwQzfWwArpsYzivlTtmHlXQ">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header cardheaderstyle" style="direction:ltr;margin:0">
                        <div class="row">
                            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <h4 class="card-title" style="color:white;margin:10px">Edit password</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="ShowUser" class="col-lg-12">
                            <form id="changepass" class="col-lg-12" style="margin-top:30px" method="post"><input
                                    type="hidden" class="form-control" value="22cdc9ee-bd3e-4633-cd45-08db4df87214"
                                    id="UserId" name="UserId">
                                <div class="col-md-12"><label style="font-weight:600;font-size:16px">Old password</label>
                                    <input type="password" class="form-control" autocomplete="off" data-val="true"
                                        data-val-required="The Password field is required." id="Password" name="Password">
                                    <span class="text-danger field-validation-valid" data-valmsg-for="Password"
                                        data-valmsg-replace="true"></span>
                                </div>
                                <div class="col-md-12"><label style="font-weight:600;font-size:16px">New password</label>
                                    <input type="password" class="form-control" autocomplete="off" data-val="true"
                                        data-val-maxlength="The field NewPassword must be a string or array type with a maximum length of '200'."
                                        data-val-maxlength-max="200"
                                        data-val-minlength="The field NewPassword must be a string or array type with a minimum length of '6'."
                                        data-val-minlength-min="6" data-val-regex="Password must be entered in Latin"
                                        data-val-regex-pattern="^[a-zA-Z0-9$@$!%*?&amp;#^-_. +]+$"
                                        data-val-required="The NewPassword field is required." id="NewPassword"
                                        maxlength="200" name="NewPassword"> <span class="text-danger field-validation-valid"
                                        data-valmsg-for="NewPassword" data-valmsg-replace="true"></span>
                                </div>
                                <div class="col-md-12"><label style="font-weight:600;font-size:16px">Confirm new
                                        password</label> <input type="password" class="form-control" autocomplete="off"
                                        data-val="true" data-val-equalto="'ConfirmPassword' and 'NewPassword' do not match."
                                        data-val-equalto-other="*.NewPassword" id="ConfirmPassword" name="ConfirmPassword">
                                    <span class="text-danger field-validation-valid" data-valmsg-for="ConfirmPassword"
                                        data-valmsg-replace="true"></span>
                                </div>
                                <div class="col-md-12" style="margin-top:10px;text-align:right"><button type="button"
                                        class="btn btn-success" onclick="ChangePass()">Save Changes</button></div><input
                                    name="__RequestVerificationToken" type="hidden"
                                    value="CfDJ8PxkWscGxitIhJp3Lnswwjuygp_UTExmNzPoxcfZy-JCBmUCm8NHRLjUBV5s9Mg1kxZtqNYUH-995J7tafpUMJiWR_OCH9H07cxtGbdGh1StxtrIS9hMa2W8wxuqW8UeJJrulEv05NLQ_3xWVX8TzuMDYsdo7pyeNee7z-InTyHDwQzfWwArpsYzivlTtmHlXQ">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>