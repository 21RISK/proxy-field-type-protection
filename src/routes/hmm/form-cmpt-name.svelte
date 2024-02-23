<script lang="ts" generics="T extends Record<string, unknown>">

    import { 
        formFieldProxy, 
        type SuperForm, 
        type FormPathLeaves 
    } from 'sveltekit-superforms';
    import {onMount} from 'svelte';

    export let form: SuperForm<T>;
    export let field: FormPathLeaves<T>;

    const { value } = formFieldProxy(form, field);

    onMount(() => {
        let name = 'something here';
        name += $value;
    });
</script>