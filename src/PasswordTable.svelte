<script lang="ts">
	import type { Password } from "./types/Password";
	export let passwords: Password[];

	const copy = (e: MouseEvent) => {
		console.log(e);
		const entry: HTMLElement = (e.target as HTMLElement).parentElement;
		navigator.clipboard.writeText(entry.children[1].textContent);
	};
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
			<td>
				{password.password}
			</td>
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-clipboard"
				viewBox="0 0 16 16"
				on:click={copy}
			>
				<path
					d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
				/>
				<path
					d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
				/>
			</svg>
		</tr>
	{/each}
</table>

<style>
	table {
		margin-left: auto;
		margin-right: auto;
		border-spacing: 25px;
	}

	.bi {
		display: inline-block;
		vertical-align: middle;
	}
</style>
