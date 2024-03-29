import redis from "$lib/redis/client";


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	await redis.connect();
    
	const response = await resolve(event);
	return response;
}