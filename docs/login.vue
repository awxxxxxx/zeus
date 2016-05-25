<style lang="less">
	.login {
		display: flex;
		justify-content: center;
		
		.mdl-card {
			margin-top: 100px;

			.mdl-button {
				float: right;
			}
		}

		.mdl-card--expand {
			background-color: rgb(63,81,181);

			> h2 {
				color: #fff;
			}
		}
	}
</style>

<template>
	<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
	  <header class="mdl-layout__header">
	    <div class="mdl-layout__header-row">
	      <!-- Title -->
	      <h2 class="display-3">ZEUS</h2>
	      <!-- Add spacer, to align navigation to the right -->
	      <div class="mdl-layout-spacer"></div>
	      <!-- Navigation. We hide it in small screens. -->
	      <nav class="mdl-navigation mdl-layout--large-screen-only">
	        <a class="mdl-navigation__link" v-link="{name: 'about'}">About</a>
	      </nav>
	    </div>
	  </header>
	  <main class="mdl-layout__content">
	    <div class="page-content login">
	    	<div class="demo-card-square mdl-card mdl-shadow--2dp">
				  <div class="mdl-card__title mdl-card--expand">
				    <h2 class="mdl-card__title-text">Login</h2>
				  </div>
				  <div class="mdl-card__supporting-text">
				    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="user">
					    <input class="mdl-textfield__input" type="text" id="zeus-user" v-model="user.name">
					    <label class="mdl-textfield__label" for="sample3">用户名</label>
					  </div>
					  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="password">
					    <input class="mdl-textfield__input" type="password" id="zeus-password" v-model="user.password">
					    <label class="mdl-textfield__label" for="zeus-password">密码</label>
					  </div>
				  </div>
				  <div class="mdl-card__actions mdl-card--border">
				    <a class="mdl-button mdl-button--accent mdl-button--raised mdl-js-button mdl-js-ripple-effect" @click="login">
				      登录
				    </a>
				  </div>
				</div>
	    </div> 
	  </main>
	  
	</div>
	<z-alert :show-alert.sync="toast" :option="barOption"></z-alert>
</template>

<script>
	export default {
		data () {
			return {
				toast: false,
				barOption: {
					message: 'success'
				},
				user: {
					name: '',
					password: ''
				}
			}
		},
		ready () {
			componentHandler.upgradeElement(document.getElementById('user'));
			componentHandler.upgradeElement(document.getElementById('password'));
		},
		methods: {
			login () {
				this.$http.post('zeus/login', this.user)
					.then((res) => {
						if (res.data.status) {
							this.barOption.message = res.data.msg;
							this.toast = true;
						} else {
							this.$route.router.go({name: 'user'});
							let user = JSON.stringify(res.data.data);
							sessionStorage.setItem('user', user);
						}
					}, (e) => {
						console.log(e)
					})
			}
		}
	}
</script>