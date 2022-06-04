<template>
	<el-container id="container">
		<el-header style="width: 100%;" height="120px">
			<VueHeader :items="navItems" v-on:selected="changeSelected"></VueHeader>
		</el-header>
		<el-main>
			<VueBody :items="bodyItems" :topic="navItems[currentTopicIndex].title"></VueBody>
		</el-main>
		<el-footer>
			<div id="footer">{{desc}}</div>
		</el-footer>
	</el-container>
</template>

<script>
import VueHeader from './VueHeader.vue'
import VueBody from './VueBody.vue'
import FM from "../tools/FileManager.js"
export default{
	components:{
		VueHeader:VueHeader,
		VueBody:VueBody
	},
	data(){
		return{
			navItems: FM.getAllTopic().map((item, ind)=>{
				return{
					index:ind,
					title:item
				}
			}),
			desc:"版權所有, 學習使用",
			currentTopicIndex:0
		}
	},
	methods:{
		changeSelected(index){
			this.currentTopicIndex = index
		}
	},
	computed:{
		bodyItems(){
			return FM.getPosts(this.currentTopicIndex).map((item, ind)=>{
				return{
					index:ind,
					title:item
				}
			})
		}
	}
}
</script>

<style scoped>
	#container{
		margin-left: 150px;
		margin-right: 150px;
		margin-top: 30px;
		height: 800px;
	}
	#footer{
		text-align: center;
		background-color: bisque;
		height: 40px;
		line-height: 40px;
		color: #717171;
		border: solid black 2px;
		border-radius: 10px;
	}
</style>
