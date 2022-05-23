<script lang="ts">
	export let images: any[];

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
		console.log(cart)
	}

	function isItemInCart(id: number) {
		let cart = JSON.parse(localStorage.getItem('cart') || '[]');
		return cart.includes(id);
	}
</script>

<div class="container mt-3">
	<h2 class="text-center">ROPA</h2>
	<div class="row">
		{#each images as image, i}
			<div class="col-sm-3 mt-3">
				<img src={image.src} alt={image.alt} height="60%" />
				<p class="text-start">
					{image.alt}
					<span class="fw-bold text-decoration-underline" style="color: black">${image.price}</span>
				</p>
				<button type="button" class="btn btn-primary" on:click={() => handleAddToCart(image.id)}
					>Add to cart</button
				>
			</div>
		{/each}
	</div>
</div>
