<template>
  <div class="cb-editor">
    <Tinymce v-model="Value"></Tinymce>
    <!-- 输出值:{{Value}}-->
  </div>
</template>

<script>
// console.log('using');
  import Tinymce from '../components/tinymced'
  window.tinymce.baseURL = '/static/tinymce'
  window.tinymce.suffix = '.min'
    export default {
        components:{
         Tinymce
        },
      data(){
          return {
            Value:''
          }
      }
    }
</script>

<style scoped>
  .cb-editor{
    padding: 0;
    margin: 0;
  }

</style>
