<template>
  <div class="row">
    <div  class="col-md-2" >
      <div class="cb-left" >
        <ul id="cb-left-menu">
          <li v-for="menu in menus">
            <router-link v-if="menu.type=='link'" :to="menu.to" exact>
              <i :class="[menu.icon]"></i>
              {{menu.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-10  cb-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        menus:[
          {type: 'link', to: { name: 'index', params:{} },
            icon: 'glyphicon glyphicon-home', title: '首页'},
          {type: 'link', to: {name: 'fabu', params:{}},
            icon:'glyphicon glyphicon-cloud-upload',title:'发布'},
          {type: 'link', to: {name: 'editor', params:{}},
            icon:'glyphicon glyphicon-edit',title:'编辑'},
        ]
      }
    }
  }

</script>

<style scoped>
  .cb-left{
    background-color: #e8e8e8;
    min-height: 600px;
    margin-bottom: 25px;
  }
  .cb-right{
    background-color: #70dbdb;
  }
  .cb-left ul{
    margin: 0;
    padding: 0;
  }
  .cb-left li{
    list-style: none;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .cb-left li a{
    color: #333333;
    text-decoration: none;
  }
  .cb-left li a i{
    margin-right: 5px;
  }
  .router-link-active{
    color: #004B80 !important;
  }

</style>
