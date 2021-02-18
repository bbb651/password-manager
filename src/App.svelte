<script lang="ts">
	import PasswordTable from "./PasswordTable.svelte";
	import PasswordForm from "./PasswordForm.svelte";
	import type { Password } from "./types/Password";

	let passwords: Password[] = [];

	const addPassword = (password: Password) => {
		passwords = [...passwords, password];
	};
</script>

<main>
	<h1>Password Manager</h1>
	<PasswordTable {passwords} />
	<PasswordForm {addPassword} />	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #fff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
	@media (prefers-color-scheme: light) {
		h1 {
			color: #ff3e00;
		}
	}
</style>