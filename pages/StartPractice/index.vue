<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="z-index: 2"
    >
      <div class="container-fluid">
        <button
          class="btn btn-dark d-inline-block d-lg-none ml-auto"
          :style="{
            marginRight: 'auto !important',
            marginLeft: 'unset !important',
            display: 'none !important',
          }"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          style="display: flex"
        >
          <div>
            <a
              id="OpenQuestionlist"
              style="cursor: pointer"
              :style="extralist ? { display: 'none' } : {}"
              @click="extralist = true"
            >
              Content
              <img
                style="padding-right: 5px"
                src="./../../assets/images/Open.png"
            /></a>
          </div>
          <div style="margin: auto; direction: rtl; flex: none" class="row">
            <div
              onclick="NextQuestion()"
              class="NextQbtn col-md-auto col-auto"
              style="color: #e73883"
            >
              <img
                src="./../../assets/images/Next.png"
                width="18px"
                style="margin-left: 5px"
              />next
            </div>
            <div
              onclick="PreviewsQuestion()"
              class="NextQbtn col-md-auto col-auto"
              style="color: #e73883"
            >
              previous<img
                src="./../../assets/images/prevoius.png"
                width="18px"
                style="margin-right: 5px"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div id="MainContent">
      <nav
        id="extraListId"
        class="extraList"
        :style="extralist === false ? { display: 'none' } : {}"
      >
        <div style="margin: 7px">
          <div>
            <div class="ExamName"><div>Practice</div></div>
            <div class="pb-5" id="questionExtraList">
              <div
                v-for="(item, index) in listExtra"
                :key="index"
                class="questionWhiteBoxList mb-2"
              >
                <div
                  @click="selectedItemExtra = item.id"
                  class="questioncluster"
                  style="text-align: left"
                  data-id="0.1"
                >
                  <span> 0.{{ item.id }}</span>
                  <i class="material-icons" style="float: right"
                    >arrow_drop_down</i
                  >
                </div>
                <div
                  id="cat_0.1"
                  :style="
                    selectedItemExtra === item.id
                      ? { borderTop: '0.0625rem solid #dcdcdc' }
                      : { display: 'none' }
                  "
                >
                  <div
                    v-for="(child, index) in item.chlidren"
                    :key="index"
                    style="min-height: 44px"
                    class="sidestyle ActiveQuestion"
                    id="Qid_5580"
                  >
                    <div
                      class="row my-0"
                      :style="{
                        minHeight: '44px',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }"
                    >
                      <div class="col-md-12 col-12 my-4">
                        <div
                          class="col-md-auto col-auto row"
                          style="padding: 5px 0; direction: ltr"
                        >
                          <a
                            ><div class="row">
                              <div
                                class="col-md-auto col-auto"
                                style="padding: 5px"
                              >
                                <i
                                  class="material-icons"
                                  :style="{
                                    fontSize: '22px',
                                    verticalAlign: 'text-bottom',
                                  }"
                                  >check_circle</i
                                >
                              </div>
                              <div class="col-md col" style="padding: 5px">
                                {{ child.name }}
                              </div>
                            </div></a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="ExtralistButton"
        class="closeQuestionlist"
        :style="extralist === true ? { display: 'block' } : { display: 'none' }"
      >
        <div style="height: 100%">
          <a
            id="sidebarCollapse"
            style="
              float: right;
              padding: 15px;
              color: white;
              width: auto;
              display: flex;
              cursor: pointer;
            "
            @click="extralist = false"
          >
            <img
              src="../../assets/images/close.png"
              style="display: block; color: white; direction: rtl"
            />
          </a>
        </div>
      </div>
      <nav class="questiontitle">
        <div class="container-fluid">
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style="display: flex; direction: rtl"
          >
            <div style="margin: auto">
              <span href="#" id="Qsubject" style="padding: 0.5rem 1rem"
                >Exercise 1</span
              >
            </div>
          </div>
        </div>
      </nav>
      <div class="wrapper d-flex align-items-stretch">
        <div
          id="content"
          class="p-4 p-md-5 container"
          :style="{
            height: 'max-content',
            marginBottom: '10px',
            paddingBottom: ' 0 !important',
          }"
        >
          <div
            id="questionheader"
            class="questionheader"
            style="height: 80vh !important"
          >
            <input type="hidden" value="1" id="PageIndex" />

            <div class="col-md-12 mb-4">
              <h6 style="color: black" id="QTextContent">
                <p>
                  <strong
                    >Complete the sentences with the words in the box.</strong
                  >
                </p>
              </h6>
            </div>
            <div
              class="col-md-12"
              style="
                max-height: 64vh;
                max-height: auto;
                overflow-y: auto;
                margin-top: 15px;
                border-radius: 5px;
                box-shadow: 0px 0px 5px 2px gray;
                border-radius: 4px;
                padding: 15px;
                overflow-y: auto;
                margin-bottom: 10px;
              "
            >
              <div id="questionDetail" style="pointer-events: all">
                <link href="/css/jquery-ui.css" rel="stylesheet" />

                <div class="col-md-12 alert alert-dark">
                  <div
                    id="itemsBox_11495"
                    class="row itemsBox align-items-center"
                  >
                    <div
                      id="0Spain11495"
                      ondrop="drop(event)"
                      ondragover="allowDrop(event)"
                      class="col-md-auto col-auto"
                      style="border-radius: 10px; z-index: 1"
                    >
                      <p
                        class="pDragClass mb-0"
                        draggable="true"
                        data-id="Spain_11495"
                        ondragstart="drag(event)"
                        id="option_0Spain11495"
                      >
                        Spain
                      </p>
                    </div>
                    <span>|</span>
                    <div
                      id="0Spain11495"
                      ondrop="drop(event)"
                      ondragover="allowDrop(event)"
                      class="col-md-auto col-auto"
                      style="border-radius: 10px; z-index: 1"
                    >
                      <p
                        class="pDragClass mb-0"
                        draggable="true"
                        data-id="Spain_11495"
                        ondragstart="drag(event)"
                        id="option_0Spain11495"
                      >
                        Spain
                      </p>
                    </div>
                    <span>|</span>
                    <div
                      id="0Spain11495"
                      ondrop="drop(event)"
                      ondragover="allowDrop(event)"
                      class="col-md-auto col-auto"
                      style="border-radius: 10px; z-index: 1"
                    >
                      <p
                        class="pDragClass mb-0"
                        draggable="true"
                        data-id="Spain_11495"
                        ondragstart="drag(event)"
                        id="option_0Spain11495"
                      >
                        Spain
                      </p>
                    </div>
                    <span>|</span>
                    <div
                      id="0Spain11495"
                      ondrop="drop(event)"
                      ondragover="allowDrop(event)"
                      class="col-md-auto col-auto"
                      style="border-radius: 10px; z-index: 1"
                    >
                      <p
                        class="pDragClass mb-0"
                        draggable="true"
                        data-id="Spain_11495"
                        ondragstart="drag(event)"
                        id="option_0Spain11495"
                      >
                        Spain
                      </p>
                    </div>
                    <span>|</span>
                    <div
                      id="0Spain11495"
                      ondrop="drop(event)"
                      ondragover="allowDrop(event)"
                      class="col-md-auto col-auto"
                      style="border-radius: 10px; z-index: 1"
                    >
                      <p
                        class="pDragClass mb-0"
                        draggable="true"
                        data-id="Spain_11495"
                        ondragstart="drag(event)"
                        id="option_0Spain11495"
                      >
                        Spain
                      </p>
                    </div>
                    <span>|</span>
                    <div
                      id="0Spain11495"
                      ondrop="drop(event)"
                      ondragover="allowDrop(event)"
                      class="col-md-auto col-auto"
                      style="border-radius: 10px; z-index: 1"
                    >
                      <p
                        class="pDragClass mb-0"
                        draggable="true"
                        data-id="Spain_11495"
                        ondragstart="drag(event)"
                        id="option_0Spain11495"
                      >
                        Spain
                      </p>
                    </div>
                    <span>|</span>
                  </div>
                </div>
                <br />
                <div id="DetailBody" class="col-md-12">
                  <div class="row">
                    <div class="col-md-auto col-auto circlenumber">1</div>
                    <div
                      id="detailX_11495"
                      class="col-md col text-left detailX"
                    >
                      <h6>
                        <table
                          cellpadding="1"
                          cellspacing="1"
                          style="width: 500px"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  alt=""
                                  src="https://ftp.lib-res.info/BigBangFiles/PracticeCkEditorImage/29/1d1d4922cbf346a1b40575bfd0e4b5c8.JPG"
                                />
                              </td>
                              <td>
                                <img
                                  alt=""
                                  src="https://ftp.lib-res.info/BigBangFiles/PracticeCkEditorImage/29/4be037e5c1ab40268ee2f7c2ee25ea65.JPG"
                                />
                              </td>
                              <td>
                                <img
                                  alt=""
                                  src="https://ftp.lib-res.info/BigBangFiles/PracticeCkEditorImage/29/5c490c26bd6845e0911865bd5b0368d9.JPG"
                                />
                              </td>
                              <td>
                                <img
                                  alt=""
                                  src="https://ftp.lib-res.info/BigBangFiles/PracticeCkEditorImage/29/35a5435f44774606bb848ad66c632956.JPG"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p>&nbsp;</p>

                        <p>
                          1-Hi, I'm Lucas&nbsp; &nbsp;. I'm
                          from&nbsp;&nbsp;<span
                            id="droppable0"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable0txt"
                            style="display: none"
                          />&nbsp;.
                        </p>

                        <p>&nbsp;</p>

                        <p>
                          2-&nbsp;Hello. I'm&nbsp;<span
                            id="droppable1"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable1txt"
                            style="display: none"
                          />&nbsp;. I've got a&nbsp;<span
                            id="droppable2"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable2txt"
                            style="display: none"
                          />
                        </p>

                        <p>&nbsp;</p>

                        <p>
                          3-&nbsp;Hi. I'm&nbsp;<span
                            id="droppable3"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable3txt"
                            style="display: none"
                          />&nbsp;. My favourite colour is&nbsp;<span
                            id="droppable4"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable4txt"
                            style="display: none"
                          />
                        </p>

                        <p>&nbsp;</p>

                        <p>
                          4-&nbsp;Hello. I'm&nbsp;<span
                            id="droppable5"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable5txt"
                            style="display: none"
                          />. I've got a lot of
                          <span
                            id="droppable6"
                            class="alert alert-dark customewidth nulloption"
                          ></span
                          ><input
                            type="text"
                            class="formstyle textoption"
                            id="droppable6txt"
                            style="display: none"
                          />
                        </p>

                        <p>&nbsp;</p>
                      </h6>
                    </div>
                  </div>
                </div>
                <form method="post" id="__AjaxAntiForgeryForm">
                  <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="CfDJ8HQ-v2_Jj2FIvaYTpcia1pDZP3D_1ah-q8JhL61VzjAbjI3JWu93p_PFTWBagnAxfmyTjf7uu5cKXaD9udSlL_br-mRYlDx2_wROjJos_1A2uaufBzckB2tozJkDM_Nd-T2aTuymKGgXGytKDsc_JODxuQNKIW8CnQgruB0k6mgFA-DqactybZ3saWx8fze1aw"
                  />
                </form>
                <input type="hidden" id="StudentAnswerId" value="26210" />
              </div>
            </div>

            <div
              class="col-md-12 pb-2 d-none d-sm-block"
              style="position: fixed; bottom: 0; background: white; left: 0"
            >
              <div class="row" style="direction: rtl">
                <div class="col-md-auto col-12 text-right">
                  <a
                    id="Regbtn"
                    class="Regbtn btn btn-pink col-12 grayScale0--text"
                    >Check answer</a
                  >
                </div>
                <div class="col-md-auto col-12 text-right">
                  <a
                    id="TryAgain"
                    class="TryAgain btn btn-dark col-12"
                    style="color: white; display: none"
                    >Try again</a
                  >
                </div>
                <div class="col-md-auto col-12 text-dark">
                  <a
                    id="SeeAnswer"
                    class="SeeAnswer btn btn-pink col-12"
                    style="color: white; display: none"
                    >See Answer</a
                  >
                </div>
              </div>
            </div>
            <div
              class="col-md-12 pb-2 d-md-none d-xl-none d-lg-none pt-2"
              style="
                position: fixed;
                bottom: 0;
                background: hsla(0, 0%, 100%, 0.8);
                left: 0;
                height: 3rem;
              "
            >
              <div class="row" style="direction: rtl">
                <div class="col-auto text-right">
                  <a
                    id="Regbtn"
                    class="Regbtn btn btn-pink col-12"
                    style="color: white; padding: 0.3rem 0.5rem !important"
                    ><i
                      class="material-icons"
                      style="font-size: 20px; vertical-align: text-bottom"
                      >check_circle</i
                    ></a
                  >
                </div>
                <div class="col-auto text-right" style="padding: 0">
                  <a
                    id="TryAgain"
                    class="TryAgain btn btn-dark col-12"
                    style="
                      color: white;
                      display: none;
                      padding: 0.3rem 0.5rem !important;
                    "
                    ><i
                      class="material-icons"
                      style="font-size: 20px; vertical-align: text-bottom"
                      >autorenew</i
                    ></a
                  >
                </div>
                <div class="col-auto text-dark">
                  <a
                    id="SeeAnswer"
                    class="SeeAnswer btn btn-pink col-12"
                    style="
                      color: white;
                      display: none;
                      padding: 0.3rem 0.5rem !important;
                    "
                    ><i
                      class="material-icons"
                      style="font-size: 20px; vertical-align: text-bottom"
                      >visibility</i
                    ></a
                  >
                </div>
              </div>
            </div>

            <!-- Read more Modal Begin-->
            <div
              class="modal fade"
              id="ReadmoreModalModal"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div
                class="modal-dialog cascading-modal modal-lg"
                role="document"
              >
                <div class="card">
                  <div class="modal-content">
                    <div
                      class="card-header"
                      style="background-color: rgb(105 105 105)"
                    >
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                      <h4 id="titleP" class="card-title" style="color: white">
                        Read more
                      </h4>
                    </div>
                    <div id="body" class="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Read more Modal End-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "practiceLayout",
  data() {
    return {
      extralist: false,
      listExtra: [
        { id: 0, chlidren: [{ name: "Exercise 1" }, { name: "Exercise 2" }] },
        { id: 1, chlidren: [{ name: "Exercise 1" }, { name: "Exercise 2" }] },
      ],
      selectedItemExtra: 0,
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
  },
};
</script>
