import React from "react"
import Link from "next/link"

export default function Home() {
  return <div>
    <nav className="flex header">
      <input className="" type="text" placeholder="type..." />

      <button className="mobile-header-menu-toggle" aria-controls="header-menu" aria-expanded="false"><span className="sr-only">Menu</span></button>

      <ul id="header-menu" className="flex header-menu" data-visible="false">
        <li><Link href="/"><a><span aria-hidden="true">00</span>Home</a></Link></li>
        <li><Link href="/tech"><a><span aria-hidden="true">01</span>Tech</a></Link></li>
        <li><Link href="/food"><a><span aria-hidden="true">02</span>Food</a></Link></li>
        <li><Link href="/fiction"><a><span aria-hidden="true">03</span>Fiction</a></Link></li>
      </ul>
    </nav>
  </div>
}
