<template>
  <div>
    <h1>文字数カウンター</h1>
    <textarea style="width:300px; height:150px;" v-model="text"></textarea>
    <p>文字数: <span>{{ text.length }}</span></p>
  </div>
</template>

<script>
export default {
name: "CharCounter",


  data: () => ({
    text: "", 

  }),
}
</script>

<style>
</style>
