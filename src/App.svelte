<script lang="ts">
	import PasswordTable from "./PasswordTable.svelte";
	import PasswordForm from "./PasswordForm.svelte";
	import type { Password } from "./types/Password";
import { onMount } from "svelte";

	let passwords: Password[] = [];

	onMount(() => {
		passwords = JSON.parse(window.localStorage.getItem("passworddatabase")) || [];
	});

	const storeDatabase = () => {
		window.localStorage.setItem("passworddatabase", JSON.stringify(passwords));
	};

	const addPassword = (password: Password) => {
		passwords = [...passwords, password];
	};
</script>

<main>
	<h1>Password Manager</h1>
	<PasswordTable {passwords} {storeDatabase} />
	<PasswordForm {addPassword} {storeDatabase} />	
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