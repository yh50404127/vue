<template>
	<el-container style="margin: 0; padding: 0;">
		<el-header style="margin: 0; padding: 0;">
			<div id="title">
				Vue學習筆記
			</div>
		</el-header>
		<el-main id="main" style="margin: 0;">
			<el-menu
				mode="horizontal"
				background-color="#e8e7e3"
				text-color="#777777"
				active-text-color="#000000"
				:default-active="0"
				@select="selectItem"
			>
				<el-menu-item
					v-for="item in items"
					:index="item.index"
					:key="item.index"
				>
					<div id="text">{{item.title}}</div>
				</el-menu-item>
			</el-menu>
		</el-main>
	</el-container>
</template>

<script>
export default{
	props:["items"],
	methods:{
		selectItem(index){
			this.$emit('selected', index)
		}
	}
}
</script>

<style scoped>
	#title{
		color:brown;
		font-size: 40px;
		font-weight: bold;
		font-family: georgia, "times new roman", times, serif;
	}
	#text{
		font-size: 20px;
	}
	#main{
		padding: 5px;
		background-color: #e8e7e3;
		border: solid black 2px;
		border-radius: 10px;
	}
</style>
