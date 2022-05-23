export async function get() {
	const images = [
		{
			id: 0,
			src: 'images/ropa1.webp',
			alt: 'Vestido lago rojo',
			price: 100
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
			price: 100
		},
		{
			id: 3,
			src: 'images/ropa4.webp',
			alt: 'Pantalon blanco',
			price: 100
		}
	];
	return {
		body: {
			images
		}
	};
}
