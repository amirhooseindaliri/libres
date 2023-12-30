<template>
  <div>
    <template v-for="query in data.queries">
      <div id="DetailBody" class="col-md-12 DetailBodyClass">
        <div class="row">
          <div class="col-md-auto circlenumber">{{ query.query_id }}</div>
          <div class="col-md-auto ml-3" style="padding: 0px 10px">
            <h6>
              <p>&nbsp;&nbsp;</p>
            </h6>
          </div>
        </div>
      </div>
      <div id="OptionBody" class="col-md-12 mt-3">
        <div class="row">
          <div class="col-md-6" v-for="option in query.words[0].options">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label
                      class="radio"
                      :class="
                        chosenColor(
                          option,
                          query.words[0].correct,
                          query.words[0].chosen
                        )
                      "
                      ><input
                        class="radiooption"
                        type="radio"
                        :value="option"
                        @change="changeRadio($event, query, query.query_id)"
                        :checked="
                          selectedOption(option, query.words[0].correct)
                        "
                        :name="query.query_id + 'radio'" /><span></span
                    ></label>
                  </td>
                  <td class="fontSize">{{ option }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </template>
  </div>
</template>
<script>
export default {
  props: ["data", "checkAnswer", "seeAnswer"],
  methods: {
    findIndexes(str) {
      const string = str;
      const regex = /%/g;
      const indexes = [];
      let match;

      while ((match = regex.exec(string)) !== null) {
        indexes.push(match.index);
      }
      return indexes;
    },
    chosenText(item, index) {
      const findIndex = item.words.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        return item.words[findIndex].chosen;
      } else {
        return null;
      }
    },
    chosenColor(option, correct, chosen) {
      let className = "";
      if (this.checkAnswer || this.seeAnswer) {
        if (chosen === option) {
          const corrected = option === correct;
          if (corrected) {
            className = "correctAnswerOption";
            return className;
          } else {
            className = "wrongAnswerOption";
            return className;
          }
        }
      }
    },
    changeRadio(evt, itemData, query_id) {
      const value = evt.target.value;
      const newWords = [{ ...itemData.words[0], chosen: value }];
      this.$emit("selectSuccess", {
        query_id,
        newWords,
      });
    },
    chosenItem(item, index) {
      const findIndex = item.words.findIndex((item) => {
        return item.index === index;
      });
      if (findIndex >= 0) {
        return item.words[findIndex];
      } else {
        return null;
      }
    },
    selectedOption(option, correct) {
      if (this.seeAnswer) {
        if (option === correct) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
  },
};
</script>
