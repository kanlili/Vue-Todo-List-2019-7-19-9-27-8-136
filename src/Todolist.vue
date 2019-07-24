<template>
  <div id="todoList">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
import Footer from "./Footer.vue";
export default {
  name: "todoList",
  data: function() {
    return {};
  },
  components: {
    Header,
    Body,
    Footer
  },
  methods: {}
};
</script>
<style>
#todoList {
  padding: 20px;
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  background: white;
  border-radius: 5px;
}
</style>