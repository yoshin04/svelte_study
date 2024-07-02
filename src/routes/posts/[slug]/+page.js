/**
 * @typedef {Object} Params
 * @property {string} slug
 */

/**
 * @param {{ params: Params }} context
 * @returns {Promise<{ post: any }>}
 */
export async function load({ params }) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
	return {
		post: response.ok && (await response.json())
	};
}
