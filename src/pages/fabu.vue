<template>
  <div>
   <Editor v-model="tinymceHtml" :init="editorInit"></Editor>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/mobile/theme'
  import Editor from '@tinymce/tinymce-vue'

    export default {
        components:{
          Editor
        },
      editorInit: {
        language_url: '/static/zh_CN.js',
        language: 'zh_CN',
        height: 300
      },
      mounted(){
          ty
      }
    }
</script>

<style scoped>

</style>
