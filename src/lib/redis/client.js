import { createClient } from "redis";

const client = createClient({
    url: process.env.REDIS_URL,
})

var state = 0;

client.on("error", (error) => {
    console.error(error);
});

async function connect() {
    await client.connect();
    
    if (client.connected === true && state === 0) {
        state = 1;
    };
    console.log("Redis connected");
} 

async function disconnect() {
    await client.quit();
    state = 0;
}

async function save(key, value) {
    await client.set(key, value);
}

async function get(key) {
    const note = await client.get(key);

    await del(key);

    return note;
}

async function del(key) {
    await client.del(key);
}

export default { connect, disconnect, save, get, del, state };