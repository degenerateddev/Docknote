const redis = require("../lib/redis/client")
const uuid = require("uuid").v4;

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();

        const content = data.get("content");
        const note_uuid = uuid.v4();

        await redis.save(note_uuid, content);
	}
};