"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};

  return (
    <div className="container flex flex-col items-center min-h-screen justify-center">
      <h1>Login page</h1>
      <hr />
      

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

      <label htmlFor="password"> email</label>
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
        onClick={onLogin}>
        Login Here
      </button>
      <Link href='/signup'> visit Signup page</Link>
    </div>
  );
}
