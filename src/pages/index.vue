<template>
  <div id="show-article"></div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            article:''
          }
      },
      mounted(){
          console.log('请求数据');
        function getArticle() {
          $.ajax({
            url:'http://localhost:9001/api/test',
            type:'get',
            success:function (obj) {
              console.log(obj);
              document.getElementById('show-article').innerHTML = obj
            }
          })
        }
        getArticle();
      }
    }
</script>

<style scoped>

</style>
