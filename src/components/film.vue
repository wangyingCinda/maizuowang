<template>
	<div>
		<div class="head">
			<router-link to="/film/nowfilm" tag="p" activeClass="active" class="now">正在热映</router-link>
			<router-link to="/film/willFilm" tag="p" activeClass="active" class="will">即将上映</router-link>
		</div>
		<section>
			<router-view></router-view>
		</section>	
	</div>	
</template>

<script>

	export default{
		name:'film',
		mounted(){
			this.$store.commit("changeHeadName","卖座电影")
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
	.head{
		width:100%;
		height:30px;
		border-bottom:1px solid orange;
		line-height:30px;
		.now{
			float:left;
			width:50%;
			height:28px;
		}
		.will{
			float:right;
			width:50%;
			
		}
		.active{
			border-bottom:3px solid orange;
			height:28px;
		}
		a{
			display:block;
		}
	}

</style>