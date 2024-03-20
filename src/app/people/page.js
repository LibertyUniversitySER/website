import Image from 'next/image'
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// import bgImage from '/gradient.png';

export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center overflow-clip">

          <Navbar></Navbar>

          <div className="w-full"> 
              <Hero className={"min-h-screen h-full"}></Hero>
              <div className={"w-full flex justify-center py-32"}>

                  <div className={"w-11/12 max-w-[1500px] grid grid-rows-3 gap-3.5"}>
                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                    {/* <Image scr="https://media.licdn.com/dms/image/D5635AQEMvRhxtgK9rA/profile-framedphoto-shrink_800_800/0/1696107690998?e=1709679600&v=beta&t=ZckiaZ6JQOfv-m_zU-d--aoUATjtbysirXYo_kx2ORU" alt="something" height={500} width={300} /> 
                                     <img src="https://media.licdn.com/dms/image/D5635AQEMvRhxtgK9rA/profile-framedphoto-shrink_800_800/0/1696107690998?e=1709679600&v=beta&t=ZckiaZ6JQOfv-m_zU-d--aoUATjtbysirXYo_kx2ORU" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Michael Stickley
                                  </h1>

                                  <p>
                                      President of the Software Engineer Readiness Club
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>

                          </div>
                      </div>

                      <div className={"row-start-1"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                      <Image src="/Kaylen.jpg" alt="something" height={500} width={300} />
                                      {/* <img src="https://media.licdn.com/dms/image/D4E03AQFNdHdId0GupQ/profile-displayphoto-shrink_800_800/0/1686938297667?e=1714608000&v=beta&t=k7xBUjg7BNDoqnZAh-ulNZdgS31nsd3HXyt8eBn6bGI" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Kaelyn Hayie
                                  </h1>

                                  <p>
                                    President of the Software Engineer Readiness Club
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-2"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                   <Image src="/Tyler.jpg" alt="something" height={500} width={300} />
                                    {/*  <img src="https://media.licdn.com/dms/image/D4E03AQFoSW9GshIVgA/profile-displayphoto-shrink_800_800/0/1695179333127?e=1714608000&v=beta&t=rQcYoNZH2cE_H6nOEkIUhjcucmTlGyzMRe_dKF2zn2g" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                <h1>
                                    Tyler Sackel
                                </h1>

                                <p>
                                    Project Leader
                                </p>
                                
                                <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-2"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                  <Image src="/Person-icon-Graphics.jpg" alt="something" height={500} width={300}/>
                                  {/* <img src="https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1.jpg" alt="person" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                <h1>
                                    Judah Sotomayor
                                </h1>

                                <p>
                                    Project Leader
                                </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-3"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                    <Image scr="/Person-icon-Graphics.jpg" alt="something" height={500} width={300} />
                                    {/*  <img src="https://media.licdn.com/dms/image/D4E35AQFLcNr8lcj9dA/profile-framedphoto-shrink_800_800/0/1692271384846?e=1709679600&v=beta&t=8raGYqWq90SEGtRCndAxdSh1hyMEcKE5NZRc-khwcow" alt="person" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Loc Nguyen
                                  </h1>

                                  <p>
                                      Cyber security professional, Crypto expert.
                                  </p>
                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-3"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                    <Image src="/Person-icon-Graphics.jpg" alt="something" height={500} width={300} />
                                      {/* <img src="https://media.licdn.com/dms/image/D4D03AQHj_D41DN_w8Q/profile-displayphoto-shrink_800_800/0/1676500799420?e=2147483647&v=beta&t=BovlTXBPHjRF72Gf5HLmuHjZoWm-H-xud1YOCS_L_to" alt="Jeffrey is cute." /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Jeffrey Vandever
                                  </h1>

                                  <p>
                                      Co-Project Manager
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className={"row-start-4"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                    <Image src="/Person-icon-Graphics.jpg" alt="something" height={500} width={300} />
                                    {/*  <img src="https://media.licdn.com/dms/image/D5603AQGEklEwPP6H2A/profile-displayphoto-shrink_800_800/0/1689702420172?e=1714608000&v=beta&t=_KbpNofe_lxi5ySRIXmiK0HTNpZD2IoQ1K09O7DDDtU" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Jack Harris
                                  </h1>

                                  <p>
                                      Has been to the moon
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className={"row-start-4"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                   <Image src="/Person-icon-Graphics.jpg" alt="something" height={500} width={300} />
                                   {/*  <img src="https://media.licdn.com/dms/image/C5603AQF7oGu48q83nw/profile-displayphoto-shrink_800_800/0/1606973605163?e=1714608000&v=beta&t=LtnUfDGbykBneySFmdecCl-YOI9CrwsCvtk3lEW_AGg" alt="person" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Joey Bae
                                  </h1>

                                  <p>
                                      Head architect of admission expertise
                                  </p>  

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-5"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                  <Image src="/Person-icon-Graphics.jpg" alt="something" height={500} width={300} />
                                  {/* <img src="https://media.licdn.com/dms/image/D4E03AQGOpn66CfB2bw/profile-displayphoto-shrink_800_800/0/1675998523996?e=1714608000&v=beta&t=aUpVEk6Gg9LIusaeNPVIucBn062TFAIQDiYfg3d446w" alt="person" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Gideon Walker
                                  </h1>

                                  <p>
                                      Walking since 1922.
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-5"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                  {/*<Image src="https://media.licdn.com/dms/image/C4E03AQG-PPYQTs410A/profile-displayphoto-shrink_800_800/0/1641398961367?e=1714608000&v=beta&t=T-DHeIeJJGfKhUr12oi6EVgacv7mSn4ZwSq_10pcc7I" alt="something" height={500} width={300} />
                                   <img src="https://media.licdn.com/dms/image/C4E03AQG-PPYQTs410A/profile-displayphoto-shrink_800_800/0/1641398961367?e=1714608000&v=beta&t=T-DHeIeJJGfKhUr12oi6EVgacv7mSn4ZwSq_10pcc7I" alt="person" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Jonathan Sulgrove
                                  </h1>

                                  <p>
                                      Moral support (Very essential)
                                  </p>

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className={"row-start-6"}>
                          <div className="bg-base-100 w-full h-[27rem] rounded-3xl p-16 flex items-center flex-row-reverse justify-between">
                              <div className="avatar">
                                  <div className="w-72 rounded">
                                  <Image src="/Person-icon-Graphics.jpg" alt="something" height={500} width={300} />
                                  {/*   <img src="https://media.licdn.com/dms/image/D4E03AQFNY1aRByK15w/profile-displayphoto-shrink_800_800/0/1682832054538?e=1714608000&v=beta&t=tY7gH9ffH5zLiqAIqB8xw4tTzmQ5hL4gpGLm2JM1MNs" alt="person" /> */}
                                  </div>
                              </div>

                              <div className={"ml-8 h-full py-8 prose lg:prose-md"}>
                                  <h1>
                                      Cameron Kauffman
                                  </h1>

                                  <p>
                                      Programmer.
                                  </p> 

                                  <div p-10>
                                    <button class="btn btn-active btn-primary">Github</button>
                                    <button class="btn btn-active btn-secondary">Social Media</button>
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
