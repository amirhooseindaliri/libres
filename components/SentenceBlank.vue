<template>
  <div>
    <template v-for="item in data.contents">
      <p class="mb-0">&nbsp;</p>
      <div
        id="div1"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
        style="background-color: red; height: 100px; width: 100px"
      ></div>
      <p
        style="font-size: 1rem"
        :style="data.style"
        class="mb-0"
        v-html="generateQuestion(item)"
      ></p>
      <p class="mb-0">&nbsp;</p>
    </template>
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    generateQuestion(question) {
      let counter = 0;
      let result = [];
      const text = question;
      const indexes = this.findIndexes(text);
      const inputText = this.createInputElement();
      const splitText = text
        .split("WORD_GENERATE")
        .filter((item) => item !== "");
      splitText.map((textSplit, index) => {
        let totalIndex = 0;
        if (index > 0) {
          totalIndex = indexes[index] - indexes[index - 1] - 14;
        } else {
          totalIndex = indexes[index] - 1;
        }
        result.push(this.replaceAtIndex(textSplit, inputText, totalIndex));
        totalIndex = totalIndex;
      });
      console.log(result.join(""));
      return result.join("");

      //   const index = text.find("WORD_GENERATE");

      //   const newText = text.replace("WORD_GENERATE", inputText);
      //   return newText;
    },
    createInputElement() {
      return `<span
                id="droppable0"
                class="alert alert-dark customewidth nulloption"
              ></span
              ><input
                type="text"
                class="formstyle textoption"
                id="droppable0txt"
                style="display: none"
              />`;
    },
    findIndexes(str) {
      const string = str;
      const regex = /WORD_GENERATE/g;
      const indexes = [];
      let match;

      while ((match = regex.exec(string)) !== null) {
        indexes.push(match.index);
      }
      return indexes;
    },
    replaceAtIndex(originalString, replacement, index) {
      console.log(index);
      if (index < 0 || index >= originalString.length) {
        return originalString; // Index out of range, return the original string unchanged
      }
      // Split the original string into two parts at the specified index
      var leftPart = originalString.slice(0, index);
      var rightPart = originalString.slice(index + 1);

      // Concatenate the left part, replacement string, and right part
      var modifiedString = leftPart + replacement + rightPart;

      return modifiedString;
    },
    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
  },
};
</script>
