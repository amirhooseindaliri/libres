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
                v-if="ecercise.question"
                :question="ecercise.question"
              />
              <ReadMorePractice
                v-if="ecercise.readMore"
                :readMore="ecercise.readMore"
              />
              <HintPractice
                v-if="ecercise.hint && ecercise.hint.outOfBox === true"
                :data="ecercise.hint"
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
                :class="ecercise.box_class"
              >
                <div
                  v-if="ecercise.query"
                  id="questionDetail"
                  style="pointer-events: all"
                >
                  <WordBoxPractice
                    v-if="ecercise.words_box"
                    :data="ecercise.words_box"
                    :checkAnswer="ecercise.checkAnswer"
                    :mode="ecercise.mode"
                  />
                  <HintPractice
                    v-if="ecercise.hint && ecercise.hint.outOfBox === false"
                    :data="ecercise.hint"
                  />
                  <SentenceBlank
                    v-if="ecercise.query.query_type === 'drag_blank'"
                    :data="ecercise.query"
                    @dropSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :key="ecercise.seeAnswer"
                  />
                  <DropDownBlank
                    v-if="ecercise.query.query_type === 'drop_down_blank'"
                    :data="ecercise.query"
                    @selectSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                    :key="ecercise.seeAnswer"
                  />
                  <ContainerDrag
                    v-if="ecercise.query.query_type === 'box_drag'"
                    :data="ecercise.query"
                    @dropSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                    :key="ecercise.seeAnswer"
                  />
                  <SimpleBlank
                    v-if="ecercise.query.query_type === 'simple_blank'"
                    :data="ecercise.query"
                    @changeSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                    :key="ecercise.seeAnswer"
                  />
                  <DragInsidePractice
                    v-if="ecercise.query.query_type === 'drag_inside'"
                    :data="ecercise.query"
                    @changeSuccess="SuccessDragInside"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                    :key="ecercise.seeAnswer"
                  />
                  <RadioPractice
                    v-if="ecercise.query.query_type === 'radio_chose'"
                    :data="ecercise.query"
                    @selectSuccess="Success"
                    :checkAnswer="ecercise.checkAnswer"
                    :seeAnswer="ecercise.seeAnswer"
                  />
                  <CheckBoxPractice
                    v-if="ecercise.query.query_type === 'checkBox_chose'"
                    :data="ecercise.query"
                    @selectSuccess="Success"
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
import ModeRadioChose from "./../../utiles/Jsons/ModeRadioChose.json";
import ModeCheckBox from "./../../utiles/Jsons/ModeCheckBox.json";
import { httpRequest } from "../../plugins/axios";

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
      defaultExercise: null,
      mainData: null,
    };
  },
  mounted() {
    this.getPractice();
    this.ecercise = ModeCheckBox;
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    Success(data) {
      const findIndex = this.ecercise.query.queries.findIndex(
        (item) => item.query_id === data.query_id
      );
      console.log(findIndex, data);
      this.ecercise.query.queries[findIndex].words = data.newWords;
      if (
        this.ecercise.words_box &&
        (this.ecercise.mode === "drag_blank" ||
          this.ecercise.mode === "drop_down_blank")
      ) {
        this.calcChosenWordBox();
      } else if (this.ecercise.words_box && this.ecercise.mode === "drag_box") {
        this.calcChosenWordBoxDragBox();
      }
    },
    SuccessDragInside(data) {
      this.ecercise.query.queries = data;
    },
    calcChosenWordBox() {
      this.ecercise.query.queries.forEach((query) => [
        query.words.forEach((Qword) => {
          const hasItem = this.ecercise.words_box.words_box.includes(
            Qword.chosen
          );
          if (hasItem) {
            this.ecercise.words_box.words_box =
              this.ecercise.words_box.words_box.filter((item) => {
                return item !== Qword.chosen;
              });
          }
        }),
      ]);
    },
    calcChosenWordBoxDragBox() {
      this.ecercise.query.queries.forEach((query) => [
        (this.ecercise.words_box.words_box =
          this.ecercise.words_box.words_box.filter((item) => {
            return !query.words[0].chosen.includes(item);
          })),
      ]);
    },
    checkAnswer() {
      this.ecercise.checkAnswer = true;
      let corrected = 0;
      let allQuestion = 0;
      this.ecercise.query.queries.forEach((item) => {
        item.words.forEach((word) => {
          if (
            word.type === "solid_boxed" ||
            word.type === "dorp_down" ||
            word.type === "simple_blank" ||
            word.type === "drag_inside" ||
            word.type === "radio_chose"
          ) {
            allQuestion++;
            const is_correct =
              JSON.stringify(word.chosen) === JSON.stringify(word.correct);
            if (is_correct) {
              corrected++;
            }
          } else if (word.type === "checkBox_chose") {
            allQuestion = word.options.length;
            console.log(allQuestion, word.chosen);
            const is_correct = word.chosen.filter((chose) => {
              return word.correct.includes(chose);
            });

            corrected = is_correct.length;
          }
        });
      });
      const score = Math.floor((corrected / allQuestion) * 100);
      this.ecercise.score = score;
      this.updatePractice();
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
    TryAgain() {
      this.ecercise = { ...this.defaultExercise };
    },
    SeeAnswer() {
      this.ecercise.seeAnswer = true;
      this.ecercise.query.queries = this.ecercise.query.queries.map((query) => {
        const fixAnswer = query.words.map((Qword) => {
          if (Qword.type !== "image") {
            return { ...Qword, chosen: Qword.correct };
          } else {
            return Qword;
          }
        });
        return { ...query, words: fixAnswer };
      });
    },
    async getPractice() {
      const token = localStorage.getItem("token");
      this.loadingOpenSection = true;
      httpRequest
        .get(`books/practices/${this.$route.query.id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const data = JSON.parse(JSON.stringify(res.data));
          this.ecercise = data.content.body;
          this.defaultExercise = data.content.defaultContent;
          this.mainData = data;
        });
    },
    async updatePractice() {
      const token = localStorage.getItem("token");
      this.loadingOpenSection = true;
      const body = {
        content: {
          body: this.ecercise,
          defaultContent: this.defaultExercise,
        },
        score: this.ecercise.score,
      };
      httpRequest
        .patch(`books/practices/${this.$route.query.id}/`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const data = JSON.parse(JSON.stringify(res.data));
          this.ecercise = data.content.body;
          this.defaultExercise = data.content.defaultContent;

          this.mainData = data;
        });
    },
  },
};
</script>
