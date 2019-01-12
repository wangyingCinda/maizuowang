<template>
	<div>
		<ul class="clear">
			<router-link v-for="data in datalist" :key="data.id" :to="'/detail/'+data.id" tag="li">
				<img :src="data.poster.origin" alt="">
				<div class="right">
					<h4>{{data.name}}</h4>
					<h6>{{data.intro}}</h6>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	
	import axios from "axios"

	export default{
		name:'willFilm',
		data(){
			return {
				datalist:[]
			}
		},
		mounted(){
			axios.get("/v4/api/film/coming-soon?page=1&count=7").then(res=>{
				this.datalist = res.data.data.films;
			}).catch(err=>{
				console.log(err);
			})

		},
		methods:{
			giveId(index){
				this.$emit("give",index);
			}
		}
	}

</script>

<style lang="scss" scoped>
	*{margin:0;padding:0;}
	.clear:after{
		content:"";
		display:block;
		clear:both;
	}
	 ul{
		margin-top:20px;
		width:100%;
		padding:2px;
		li{
			width:80%;
			height:200px;
			img{
				width:130px;
				height:150px;
			}
			.right{
				float:right;width:100px;
			}
		}
	} 

</style>