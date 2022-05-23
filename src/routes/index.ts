export async function get() {
	const products = [
		{
			id: 0,
			src: 'images/ropa1.webp',
			alt: 'Vestido lago rojo',
			price: 90
		},
		{
			id: 1,
			src: 'images/ropa2.webp',
			alt: 'Vestido de noche negro',
			price: 100
		},
		{
			id: 2,
			src: 'images/ropa3.webp',
			alt: 'Vestido colorido',
			price: 110
		},
		{
			id: 3,
			src: 'images/ropa4.webp',
			alt: 'Pantalon blanco',
			price: 120
		}
	];
	return {
		body: {
			products
		}
	};
}
