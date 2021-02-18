<script lang="ts">

	export let addPassword;

	let title;
	let password;
	let username;
	let url;
	let notes;

	const submit = (e) => {
		// Safe guard to keep undefined or empty passwords from going through
		if (!password)
			return;
		addPassword({title, password, username, url, notes});
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
	<input type="text" id="notes" name="notes" bind:value={notes}>
	<br>
	<input disabled={!password} type="submit" id="submit" value="Add password">
</form>

<style>
</style>