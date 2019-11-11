<template>
	<div class="bottom">
		<div class="tab-box">
			<div class="tab">
				<router-link tag="div" class="tab-item" to="/home" replace active-class="u-link--Active">
					<span class="tab-link home">首页</span>
				</router-link>
				<router-link tag="div" class="tab-item" to="/rank" replace active-class="u-link--Active">
					<span class="tab-link rank">排名</span>
				</router-link>
				<router-link tag="div" class="tab-item" to="/rule" replace active-class="u-link--Active">
					<span class="tab-link rule">领奖</span>
				</router-link>
				<router-link tag="div" class="tab-item" to="/mine" replace active-class="u-link--Active">
					<span class="tab-link mine">我的</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped="scoped">
	.bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		& .tab-box {
			position: absolute;
			left:0;
			bottom : 0;
			z-index: 99;
			width :100%;
			background: #A50006;
			& .tab {
				display: flex;
				line-height: 28px;
				font-size: 14px;
				& .tab-item {
					flex: 1;
					text-align: center;
					& .tab-link {
						display: block;
						width: 70px;
						margin: 10px auto;
						color: #FFF;
					}
				}
				& .u-link--Active {
					background: #F38958;
				}
			}
		}
	}
</style>
