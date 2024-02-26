<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
	  import FormCmptAge from './form-cmpt-age.svelte';
    import FormCmptName from './form-cmpt-name.svelte';
  
    export let data;
    const spF = superForm(data.form);

    const {form} = spF;

    
  </script>
  

  <form method="POST">
    <input type="text" bind:value={$form.name} name="name"/>
    <input type="number" bind:value={$form.age} name="age"/>

    <button>Submit</button>
  </form>