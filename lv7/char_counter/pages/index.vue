<template>
  <div>
    <h1>文字数カウンター</h1>
    <textarea style="width:300px; height:150px;" v-model="text" ></textarea>
    <p>
      文字数: 
      <span>{{ charNum }}</span><br>
      文字数(空白文字、改行文字を除く): 
      <span>{{ charNumWithoutWhitespace }}</span>
    </p>

  </div>
</template>

<script>
const whitespace_re = /\s+/g;
export default {
  name: "CharCounter",
  data(){
    return {
      text: `いろはにほへと　ちりぬるを
わかよたれそ　　つねならむ
うゐのおくやま　けふこえて
あさきゆめみし　ゑひもせすん`, 
    }
  },
  computed:{
    charNum(){
      return this.text.length;
    },
    charNumWithoutWhitespace(){
      return this.text.replace(whitespace_re, "").length;
    }
  }
}
</script>

<style>
</style>
