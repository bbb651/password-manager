<script lang="ts">
	import type { Password } from "./types/Password";
	export let passwords: Password[];
</script>

<table>
	<tr>
		<td>Title</td>
		<td>Password</td>
		<td>Username</td>
		<td>URL</td>
		<td>Notes</td>
	</tr>
	{#each passwords as password}
		<tr>
			<td>{password.title ?? ""}</td>
			<td>{password.password}</td>
			<td>{password.username ?? ""}</td>
			<td
				>{#if password.url}
					<a
						href={password.url.startsWith("https://")
							? password.url
							: `https://${password.url}`}
						target="_blank">{password.url}</a
					>
				{/if}</td
			>
			<td>{password.notes ?? ""}</td>
		</tr>
	{/each}
</table>

<style>
	table {
		margin-left: auto;
  		margin-right: auto;
		border-spacing: 25px;
	}
</style>
