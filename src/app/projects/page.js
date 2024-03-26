import Images from 'next/image'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export default function Projects(){
    return(
        <main className="flex min-h-screen w-full flex-col items-center overflow-clip">

          <Navbar></Navbar>

          <div className="w-auto">                      
              <div class="flex items-center justify-center bg-gradient-to-r from-indigo-950 lg:py-16 md:py-8 sm:py-4">
                <div class="w-auto">
                    <h1
                    class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-7 pt-4 lg:text-9xl md:text-5xl sm:text-3xl text-white">
                    current projects
                    </h1>
                </div>
               </div>

              <div className={"bg-gradient-to-r from-indigo-950 w-full flex justify-center py-8"}>
                  <div className={"w-11/12 max-w-[2500px] grid grid-rows-3 gap-3.5"}>

                    {/* First box */}
                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center transition-all duration-300 filter grayscale hover:grayscale-0">
                              <div className="avatar">
                                  <div className="lg:w-72 rounded">
                                  <Images className="5x1 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer ease-in-out hover:scale-110" src="/programming-skills.png" alt="brain" height={500} width={500} />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-12 prose lg:prose-md"}>
                                  <h1 class="lg:text-5xl md:text-3xl sm:text-xl">
                                    Club Website                          
                                  </h1>

                                  <p class="lg:text-2xl md:text-xl sm:text-m text-gray-200 py-8">The most vital element of an organization is recognizability. We are currently in development of a visually pleasing, informative website that caters to anyone who may want to know more about what we do.</p>
                                 
                                  <div p-10>
                                    <button class="btn btn-active text-sky-100 bg-red-500 hover:bg-red-700"><a href="https://ser-website.vercel.app" target="_blank" >Useless Button</a></button>
                                </div>
                              </div>

                          </div>
                      </div>

                    {/* Second box */}            
                      <div className={"row-start-2 py-4"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between transition-all duration-300 filter grayscale hover:grayscale-0">
                              <div className="avatar">
                                  <div className="lg:w-72 rounded">
                                  <Images className="5x1 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer ease-in-out hover:scale-110" src="/rust.png" alt="website's under construction!" height={500} width={500} />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1 class="lg:text-5xl md:text-3xl sm:text-xl">
                                    Rust Proof-of-Concept
                                  </h1>

                                  <p class="lg:text-2xl md:text-xl sm:text-m py-8">
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
                                  <div className="lg:w-72 rounded">
                                  <Images className="5x1 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer ease-in-out hover:scale-110" src="/network1.jpg" alt="brain" height={500} width={500} />
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1 class="lg:text-5xl md:text-3xl sm:text-xl">
                                    Next Projects
                                  </h1>

                                  <p class="lg:text-2xl md:text-xl sm:text-m py-8">
                                    What kind of projects would you like to see? Leave an idea below!
                                  </p>
                                  
                                  <input type="text" placeholder="Project idea..." class="input input-bordered w-full max-w-fs rounded"></input>

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
