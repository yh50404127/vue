<template>
	<p v-html="data"></p>
</template>

<script>
import { marked } from "marked"
export default{
	props:["content"],
	computed:{
		data(){
			return marked(this.content)
		}
	}
}
</script>

<style>
</style>
