<script lang="ts">
  import { defaults, formFieldProxy, superForm } from 'sveltekit-superforms';
	import { userSchema } from './schema.js';
	import { zod } from 'sveltekit-superforms/adapters';
	  

    const formData = defaults({ name: 'First name'}, zod(userSchema))

    export const spForm = superForm(formData, {
      
      onError: (e) => {
        console.log('onError', e)
        console.log('code is', e.result.error.code) // <== Typescript is wrong when offline!
      }
    });

    const {enhance, form}  = spForm;


  </script>
  
<form use:enhance method="POST">
    <input name="name" bind:value={$form.name} />
    <button type="submit">Save</button>
</form>
  
