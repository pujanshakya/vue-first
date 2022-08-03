<template>
  <div>
    <div id="wrapper">
      <!-- Sidebar -->
      <AppSideBar></AppSideBar>
      <!-- End of Sidebar -->

      <AppHeader></AppHeader>
      <!-- Header -->
    </div>
    <AppOther></AppOther>
  </div>

  <!-- <div id="app">
    <AppHeader></AppHeader>
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <AppFooter></AppFooter>
  </div> -->
</template>

<script lang="ts">
import AppHeader from "./TheHeader.vue";
import AppSideBar from "./TheSideBar.vue";
import AppOther from "./TheOther.vue";

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppSideBar,
    AppOther,
  },
};
</script>
