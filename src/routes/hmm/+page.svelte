<script lang="ts">
  import { defaults, formFieldProxy, superForm } from 'sveltekit-superforms';
	import { userSchema } from './schema.js';
	import { zod } from 'sveltekit-superforms/adapters';

	
    const formData = defaults(
      /**
       * Undefined should not be allowed here.
      */
        { name: 'First name', lastName: undefined },
        zod(userSchema)
    )

   
  </script>

  
