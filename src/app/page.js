import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import bgImage from '/gradient.png';

export default function Home() {
    return (

           <main className="flex min-h-screen w-full flex-col items-center overflow-clip">
                <Navbar></Navbar>

                <div className="w-full">
                    <div>
                        <Hero className="min-h-screen h-full"></Hero>
                    </div>
                    <div className="w-full flex justify-center py-32">
                        <div className="w-11/12 max-w-[1500px]">
                            <h1 className="text-4xl text-center font-bold">
                                What Can I Achieve In SERC?
                            </h1>
                            <div className="grid grid-cols-3 gap-x-6">
                                <div className="text-center">
                                    <h2>Elevate Your Professional Profile</h2>
                                    <p>Build a compelling resume and portfolio by actively contributing to hands-on projects. Through our club, you will have opportunities to showcase your practical skills setting you apart in the eyes of potential employers. Join us in crafting real-world solutions that demonstrate your competence and dedication to the field.</p>
                                </div>
                                <div className="text-center">
                                    <h2>Cultivate a Dynamic Community</h2>
                                    <p>Forge lasting connections with like-minded software engineering enthusiasts. Our club provides a dynamic community where students collaborate, share insights and support each other in academic and professional pursuits. Through collaborative projects be part of a network that cultivates growth innovation and camaraderie.</p>
                                </div>
                                <div className="text-center">
                                    <h2>Sharpen Your Technological Expertise</h2>
                                    <p>Immerse yourself in a dynamic learning environment designed to sharpen your technical prowess. As a club member access resources and hands-on experiences that go beyond the classroom. Whether you are a coding novice or seasoned developer our club is the ideal platform to refine your technology skills explore various tools and push the boundaries of your capabilities.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
             <Footer></Footer>
         </main>
    )
}
