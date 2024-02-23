<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
	  import FormCmptAge from './form-cmpt-age.svelte';
    import FormCmptName from './form-cmpt-name.svelte';
    import { defaults } from 'sveltekit-superforms/server';






    import { zod } from 'sveltekit-superforms/adapters';
	import { userSchema } from './schema';

    export let data;
    const form = superForm(data.form);

    const formValidated = defaults(zod(userSchema));
  </script>
  

  <FormCmptName {form} field="name"/>
  <FormCmptAge {form} field="name"/>

