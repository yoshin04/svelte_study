<div class="container">
  <nav class="header">
    <h1 class="title">SvelteKit Demo</h1>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>

  <slot />

  <footer class="footer">
    <h1 class="title">SvelteKit Demo</h1>
  </footer>
</div>

<style>
  :global(body) {
    font-family: Helvetica, Arial, Helvetica, sans-serif;
  }

  .header {
    width: 860px;
    background-color: #ff6600;
    display: flex;
    padding: 5px 0;
  }

  .header > a {
		text-decoration: none;
		color: #000;
		margin-right: 10px;
	}

  .header > a:not(:last-child)::after {
		content: '|';
		margin-left: 10px;
	}

	.title {
		font-size: 1rem;
		margin: 0;
		margin-right: 10px;
	}

	.container {
		width: 860px;
		margin: 0 auto;
		background-color: #f6f6ef;
	}

	.footer {
		border-top: solid 2px #ff6600;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
