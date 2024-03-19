import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Projects(){
    return(
        <main className="flex min-h-screen w-full flex-col items-center overflow-clip">

          <Navbar></Navbar>

          <div className="w-full">                      
              <div class="flex items-center justify-center bg-gradient-to-r from-indigo-950 py-16">
                <div class="w-max">
                    <h1
                    class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-7 text-9xl text-white">
                    current projects
                    </h1>
                </div>
               </div>

              <div className={"bg-gradient-to-r from-indigo-950 w-full flex justify-center py-28"}>
                  <div className={"w-11/12 max-w-[2500px] grid grid-rows-3 gap-3.5"}>

                    {/* First box */}
                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center transition-all duration-300 filter grayscale hover:grayscale-0">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <img className="rounded 5x1 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer ease-in-out hover:scale-110" src="https://www.springboard.com/blog/wp-content/uploads/2022/08/programming-skills.png" alt="websites under construction!"/>
                                     
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-12 prose lg:prose-md"}>
                                  <h1 class="text-5xl">
                                    Club Website                          
                                  </h1>

                                  <p class="text-2xl text-gray-200 py-8">The most vital element of an organization is recognizability. We are currently in development of a visually pleasing, informative website that caters to anyone who may want to know more about what we do.</p>
                                 
                                  <div p-10>
                                    <button href="google.com" class="btn btn-active text-sky-100 bg-red-500 hover:bg-red-700">button to do cool</button>
                                </div>
                              </div>

                          </div>
                      </div>

                    {/* Second box */}            
                      <div className={"row-start-2 py-4"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between transition-all duration-300 filter grayscale hover:grayscale-0">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                  <img className="rounded 5x1 h-auto max-w-lg duration-300 ease-in-out hover:scale-110" src="https://miro.medium.com/v2/resize:fit:709/0*Eqqrv9zVpH99X726.png" alt="rusty crab"/>
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1 class="text-5xl">
                                    Rust Proof-of-Concept
                                  </h1>

                                  <p class="text-2xl py-8">
                                  Utilizing an impressive array of miscellaneous utility and recreational Rust scripts, perfect for mastering the practical applications of the language. 
                                  </p>


                                  <div p-10>
                                    
                                </div>
                              </div>
                          </div>
                      </div>

                      {/* Third Box */}
                      <div className={"row-start-3 py-4"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center transition-all duration-300 filter grayscale hover:grayscale-0">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                  <img className="rounded 5x1 h-auto max-w-lg duration-300 ease-in-out hover:scale-110" src="https://www.unite.ai/wp-content/uploads/2023/05/Featured-Blog-Image-Liquid-Neural-Networks-Definition-Applications-and-Challenges.jpg" alt="rusty crab"/>
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1 class="text-5xl">
                                    Third Project
                                  </h1>

                                  <p class="text-2xl py-8">
                                    A software that accomplishes a given task quickly and efficiently. Don&apos;t ask.
                                  </p>


                                  <div p-10>
                                    
                                </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
        
    )   
}
