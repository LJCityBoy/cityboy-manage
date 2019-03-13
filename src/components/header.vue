<template>
  <header>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand cb-white" href="#">CITYBOY Management</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#"><span class="glyphicon glyphicon-user"></span> 注册</a>
          </li>
          <li>
            <a href="#"><span class="glyphicon glyphicon-log-in"></span> 登录</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        // name: "header"
    }
</script>

<style scoped>
  nav{
    background-color: #333333;
    border: none;
    border-radius: 0;
  }
  .cb-white{
    color: white !important;
  }
  nav li a{
    color: white !important;
  }
</style>
