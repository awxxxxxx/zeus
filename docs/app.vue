<style>
	.v-link-active {
		background-color: rgb(224,224,224);
	}

	.doc-title {
		font-weight: 300;
    color:#41b883;
	}
</style>
<template>
	<header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">{{ Home }}</span>
          <div class="mdl-layout-spacer"></div>
        </div>
   </header>
  <div class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
    <header class="demo-drawer-header">
      <div class="demo-avatar-dropdown">
        <h2><center>Zeus</center></h2>
      </div>
    </header>
      <nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
        <a class="mdl-navigation__link" v-link="{name: 'about'}">About</a>
        <a class="mdl-navigation__link" v-link="{name: 'button'}">Button</a>
        <a class="mdl-navigation__link" v-link="{name: 'forms'}">Forms</a>
        <a class="mdl-navigation__link" v-link="{name: 'slider'}">Slider</a>
        <a class="mdl-navigation__link" v-link="{name: 'table'}">Table</a>
        <a class="mdl-navigation__link" v-link="{name: 'alert'}">Alert</a>
        <a class="mdl-navigation__link" v-link="{name: 'dialog'}">Dialog</a>
        <a class="mdl-navigation__link" v-link="{name: 'datepicker'}">Datepicker</a>
        <a class="mdl-navigation__link" v-link="{name: 'pagination'}">Pagination</a>
        <a class="mdl-navigation__link" v-link="{name: 'select'}">Select</a>
        <a class="mdl-navigation__link" v-link="{name: 'upload'}">Upload</a>
        <a class="mdl-navigation__link" v-link="{name: 'charts'}">Charts</a>
        <div class="mdl-layout-spacer"></div>
      </nav>
  </div>
  <main class="mdl-layout__content mdl-color--grey-100">
  	<div class="mdl-cell mdl-cell--12-col">
			<router-view></router-view>	
		</div>
  </main>
</template>
<script>

	export default {
		ready () {
			this.$on('changeComponent', (name) => {
				this.Home = name;
			});
		},
		data () {
			return {
				Home: 'Button'
			}
		},
	}
</script>