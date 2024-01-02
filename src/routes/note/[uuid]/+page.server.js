import redis from "$lib/redis/client";


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const note = await redis.get(params.uuid)
    
    return {
        note
    }
}