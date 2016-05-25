<style lang="less">
	.main {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;

		> div {
			flex: 1;
		}
		> .up {
			background-color: #01BFA5;
		}
		> .down {
			background-color: #F5F5F5;
		}
		> .content {
			position: absolute;
			display: flex;
			z-index: 100;
			background-color: #fff;
			width: 500px;
			height: 400px;
			top: 50%;
			left: 50%;
			flex-direction: column;
			margin-top: -202px;
			margin-left: -250px;
			box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);

			> div {
				flex: 1;
				padding: 30px 50px;
			}

			> .header {
				background-color: #1D88E6;
				h1 {font-size: 70px};
				color: #fff;
			}

			> .home {
				position: absolute;
				padding: 0;
				width: 80px;
				height: 80px;
				border-radius: 100%;
				margin-top: -40px;
				top: 50%;
				right: 10px;
				background-color: #9C28B1;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
				cursor: pointer;
			}

			> .footer {
				p {
					font-size: 18px;
					margin-top: 40px;
				}
			}
		}
	}

</style>
<template>
	<div class="main">
		<div class="up"></div>
		<div class="content">
			<div class="header">
				<h1>Error 404</h1>
			</div>
			<div class="home" v-link="{name: 'user'}"><img src="./asserts/ic_home_white_48px.svg"></div>
			<div class="footer">
				<p>你来到了一片荒芜。。。</p>
			</div>
		</div>
		<div class="down"></div>
	</div>
</template>
<script>
	export default {

	}
</script>