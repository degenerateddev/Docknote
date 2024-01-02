import { createClient } from "redis";

const client = createClient();

export var state = 0;

client.on("error", (error) => {
    console.error(error);
});

export async function connect() {
    await client.connect();
    
    if (client.connected === true && state === 0) {
        state = 1;
    };
    console.log("Redis connected");
} 

export async function disconnect() {
    await client.quit();
    state = 0;
}

export async function save(key, value) {
    await client.set(key, value);
}

export async function get(key) {
    const note = await client.get(key);

    await del(key);

    return note;
}

export async function del(key) {
    await client.del(key);
}