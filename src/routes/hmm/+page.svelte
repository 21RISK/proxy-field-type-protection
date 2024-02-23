<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
	  import FormCmptAge from './form-cmpt-age.svelte';
    import FormCmptName from './form-cmpt-name.svelte';
  
    export let data;
    const form = superForm(data.form);
  </script>
  

  <FormCmptAge {form} field="age"/>
  <FormCmptAge {form} field="name"/>

  <FormCmptName {form} field="name"/>
