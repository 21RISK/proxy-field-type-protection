<script lang="ts">
    import {  superForm } from 'sveltekit-superforms';
	import ProxyCmptExpectsString from './proxy-cmpt-expects-string.svelte';
  
    export let data;
    const form = superForm(data.form);

  </script>
  
<ProxyCmptExpectsString {form} formPath="age" />
