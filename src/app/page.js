"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const navigation =(name)=>{
    router.push(name)
  }
  return (
    <div>
      Home <br />
      <Link href="/login">Login </Link>
      <br />
      <Link href="/about">About</Link>

      <button onClick={()=>navigation("login")}>Login</button>
      <button onClick={()=>navigation("about")}>About</button>
      <button onClick={()=>navigation("about/about-collage")}>About collage</button>
      <button onClick={()=>navigation("login/student-login")}>Student Login</button>
      <button onClick={()=>navigation("login/teacher-login")}>Teacher Login</button>
      
    </div>
  );
}
