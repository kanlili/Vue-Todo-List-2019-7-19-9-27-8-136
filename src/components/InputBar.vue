<template>
  <div id="inputBar">
    <input id="input-text" v-model="item" @keydown.enter="handleClickAdd" />
    <button id="button" @click="handleClickAdd">Add</button>
  </div>
</template>
<script>
export default {
  name: "inputBar",
  data: function() {
    return {
      item: ""
    };
  },
  methods: {
    handleClickAdd() {
      this.$emit("handleClickAdd", this.item);
      this.item = "";
    }
  }
};
</script>
<style>
#button {
  display: inline-block;
  background-color:darkturquoise;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
.inputclass {
  width: 200px;
  padding: 4px 15px 4px 0;
  -webkit-appearance: textfield;
  background-color: white;
  cursor: text;
  padding: 1px;
  border-width: 2px;
  border-style: inset;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  display: inline-block;
}
</style>