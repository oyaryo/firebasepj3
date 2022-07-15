import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default async function ({ redirect }) {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.uid);

  const db = getFirestore();
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.data().ticket) {
    console.log("Document data:", docSnap.data().ticket);
  } else {
    console.log("No such document!");
    redirect("ShopPage");
  }
}
