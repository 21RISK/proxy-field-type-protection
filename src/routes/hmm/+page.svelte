<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
	  import FormCmptAge from './form-cmpt-age.svelte';
    import FormCmptName from './form-cmpt-name.svelte';
  
    export let data;
    const form = superForm(data.form);
  </script>
  

  <FormCmptName {form} field="name"/>
  <FormCmptAge {form} field="age"/>  
  <FormCmptAge {form} field="homePlanet"/> 

