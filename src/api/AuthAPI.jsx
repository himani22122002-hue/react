import{signInWithEmailAndPassword,getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebaseConfig";
//let auth=getAuth()
export const LoginAPI = async (email, password) => {
  const res = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhk6dHA5RCILSRN18k8V-1SgsHT3xqQD8',
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.error.message);
  return data;
};


export const RegisterAPI = (email, password) => {
    try{
        let response=createUserWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch(err){
        return err;
    }
};