<script lang="ts">
	import { goto } from '$app/navigation';

	function handleCart() {
		goto('/cart');
	}
</script>

<nav class="navbar navbar-expand-lg bg-light">
	<div class="container">
		<a class="navbar-brand" href="!">SJCE STORE</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="!navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">HOME</a>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link" href="/">PRODUCTS</a>
				</li> -->
				<!-- <li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="!"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Dropdown
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="!">Action</a></li>
						<li><a class="dropdown-item" href="!">Another action</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="!">Something else here</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled">Disabled</a>
				</li> -->
			</ul>
			<form class="d-flex" role="search">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
			<div class="mx-3">
				<i class="fa-solid fa-bag-shopping fa-2xl icon" on:click={handleCart} />
			</div>
		</div>
	</div>
</nav>

<style>
	.icon {
		cursor: pointer;
	}
</style>
