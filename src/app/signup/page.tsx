"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    if (user.email.length >0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false);
    }
    else {
      setButtonDisabled(true);
    }
  }, [user])

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup',user);
      console.log('success',response.data);
      router.push('/login')

    } catch (error: any) {
      console.log("signup Failedd", error.message);
      toast.error(error.message)

    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="container flex flex-col items-center min-h-screen justify-center">
      <h1>{loading?'Loading ':'SignUp'}</h1>
      <hr />
      <label htmlFor="username"> username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 rounded-md text-black "
      ></input>

      <label htmlFor="email"> email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 rounded-md text-black "
      ></input>

      <label htmlFor="password"> password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 rounded-md text-black "
      ></input>
      <button 
        className="p-2 border rounded-md m-2" 
        onClick={onSignup}>
        {buttonDisabled ? "No Signup": "Signup"}
      </button>
      <Link href='/login'> visit login page</Link>
    </div>
  );
}
