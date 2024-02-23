<script lang="ts">
    import { superForm } from 'sveltekit-superforms';  

    export let data;
    const form = superForm(data.form);

    async function formShouldBeInvalid() {
      const body = new FormData();
      const response = await fetch('?/testStrict', {
        method: 'POST',
        body,
      });
      
      console.log('Response ok is', response.ok);

      const asText = await response.text();
      console.log(`Response as text: `, asText);
    }
  </script>
  

  <button on:click={formShouldBeInvalid}>Test validation</button>


