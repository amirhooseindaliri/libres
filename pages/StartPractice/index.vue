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
              <ReadMorePractice
                v-if="ecercise.body.readMore"
                :readMore="ecercise.body.readMore"
              />
              <HintPractice
                v-if="
                  ecercise.body.hint && ecercise.body.hint.outOfBox === true
                "
                :data="ecercise.body.hint"
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
                    :mode="ecercise.mode"
                  />
                  <HintPractice
                    v-if="
                      ecercise.body.hint &&
                      ecercise.body.hint.outOfBox === false
                    "
                    :data="ecercise.body.hint"
                  />
                  <SentenceBlank
                    v-if="ecercise.body.query.query_type === 'drag_blank'"
                    :data="ecercise.body.query"
                    @dropSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                  />
                  <DropDownBlank
                    v-if="ecercise.body.query.query_type === 'drop_down_blank'"
                    :data="ecercise.body.query"
                    @selectSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                  />
                  <ContainerDrag
                    v-if="ecercise.body.query.query_type === 'box_drag'"
                    :data="ecercise.body.query"
                    @dropSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                  />
                  <SimpleBlank
                    v-if="ecercise.body.query.query_type === 'simple_blank'"
                    :data="ecercise.body.query"
                    @changeSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                  />
                  <DragInsidePractice
                    v-if="ecercise.body.query.query_type === 'drag_inside'"
                    :data="ecercise.body.query"
                    @changeSuccess="SuccessDragInside"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                    :key="ecercise.seeAnswer"
                  />
                </div>
              </div>
              <div
                class="col-md-12 pb-2 d-none d-sm-block"
                style="position: fixed; bottom: 0; background: white; left: 0"
              >
                <div class="row" style="direction: rtl">
                  <div
                    class="col-md-auto col-12 text-right"
                    v-if="ecercise.checkAnswer === false"
                  >
                    <a
                      @click="checkAnswer"
                      id="Regbtn"
                      class="Regbtn btn btn-pink col-12 grayScale0--text py-1"
                      >Check answer</a
                    >
                  </div>
                  <div
                    class="col-md-auto col-12 text-right"
                    v-if="ecercise.checkAnswer"
                  >
                    <a
                      @click="TryAgain"
                      id="TryAgain"
                      class="TryAgain btn btn-dark col-12 py-1"
                      style="color: white !important"
                      >Try again</a
                    >
                  </div>
                  <div
                    class="col-md-auto btn col-12 text-dark"
                    v-if="ecercise.checkAnswer"
                  >
                    <a
                      @click="SeeAnswer"
                      id="SeeAnswer"
                      class="SeeAnswer btn btn-pink col-12 py-1"
                      style="color: white !important"
                      >See Answer</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-else />
  </div>
</template>
<script>
import { match } from "assert";
import JsonEcerciseOne from "./../../utiles/Jsons/exercise1.json";
import ModeDragBlank from "./../../utiles/Jsons/ModeDragBlank.json";
import DropDownBlank from "./../../utiles/Jsons/DropDownBlank.json";
import ModeDragBox from "./../../utiles/Jsons/ModeDragBox.json";
import ModeSimpleBlank from "./../../utiles/Jsons/ModeSimpleBlank.json";
import SimpleBlankWIthImage from "./../../utiles/Jsons/SimpleBlankWIthImage.json";
import ModeDragInside from "./../../utiles/Jsons/ModeDragInside.json";

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
    this.ecercise = ModeDragInside;
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    Success(data) {
      const findIndex = this.ecercise.body.query.queries.findIndex(
        (item) => item.query_id === data.query_id
      );
      this.ecercise.body.query.queries[findIndex].words = data.newWords;
      console.log(this.ecercise.body.query.queries[findIndex].words);
      if (
        this.ecercise.body.words_box &&
        (this.ecercise.mode === "drag_blank" ||
          this.ecercise.mode === "drop_down_blank")
      ) {
        this.calcChosenWordBox();
      } else if (
        this.ecercise.body.words_box &&
        this.ecercise.mode === "drag_box"
      ) {
        this.calcChosenWordBoxDragBox();
      }
    },
    SuccessDragInside(data) {
      this.ecercise.body.query.queries = data;
      console.log(this.ecercise.body.query.queries);
    },
    calcChosenWordBox() {
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
    calcChosenWordBoxDragBox() {
      this.ecercise.body.query.queries.forEach((query) => [
        (this.ecercise.body.words_box.words_box =
          this.ecercise.body.words_box.words_box.filter((item) => {
            return !query.words[0].chosen.includes(item);
          })),
      ]);
    },
    checkAnswer() {
      this.ecercise.checkAnswer = true;
      let corrected = 0;
      let allQuestion = 0;
      this.ecercise.body.query.queries.forEach((item) => {
        item.words.forEach((word) => {
          if (
            word.type === "solid_boxed" ||
            word.type === "dorp_down" ||
            word.type === "simple_blank" ||
            word.type === "drag_inside"
          ) {
            allQuestion++;
            const is_correct =
              JSON.stringify(word.chosen) === JSON.stringify(word.correct);
            if (is_correct) {
              corrected++;
            }
          }
        });
      });
      const score = Math.floor((corrected / allQuestion) * 100);
      this.ecercise.score = score;
      if (score >= 50) {
        this.$swal({
          icon: "success",
          title: "Good Job !",
          text: `${corrected}/${allQuestion}  Try again to improve your score.`,
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Try harder",
          text: `${corrected}/${allQuestion}  Try again to improve your score.`,
        });
      }
    },
    TryAgain() {},
    SeeAnswer() {
      this.ecercise.seeAnswer = true;
      this.ecercise.body.query.queries = this.ecercise.body.query.queries.map(
        (query) => {
          const fixAnswer = query.words.map((Qword) => {
            if (Qword.type !== "image") {
              return { ...Qword, chosen: Qword.correct };
            }
          });
          return { ...query, words: fixAnswer };
        }
      );
    },
  },
};
</script>
