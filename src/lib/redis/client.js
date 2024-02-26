import { createClient } from "redis";

const client = createClient({
    url: process.env["REDIS_URL"]
})

client.on("error", (error) => {
    console.error(error);
});

async function connect() {
    console.log(client.connected)
    if (!client.connected) {
        await client.connect();

        console.log("Redis connected");
    }
}

async function disconnect() {
    if (client.connected) {
        await client.quit();
        console.log("Redis disconnected");
    }
}

/**
 * Asynchronously saves the given key-value pair using the client.
 *
 * @param {string} key - The key to save the value with
 * @param {any} value - The value to be saved
 * @return {Promise<void>} A Promise that resolves when the key-value pair is saved
 */
async function save(key, value) {
    await client.set(key, value);
}

/**
 * Asynchronously retrieves a note from the client using the provided key, and then deletes the note from the client before returning it.
 *
 * @param {string} key - The key used to retrieve the note from the client
 * @return {Promise<object>} The note retrieved from the client
 */
async function get(key) {
    const note = await client.get(key);

    await del(key);

    return note;
}

/**
 * Asynchronously deletes the specified key from the client.
 *
 * @param {string} key - The key to be deleted
 */
async function del(key) {
    await client.del(key);
}

export default { connect, disconnect, save, get, del };
