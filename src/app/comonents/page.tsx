import Link from "next/link"

export default function Navbar(){
    return(
        <div className="bg-gray-950 p-5 m-2 rounded-3xl hover:bg-gray-600 flex justify-evenly ">
            <Link href="/" className="text-white text-2xl hover-bg-white hover:text-black">Home</Link>
            <br/>
            <Link href = "/intro" className="text-white text-2xl hover:text-black">Intro</Link>
            <br/>
            <Link href = "/qualifications" className="text-white text-2xl hover:text-black">Qualifications</Link>
            <br/>
            <Link href="/contact" className="text-white text-2xl hover:text-black">Contact</Link>
            <br/>
            <Link href="/about" className="text-white text-2xl hover:text-black">About</Link>
            <br/>
        </div>
    )
}