<script lang="ts">
	import PasswordTable from "./PasswordTable.svelte";
	import type { Password } from "./types/Password";
	const passwords: Password[] = [
		{password: "p4ssword", username: "coolkid72", title: "Google", url:"google.com", notes: "some notes"}
	];
</script>

<main>
	<h1>Password Manager</h1>
	<PasswordTable {passwords} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>