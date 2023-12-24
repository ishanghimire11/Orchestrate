import mongoose from "mongoose"

const MONDODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null, promise: null}

export const connectDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONDODB_URI) throw new Error("check mongo uri");

    cached.promise = cached.promise || mongoose.connect(MONDODB_URI, {
        dbName: "Orchestrate",
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}