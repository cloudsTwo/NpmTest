# life01

<demo-block>
  <template v-slot:source>

    <my-component msg="hhh"></my-component>

  </template>
  <template v-slot:highlight>

    <my-component msg="hhh"></my-component>

  </template>
</demo-block>

<!-- ::: details 查看代码

```vue
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
```

::: -->

<!-- <ClientOnly>
  <demo name="hello"></demo>
</ClientOnly> -->
