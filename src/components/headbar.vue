
<template>
	<div class="head">
		<div class="left" @click="headClick">
			<i class="iconfont icon-category"></i>
			<!-- <span>{{$store.state.title}}</span> -->
			<span>{{title}}</span>
		</div>
		<div class="right">大连</div>
	</div>
</template>

<script>
	
/*import bus from '../bus'*/
import {mapState} from 'vuex'

	export default {
		name:'heabar',
		data(){
			return {
				/*title:"卖座"	*/	
			}
		},
		methods:{
			headClick(){
				this.$emit("event");
				
			}
		},
		/*computed:{
			title(){
				//return "111"
				return this.$store.state.title
			}
		}*/
		computed:{
			...mapState(["title"])
		}
		/*computed:mapState(["title"])*/
	}

</script>

<style scoped lang="scss">
	
	.head{
		background:black;
		height:50px;
		position:fixed;
		top:0;
		left:0;
		width:100%;
		color:white;
		line-height:50px;
		z-index:10;
		.left{
			float:left;
			width:100px;
			
			span{
				margin-left:5px;
			}
		}
		.right{
			float:right;
			margin-right:5px;
			
		}
	}

</style>