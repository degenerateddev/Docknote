const redis = require("lib/redis/client")


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    if (redis.state === 0) {
		await redis.connect();
	}
    
	const response = await resolve(event);
	return response;
}