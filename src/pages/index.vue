<template>
  <div id="show-article"></div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{

          }
      },
      methods:{
        getArticle:function () {
          console.log('请求数据');
          $.ajax({
            url:'http://localhost:9001/api/test',
            type:'get',
            success:function (obj) {
              console.log(obj);
              document.getElementById('show-article').innerHTML = obj
            }
          })
        }
      },
      created(){
        this.getArticle();
      },
      mounted(){

      }
    }


</script>

<style scoped>

</style>
