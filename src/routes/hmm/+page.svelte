<script lang="ts">
  import { defaults, formFieldProxy, superForm } from 'sveltekit-superforms';
	import { userSchema } from './schema.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	  

    const formData = defaults({ name: 'First name'}, zod(userSchema))

    export const spForm = superForm(formData, {
      validators: zod(userSchema),
      validationMethod: 'auto',
      dataType: 'form',
      onSubmit: (e) => {
        console.log('onSubmit',  {data: [...e.formData]}) // <== Will differ from in-memory data
      },
    });

    const {enhance, form}  = spForm;

    const fieldProxy = formFieldProxy(spForm, 'name');

    onMount(() => {
      fieldProxy.value.set(undefined as any);
      console.log('In-memory data', get(spForm.form)); // <== Compare to onSubmit
      spForm.submit();
    });
  </script>
  
<form use:enhance method="POST">
    <input name="name" bind:value={$form.name} />
    <button type="submit">Save</button>
</form>
  
