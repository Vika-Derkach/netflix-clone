import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";
export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {}, []);
}
