<template>
  <div>
    <h1>文字数カウンター</h1>
    <textarea style="width:300px; height:150px;" v-model="text" ></textarea>
    <p>文字数: <span>{{ charNum }}</span><br>
    文字数(空白文字、改行文字を除く): <span>{{charNumWithoutwhitespaceAndNewline}}</span>
    </p>

  </div>
</template>

<script>
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
    charNum: function(){
      return this.text.length;
    },
    charNumWithoutwhitespaceAndNewline(){
      return this.text.replace(/[(\r?\n)\s]/g,"").length;
    }
  }
}
</script>

<style>
</style>
