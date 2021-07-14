<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<script>
export default {
  name: "TitleCom",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.title {
  margin: 0 auto;
  color: green;
}
</style>