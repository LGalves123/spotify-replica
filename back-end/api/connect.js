// JavaScript Assíncrono
// await async
// FullFilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://lgalvesbadures:h71eg6qQDCExZlIY@projeto-spotify.irwlj.mongodb.net/?retryWrites=true&w=majority&appName=Projeto-Spotify";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);
