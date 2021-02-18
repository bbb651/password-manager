<script lang="ts">

	let title;
	let password;
	let username;
	let url;
	let notes;

	const submit = (e) => {
		console.log({title, password, username, url, notes});
	};
</script>

<form on:submit|preventDefault={submit}>
	<label for="title">Title:</label>
	<input type="text" id="title" name="title" bind:value={title}>
	<label for="password">Password:</label>
	<input type="text" id="password" name="password" bind:value={password}>
	<label for="username">Username:</label>
	<input type="text" id="username" name="username" bind:value={username}>
	<label for="url">URL:</label>
	<input type="text" id="url" name="url" bind:value={url}>
	<label for="notes">Notes:</label>
	<input type="text" id="notes" name="notes" bind:value={notes}>
	<br>
	<input type="submit" id="submit" value="Add password">
</form>

<style>
	#submit {
		cursor: pointer;
	}
</style>