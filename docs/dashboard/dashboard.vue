<template>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">{{ title }}</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Dashboard</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" v-link="{name: 'admin'}">人员管理</a>
        <a class="mdl-navigation__link" v-link="{name: 'platform'}">接入平台管理</a>
        <a class="mdl-navigation__link" v-link="{name: 'user'}">我的平台</a>
        <a class="mdl-navigation__link" v-link="{name: 'about'}">About</a>
        <a class="mdl-navigation__link" v-link="{name: 'doc'}">组件文档</a>
        <a class="mdl-navigation__link" v-link="{name: 'about'}">退出</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
	export default {
    data () {
      return {
        title: 'Dashboard'
      }
    },
    ready () {
      componentHandler.upgradeElement(this.$el);
    },
    events: {
      changeTitle(title) {
        this.title = title;
      }
    }
	}
</script>