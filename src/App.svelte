<script lang="ts">
	import PasswordTable from "./PasswordTable.svelte";
	import PasswordFrom from "./PasswordForm.svelte";
	import type { Password } from "./types/Password";
import PasswordForm from "./PasswordForm.svelte";
	let passwords: Password[] = [
		{password: "p4ssword", username: "coolkid72", title: "Google", url:"google.com", notes: "some notes"},
		{password: "p4SSword", username: "coolkid72", title: "Github", url:"github.com", notes: ""},
		{password: "goodp4ssword", username: "coolkid", title: "Discord", url:"discord.com", notes: "Requires 2FA"},
		{password: "stronGp4ssWORD", username: "coolkid72005", title: "Steam", url:"https://store.steampowered.com/", notes: ""},
		{password: "badpassword", username: "coolkid7", title: "Zoom", url:"zoom.us", notes: ""},
	];

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