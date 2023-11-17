"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <div className="container flex flex-col items-center min-h-screen justify-center">
      <h1>Signup page</h1>
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
        onClick={onSignup}>
        sign up
      </button>
      <Link href='/login'> visit login page</Link>
    </div>
  );
}
