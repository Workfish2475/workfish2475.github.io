<script lang="ts">
	import { darkMode } from "./theme.js";

	export const prerender = true;
   </script>
   
   <div class:dark={$darkMode}>
	<slot />
   </div>
   
   <style>
   :global(body) {
	margin: 0;
	padding: 0;

	transition: background-color 0.3s, color 0.3s;
   }
   
   .dark {
	background-color: black;
	color: white;
   }
   
   .dark :global(*) {
	transition: background-color 0.3s, color 0.3s;
   }
   </style>