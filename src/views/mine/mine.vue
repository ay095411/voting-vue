<template>
	<div>
		<h1 @click="a" style="text-decoration: underline;color: blue;">mine</h1>
		<wTab></wTab>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			a() {
				this.$router.push({
					name:"news"
				})
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	
</style>
