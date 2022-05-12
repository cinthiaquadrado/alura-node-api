import mongoose from "mongoose"

const password = encodeURIComponent("<Coloque aqui sua senha>")

mongoose.connect(`mongodb+srv://alura:${password}@alura.k5ff7.mongodb.net/alura-node`);

let db = mongoose.connection;

export default db;