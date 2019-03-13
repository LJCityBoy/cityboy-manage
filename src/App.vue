<template>
  <div id="app">
    <Header/>
    <section class="container">
      <div id="cb-menu">
        <Menu/>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>

  import './assets/css/base.css'
  import Header from './components/header'
  import Footer from './components/footer'
  import Menu from './components/menu'


export default {
  name: 'App',
  components:{
    Header,
    Menu,
    Footer
  }
}
</script>

<style>

</style>
