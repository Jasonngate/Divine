import bcrypt from "bcrypt";

const password = "Divinemiracle@1234"; // choose your admin password
const hash = await bcrypt.hash(password, 10);
console.log("Hash:", hash);
