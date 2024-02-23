<script lang="ts" generics="T extends Record<string, unknown>">
	import type { Writable } from 'svelte/store';

    import { 
        formFieldProxy, 
        type SuperForm, 
        type FormPathLeaves 
    } from 'sveltekit-superforms';
    import {onMount} from 'svelte';

    export let form: SuperForm<T>;
    export let field: FormPathLeaves<T>;

    const { value } = formFieldProxy(form, field);
    const valueAsNumber = value as Writable<number>;

    onMount(() => {
        let ole = 234;
        ole += $valueAsNumber;
    });
</script>