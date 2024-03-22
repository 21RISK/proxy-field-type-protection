<script lang="ts">
  import { defaults, formFieldProxy, superForm } from 'sveltekit-superforms';
	import { userSchema } from './schema.js';
	import { zod } from 'sveltekit-superforms/adapters';
	  

    const formData = defaults({ name: 'First name'}, zod(userSchema))

    export const spForm = superForm(formData, {
      
      onChange: (e) => {
        console.log('onChange', e)
      },
      onError: (e) => {
        console.log('onError', e)
      },
      onResult: (e) => {
        console.log('onResult', e)
      },
      onUpdated: (e) => {
        console.log('onUpdated', e)
      },
      onUpdate: (e) => {
        console.log('onUpdate', e)
      },
      onSubmit: (e) => {
        console.log('onSubmit', e)
      }
    });

    const {enhance, form}  = spForm;


  </script>
  
<button type="button" on:click={() => spForm.reset()}>Reset</button>

<form use:enhance method="POST">
    <input name="name" bind:value={$form.name} />
    <button type="submit">Save</button>
</form>
  
