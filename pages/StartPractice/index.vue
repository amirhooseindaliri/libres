<template>
  <div>
    <div v-if="ecercise">
      <NavPractice
        :extralist="extralist"
        @extralistEmit="(e) => (extralist = e)"
      />
      <div id="MainContent">
        <ExtraListPractice :listExtra="listExtra" :extralist="extralist" />
        <ExtralistButtonPractice
          :extralist="extralist"
          @extralistEmit="(e) => (extralist = e)"
        />
        <QuestiontitlePractice
          v-if="ecercise.exercize_name"
          :exercize_name="ecercise.exercize_name"
        />
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
              <SentencePractice
                v-if="ecercise.body.question"
                :question="ecercise.body.question"
              />
              <div
                :style="{
                  maxHeight: '74vh !important',
                  overflowY: 'auto',
                  marginTop: '15px',
                  borderRadius: ' 5px',
                  boxShadow: '0px 0px 5px 2px gray',
                  padding: '15px',
                  marginBottom: '10px',
                }"
                :class="ecercise.body.box_class"
              >
                <div id="questionDetail" style="pointer-events: all">
                  <WordBoxPractice
                    v-if="ecercise.body.words_box"
                    :data="ecercise.body.words_box"
                    :checkAnswer="ecercise.checkAnswer"
                  />
                  <HintPractice
                    v-if="ecercise.body.hint"
                    :data="ecercise.body.hint"
                  />
                  <SentenceBlank
                    v-if="ecercise.body.query.query_type === 'sentence_blank'"
                    :data="ecercise.body.query"
                    @dropSuccess="dropSuccess"
                    :checkAnswer="ecercise.checkAnswer"
                  />
                </div>
              </div>
              <!-- <template v-for="section in ecercise.body">
                <SentencePractice
                  v-if="section.type === 'sentence'"
                  :data="section"
                />
                <BoxModelPractice
                  v-if="section.type === 'box'"
                  :data="section"
                />
              </template> -->

              <div
                class="col-md-12 pb-2 d-none d-sm-block"
                style="position: fixed; bottom: 0; background: white; left: 0"
              >
                <div class="row" style="direction: rtl">
                  <div class="col-md-auto col-12 text-right">
                    <a
                      @click="checkAnswer"
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
                :style="{
                  position: 'fixed',
                  bottom: '0',
                  background: 'hsla(0, 0%, 100%, 0.8)',
                  left: '0',
                  height: '3rem',
                }"
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
              <!-- <div
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
              </div> -->
              <!-- Read more Modal End-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-else />
  </div>
  <!-- <div>
    <div v-if="ecercise">
      <NavPractice
        :extralist="extralist"
        @extralistEmit="(e) => (extralist = e)"
      />
      <div id="MainContent">
        <ExtraListPractice :listExtra="listExtra" :extralist="extralist" />
        <ExtralistButtonPractice
          :extralist="extralist"
          @extralistEmit="(e) => (extralist = e)"
        />
        <QuestiontitlePractice :ecercise="ecercise" />
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
              <template v-for="section in ecercise.body">
                <SentencePractice
                  v-if="section.type === 'sentence'"
                  :data="section"
                />
                <BoxModelPractice
                  v-if="section.type === 'box'"
                  :data="section"
                />
              </template>

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
                :style="{
                  position: 'fixed',
                  bottom: '0',
                  background: 'hsla(0, 0%, 100%, 0.8)',
                  left: '0',
                  height: '3rem',
                }"
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-else />
  </div> -->
</template>
<script>
import JsonEcerciseOne from "./../../utiles/Jsons/exercise1.json";
import ModeDragBlank from "./../../utiles/Jsons/ModeDragBlank.json";
export default {
  layout: "practiceLayout",
  data() {
    return {
      extralist: false,
      listExtra: [
        { id: 0, chlidren: [{ name: "Exercise 1" }, { name: "Exercise 2" }] },
        { id: 1, chlidren: [{ name: "Exercise 1" }, { name: "Exercise 2" }] },
      ],
      ecercise: null,
    };
  },
  mounted() {
    this.ecercise = ModeDragBlank;
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    dropSuccess(data) {
      const findIndex = this.ecercise.body.query.queries.findIndex(
        (item) => item.query_id === data.query_id
      );
      this.ecercise.body.query.queries[findIndex].words = data.newWords;
      this.calcChosenWordBox();
    },
    calcChosenWordBox() {
      const RemoveItems = [];
      this.ecercise.body.query.queries.forEach((query) => [
        query.words.forEach((Qword) => {
          const hasItem = this.ecercise.body.words_box.words_box.includes(
            Qword.chosen
          );
          if (hasItem) {
            this.ecercise.body.words_box.words_box =
              this.ecercise.body.words_box.words_box.filter((item) => {
                return item !== Qword.chosen;
              });
          }
        }),
      ]);
    },
    checkAnswer() {
      this.ecercise.checkAnswer = true;
      console.log();
      // this.$swal({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Something went wrong!",
      // });
    },
  },
};
</script>
