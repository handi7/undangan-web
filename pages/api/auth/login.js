import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

export default async function login(req, res) {
  try {
    const { email, password } = req.body;
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
