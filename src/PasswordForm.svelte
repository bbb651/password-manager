<script lang="ts">

	export let addPassword;

	let title: string;
	let password: string;
	let username: string;
	let url: string;
	let notes: string;

	const submit = (e) => {
		// Safe guard to keep undefined or empty passwords from going through
		if (!password)
			return;
		addPassword({title, password, username, url, notes});
		title = "";
		password = "";
		username = "";
		url = "";
		notes = "";
	};
</script>

<form on:submit|preventDefault={submit}>
	<label for="title">Title:</label>
	<input type="text" id="title" name="title" bind:value={title}>
	<label for="password">Password:</label>
	<input type="password" id="password" name="password" bind:value={password}>
	<label for="username">Username:</label>
	<input type="text" id="username" name="username" bind:value={username}>
	<label for="url">URL:</label>
	<input type="text" id="url" name="url" bind:value={url}>
	<label for="notes">Notes:</label>
	<textarea name="notes" id="notes" bind:value={notes}></textarea>
	<br>
	<input disabled={!password} type="submit" id="submit" value="Add password">
</form>

<style>
	textarea {
		width: 300px;
		height: 100px;
	}
</style>