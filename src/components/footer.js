import Images from 'next/image'

export default function Navbar() {
  return (
      <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        {/*I want image here*/}
        <Images src="/SER_Logo.png" alt="logo" width={25} height={25} />
        {/* <img className="h-20 w-auto" src="/SER_Logo.png" alt="SER Logo" /> */}
        <p>Software Engineering Readiness<br/>Creating Fantastic Websites Since 2023</p>
      </aside> 
      <nav>
        <h6 className="footer-title">SERC</h6> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav> 

      <nav>
        <a href="https://www.liberty.edu/"><h6 className="footer-title link link-hover">Liberty University </h6></a>
        <a href="https://www.liberty.edu/business/bachelors/computer-science/" className="link link-hover">B.S. in Computer Science Residential</a>
        <a href="https://www.liberty.edu/online/business/bachelors/computer-science-cybersecurity/" className="link link-hover">B.S. in Computer Science-Cybersecurity</a>
        <a href="https://www.liberty.edu/residential/business/bachelors/computer-science/software-engineering/" className="link link-hover">Software Engineering</a>
        <a href="https://www.liberty.edu/business/bachelors/computer-science/web-mobile-programming/" className="link link-hover">Web and Mobile Programming</a>
      </nav> 

      <nav>
        <h6 className="footer-title">Legal</h6> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  )
}