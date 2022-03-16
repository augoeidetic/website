import React from "react"
import Link from "next/link"

export default function Home() {
  return <div>
    <nav class="grid grid-cols-2 grid-rows-1">
    <input class="" type="text" placeholder="type..."/>

    <ul class="text-right list-none grid grid-cols-4 grid-rows-1">
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/tech"><a>Tech</a></Link></li>
      <li><Link href="/food"><a>Food</a></Link></li>
      <li><Link href="/fiction"><a>Fiction</a></Link></li>
    </ul>
    </nav>
  </div>
}
