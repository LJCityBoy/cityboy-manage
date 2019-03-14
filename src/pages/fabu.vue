<template>
  <div>
    <div class="cb-title">
      <input @input="inputFn" type="text" placeholder="请输入文章标题，字数控制在30字内">
      <div class="cb-title-text"><span>{{inputValue.length}}</span>/35</div>
    </div>
    <div class="cb-editor">
      <Tinymce v-model="Value"></Tinymce>
      <!-- 输出值:{{Value}}-->
    </div>
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
        Value:'',
        inputValue:''
      }
    },
    methods:{
      //标题输入字数检测
      inputFn(thisArea){
        if (thisArea.target.value.length > 35){
          alert(35 + ' 个字限制. \r超出的将自动清除.');
          thisArea.target.value = thisArea.target.value.substring(0, 35);
          thisArea.target.focus();
        }
        this.inputValue = thisArea.target.value;
      }
    }

  }
</script>

<style scoped>
  .cb-title{
    height: 40px;
    width: 100%;
    border: #9b9b9b solid 1px;
    margin-bottom: 5px;
  }
  .cb-title input{
    display: inline-block;
    border: none;
    outline: none;
    width: 100%;
    height: 38px;
    line-height: 38px;
    padding: 2px 5px;
    float: left;

  }
  .cb-title-text{
    height: 26px;
    position: absolute;
    right: 5px;
    top: 11px;
  }
  .cb-title-text span{
    color: #70dbdb;
  }

</style>
