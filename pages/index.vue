<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div>
</template>

<script>
  import Sidebar from '~/layouts/components/Sidebar'
  import Navbar from '~/layouts/components/Navbar'
  import AppMain from '~/layouts/components/AppMain'

  // import '~/pages/custom-style.scss'
  export default {
    components: {
      Sidebar, Navbar, AppMain
    },
    layout: 'admin'
  }
</script>
