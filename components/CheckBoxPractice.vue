<template>
  <div>
    <div class="row">
      <div class="col-md-6" v-for="item in data.queries[0].words[0].options">
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  :id="item"
                  :value="item"
                  class="checkoption"
                  :name="item"
                  @change="
                    changeCheckBox($event, item, data.queries[0].query_id)
                  "
                  :checked="
                    selectedOption(item, data.queries[0].words[0].correct)
                  "
                />
                <label
                  :class="chosenColor(item, data.queries[0].words[0].correct)"
                  :id="item"
                  :for="item"
                ></label>
              </td>
              <td class="pl-2">{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "checkAnswer", "seeAnswer"],
  methods: {
    chosenColor(option, correct) {
      let className = "";
      if (this.checkAnswer || this.seeAnswer) {
        const corrected = correct.includes(option);
        if (corrected) {
          className = "MultiCheckCorrect";
          return className;
        } else {
          className = "MultiCheckWrong";
          return className;
        }
      }
    },
    changeCheckBox(evt, itemData, query_id) {
      const value = evt.target.value;
      const chosenList = this.data.queries[0].words[0].chosen;
      let newWords = [];
      if (evt.target.checked) {
        chosenList.push(value);
        newWords = [{ ...this.data.queries[0].words[0], chosen: chosenList }];
      } else {
        const chosen = chosenList.filter((chose) => chose !== "value");
        newWords = [{ ...this.data.queries[0].words[0], chosen: chosen }];
      }
      this.$emit("selectSuccess", {
        query_id,
        newWords,
      });
    },
    selectedOption(option, correct) {
      if (this.seeAnswer) {
        if (correct.includes(option)) {
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
