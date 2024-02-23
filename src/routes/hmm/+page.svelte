<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
	  import FormCmptAge from './form-cmpt-age.svelte';
    import FormCmptName from './form-cmpt-name.svelte';
  
    export let data;
    const form = superForm(data.form);
  </script>
  

  <FormCmptAge {form} field="age"/>  <!-- Expects a number -->
  <FormCmptAge {form} field="name"/> <!-- Expects a number - but this is a string! -->

  <FormCmptName {form} field="name"/>
