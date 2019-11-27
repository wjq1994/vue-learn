<template>
	
	<div class="a">
		<!-- component a -->
		<slot name="aa"></slot>
	</div>
	
	<div class="b">
	<!-- component b -->
		<a>
			<slot name="aa" slot='aa'></slot>
		</a>
	</div>
	<div class="c">
		<b>
			<div slot='aa'>
				6666
			</div>
		</b>
	</div>
</template>

<script>
</script>

<style>
</style>
