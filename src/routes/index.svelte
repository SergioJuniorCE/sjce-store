<script lang="ts">
	import { onMount } from 'svelte';

	export let products: any[];
	let minPrice: number = 0;
	let maxPrice: number;

	onMount(() => {
		minPrice = products[0].price;
		maxPrice = products[products.length - 1].price;
	});

	function handleAddToCart(id: number) {
		let cart = JSON.parse(localStorage.getItem('cart') || '[]');
		if (isItemInCart(id)) {
			cart = cart.map((item: any) => {
				if (item.id === id) {
					item.quantity++;
				}
				return item;
			});
		} else {
			cart.push({ id, quantity: 1 });
		}
		localStorage.setItem('cart', JSON.stringify(cart));
		console.log(cart);
	}

	function isItemInCart(id: number) {
		let cart = JSON.parse(localStorage.getItem('cart') || '[]');
		return cart.includes(id);
	}
</script>

<div class="row mt-3">
	<div class="col-sm-3" style="background-color: aqua;">
		<h3 class="text-center">Filters</h3>
		<div class="mx-5">
			<div class="form-check">
				<input
					type="checkbox"
					class="form-check-input"
					name=""
					id=""
					value="checkedValue"
					checked
				/>
				<label class="form-check-label" for=""> Show in stock </label>
			</div>
			<div class="d-flex">
				<div class="mb-3">
					<label for="minPriceSelect" class="form-label">Min Price</label>
					<input
						type="number"
						class="form-control"
						name="minPriceSelect"
						id="minPriceSelect"
						aria-describedby="minPriceSelect"
						placeholder={minPrice.toString()}
						min="{minPrice}"
					/>
					<small id="minPriceSelect" class="form-text text-muted">minPriceSelect</small>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-9">
		<div class="container mt-3 ml-0 pl-0">
			<h2 class="text-center">ROPA</h2>
			<div class="row">
				{#each products as image, i}
					<div class="col-sm-3">
						<img src={image.src} alt={image.alt} height="60%" />
						<p class="text-start">
							{image.alt}
							<span class="fw-bold text-decoration-underline" style="color: black"
								>${image.price}</span
							>
						</p>
						<button type="button" class="btn btn-primary" on:click={() => handleAddToCart(image.id)}
							>Add to cart</button
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
