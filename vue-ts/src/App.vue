<template>
	<div id="app">
		<img src="./assets/logo.png" />
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue {}

</script>

