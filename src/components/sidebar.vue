

<template>
	<transition name="bounce">	
		<div class="content">
			
			<ul @click="liClick">
				<!-- <routuer-link v-for="data in datalist" to="/data" tag="li">{{data}}</routuer-link> -->
				<!-- <li v-for="data in datalist" activeClass="active">{{data}}</li> -->
				<router-link to="/home" tag="li" activeClass="active" >home</router-link>
				<router-link to="/film" tag="li" activeClass="active" >film</router-link>
				<router-link to="/detail" tag="li" activeClass="active" >detail</router-link>
			</ul>
		
		</div>
	</transition>
</template>

<script>
	
	export default {
		name:'sidebar',
		data(){
			return {
				datalist:["home","film","detail"]
			}
		},
		methods:{
			liClick(){
				this.$emit("events")
				console.log("li");
			}
		}
	}

</script>

<style lang="scss" scoped> 
	
	*{margin:0;padding:0;}
	.content{
		width:200px;
		background:black;
		color:white;
		height:620px;
		position:fixed;
		left:0;
		top:49px;
		background:black;
		z-index:10;
	}
	 .bounce-enter-active {
	    animation: bounce-in .5s;
	  }
	  .bounce-leave-active {
	    animation: bounce-in .5s reverse;
	  }
	  @keyframes bounce-in {
	    0% {
	      transform: translateX(-100%);
	      opacity: 0;
	    }
	    
	    100% {
	      transform: translateX(0px);
	      opacity: 1;
	    }
	  }
	ul{
		width:100%;
		height:100%;
		margin-top:10px;
		margin-left:10px;
		color:white;
		list-style:none;
		display:fixed;
		left:0;
		top:0;
		li{
			text-align:left;
			height:50px;
			font-size:20px;
			line-height:50px;
			width:100%;
			margin-left:-10px;
		}
		.active{
			background:red;
		}
	}


</style>

