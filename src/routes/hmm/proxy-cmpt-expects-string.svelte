<script lang="ts" generics="T extends Record<string, unknown>">
    // Can you type the above generic, so it understands that it should 
    // resolve to a string!?
	import { formFieldProxy, type FormFieldProxy, type FormPathLeaves, type SuperForm } from "sveltekit-superforms";


    export let formPath: FormPathLeaves<T>;
    export let form: SuperForm<T>
    const fieldProxy: FormFieldProxy<string> = formFieldProxy(form, formPath);
    const {value} = fieldProxy;
</script>


<span>Field proxy value</span>
{$value.trim()}