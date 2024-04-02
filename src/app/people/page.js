import Image from 'next/image'
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import bgImage from '/gradient.png';

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center overflow-clip">

          <Navbar></Navbar>

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">This is the Software Engineering Readiness Club!</p>
                </div> 
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                    {/* Michael Stickley */}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Michael Stickley</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">President</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">President of the Software Engineering Readiness Club.</p>
                        </div>
                    </div> 

                    {/*Kaelyn Hayie*/}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://plus.unsplash.com/premium_photo-1709311441238-1c83ef3b8d04?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jese Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Kaelyn Hayie</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">President</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">President of the Software Engineering Readiness Club.</p>
                        </div>
                    </div> 

                    {/* Tyler Sackel*/}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1523910088385-d313124c68aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Michael Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Tyler Sackel</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">Software Project Management</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">...</p>
                        </div>
                    </div> 

                    {/* Jeffrey Vandever */}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1543357480-c60d40007a3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sofia Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jeffrey Vandever</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">Software Project Management</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">...</p>
                        </div>
                    </div>  

                    {/* Jack Harris */}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1507653277963-9e61d03704f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jack Harris</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">Software Engineer</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Literally Ryan Gostling</p>
                        </div>
                    </div> 

                    {/* Gideon Walker */}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1614638964086-bb493cd8feb1?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jese Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Gideon Walker</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">Software Engineer / System Designer</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Gideon leads design.</p>
                        </div>
                    </div> 

                    {/* Loc Nguyen */}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1634707983128-0236c567a345?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bonnie Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Loc Nguyen</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">Club Officer</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">The man the myth the legend.</p>
                        </div>
                    </div> 

                    {/* Jonathan Sulgrove */}
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg cropped-profile-picture" src="https://images.unsplash.com/photo-1533398892249-1d93b83b958d?q=80&w=3731&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jese Avatar"/>
                        </a>
                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jonathan Sulgrove</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">Software Advisor</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">...</p>
                        </div>
                    </div> 
                </div>  
            </div>
            </section>
        
          <Footer />

      </main>
  )
}
