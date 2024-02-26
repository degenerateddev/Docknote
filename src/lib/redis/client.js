import { createClient } from "redis";
//import { REDIS_URL } from "$env/static/private";

const client = createClient({
    url: process.env["REDIS_URL"]
})

var state = 0;

client.on("error", (error) => {
    console.error(error);
});

async function connect() {
    if (state === 0) {
        await client.connect();
        state = 1;
    };
    console.log("Redis connected");
} 

async function disconnect() {
    await client.quit();
    state = 0;
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

export default { connect, disconnect, save, get, del, state };
