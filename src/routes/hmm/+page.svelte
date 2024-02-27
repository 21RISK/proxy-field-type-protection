<script lang="ts">
  import { defaults, formFieldProxy, superForm } from 'sveltekit-superforms';
	import { userSchema } from './schema.js';
	import { zod } from 'sveltekit-superforms/adapters';
	import { onMount, tick } from 'svelte';
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

    onMount(async () => {
      fieldProxy.value.set(undefined as any);
      await tick();
      console.log('In-memory data', get(spForm.form)); // <== Compare to onSubmit
      setTimeout(() => {
        spForm.submit();
      }, 100)
    });
  </script>
  
<form use:enhance method="POST">
    <input name="name" bind:value={$form.name} />
    <button type="submit">Save</button>
</form>
  
