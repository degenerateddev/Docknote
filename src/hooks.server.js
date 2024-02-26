import redis from "$lib/redis/client";


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	console.log(redis.state)
    if (redis.state === 0) {
		await redis.connect();
	}
    
	const response = await resolve(event);
	return response;
}