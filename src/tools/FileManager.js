import axios from 'axios'
const FileManager = {
	path:process.env.BASE_URL + "post/",
	getAllTopic: function(){
		return[
			"HTML專題",
			"CSS專題",
			"JavaScript專題"
		]
	},
	getPosts: function(topic){
		switch(topic){
			case 0:
				return ["HTML基礎元素", "文本標籤"]
			case 1:
				return ["選擇器", "CSS盒子概念"]
			case 2:
				return ["方法與屬性","語句與數據類型"]
		}
	},
	getPostContent: function(topicName, postName){
		let url = this.path + topicName + '/' + postName + '.md'
		return new Promise((res, rej)=>{
			axios.get(url).then((response)=>{
				console.log(response.data)
				res(response)
			}, rej)
		})
	}
}
export default FileManager