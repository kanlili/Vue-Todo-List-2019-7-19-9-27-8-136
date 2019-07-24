<template>
  <div>
    <InputBar @push="onPushTodoItem($event)"></InputBar>
    <ListContainer :items="chooseItems"></ListContainer>
  </div>
</template>
<script>
import InputBar from "./InputBar";
import ListContainer from "./ListContainer";
export default {
  name: "Body",
  data: function() {
    return {
      items: [],
      status: ""
    };
  },
  components: {
    InputBar,
    ListContainer
  },
  computed: {
    chooseItems() {
      switch (this.status) {
        case "ACTIVE":
          return this.items.filter(item => item.active === true);
        case "COMPLETE":
          return this.items.filter(item => item.active === false);
        case "ALL":
        default:
          return this.items;
      }
    }
  },
  methods: {
    onPushTodoItem(payload) {
    this.$emit("push",payload);
   }
  }
};
</script>
<style>
</style>