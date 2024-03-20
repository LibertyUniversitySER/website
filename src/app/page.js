import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center overflow-clip">
        <Navbar />
          <div className="w-full">
            <Hero className={"min-h-screen h-full"}></Hero>
            <br />
            <br />
            <h1>Home Page!</h1>
            <br />
            <br />
          </div>

        <Footer /> 

      </main>
  )
}