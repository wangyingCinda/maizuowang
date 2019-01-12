<template>
	<div class="det" v-if="data">
		<img :src="data.cover.origin" alt="">
		<p><span class="back"></span><span class="intro">影片介绍</span></p>
		<div>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{data.director}}</div>
		<div>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：
			<span v-for="name in data.actors">{{name.name}} &nbsp;| &nbsp;</span>
		</div>
		<div>地区语言：{{data.language}}</div>
		<div>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：啦啦啦啦</div>
		<div>上映日期：不知道</div>
		<div>{{data.synopsis}}</div>
		<button>立即购票</button>
	</div>
</template>

<script>
	import axios from "axios"

	export default{
		name:'detail',
		data(){
			return {
				data:null,
				number:4424
			}
		},
		props:["myIndex"],
		mounted(){
			this.number = this.$route.params.id
			//fetch的形式发送ajax
			fetch(`/v4/api/film/${this.number}`).then(res=>{
				//console.log(res)
				return res.json();
			}).then(res=>{
				//console.log(res.data.film);
				this.data = res.data.film;
				console.log("name",this.data.name);
				this.$store.commit('changeHeadName',this.data.name);
			}).catch(error=>{
				console.log(error);
			})
		},
		beforeDestroyed(){
			this.$store.commit('changeHeadName',"卖座电影");
		}
		/*computed(){
			if(this.$store.state.list.length === 0){
				console.log("ttt")
				this.$store.dispatch("changeHeadName","卖座啦啦啦")
			}
		}*/
	}

	

</script>

<style scoped lang="scss">
*{
	margin:0;padding:0;
}
	.det{
		width:100%;
		font-size:14px;
		img{
			width:100%;
			height:200px;
		}
		p{
			text-align:left;
			font-size:16px;
			line-height:15px;
			span{
				line-height:50px;
			}
			.back{
				display:inline-block;
				width:15px;
				height:15px;
				background:pink;
				transform:translateX(-10px);
			}
		}
		div{
			text-align:left;
			margin-left:15px;
			line-height:30px;
		}
	}
	button{
		width:200px;
		height:40px;
		background:orange;
		border-radius:50px;
		margin-top:20px;
		margin-bottom:20px;
	}

</style>