import redis from "../lib/redis/client";
import { v4 as uuid } from "uuid";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
                const data = await request.formData();

                const content = data.get("content");
                const note_uuid = uuid();

                await redis.save(note_uuid, content);

                return {
                        success: true,
                        uuid: note_uuid
                }
        }
};