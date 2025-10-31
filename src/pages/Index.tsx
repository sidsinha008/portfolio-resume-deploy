const Index = () => {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-[850px] mx-auto bg-white shadow-lg">
        {/* Header */}
        <header className="pt-12 pb-6 px-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-wide mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              SIDDHANT SINHA
            </h1>
            <p className="text-base mb-2">
              Third Year Undergraduate, Vellore Institute of Technology
            </p>
            <p className="text-sm">
              +91 93595 84909 |{" "}
              <a href="mailto:siddhant.sinha008@gmail.com" className="text-accent hover:underline">
                siddhant.sinha008@gmail.com
              </a>
              {" "}|{" "}
              <a href="https://linkedin.com/in/siddhant-sinha1" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/siddhant-sinha1
              </a>
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="px-12 pb-12">
          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Summary
            </h2>
            <p className="text-sm leading-relaxed text-justify">
              Pre final year student at VIT Vellore, currently majoring in ECE. Internship experience at TATA Elxsi, skilled in Java, C++, 
              hands on project experience in IoT and cloud-based solutions. Strong foundation in software engineering, SDLC, and databases 
              with proven problem-solving abilities. Exploring Edge AI, Edge Computing, and Embedded Vision with interest in applying them 
              to FinTech and real-time applications.
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Work Experience
            </h2>
            <div className="mb-3">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">
                  Tata Elxsi, India | IoT Intern – Tether Aero Team
                </h3>
              </div>
              <p className="text-sm mb-2 italic">
                Connected Vehicle Platform for Drones | May 2025 – July 2025
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-justify">
                <li>
                  Developed an <span className="font-bold">IoT agent</span> to connect embedded drone systems with <span className="font-bold">AWS IoT Core</span> using <span className="font-bold">MQTT</span> and secure fleet provisioning for secure authentication.
                </li>
                <li>
                  Simulated drone hardware on <span className="font-bold">AirSim</span>, enabling virtual testing of communication protocols such as <span className="font-bold">MAVLink</span> for seamless UAV–IoT integration along with the avionics team.
                </li>
                <li>
                  Contributed to a <span className="font-bold">6G-enabled UAV communication project leveraging NAVIC</span> in collaboration with <span className="font-bold">TSDSI</span>.
                </li>
                <li>
                  Developed a <span className="font-bold">real-time analytics dashboard</span> on <span className="font-bold">Streamlit</span> with telemetry data processing.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Education
            </h2>
            <div className="mb-3">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Vellore Institute of Technology</h3>
                <span className="text-sm">Vellore, TN</span>
              </div>
              <div className="flex justify-between items-baseline mb-1">
                <p className="text-sm">B.Tech (Major: Electronics and Communication Engineering)</p>
                <span className="text-sm">2023-2027</span>
              </div>
              <p className="text-sm mb-1">CGPA: 8.65</p>
              <p className="text-sm">
                <span className="font-bold">Relevant Coursework:</span> Programming (Java, Python), System Design, Probability & Statistics, Cloud Computing
              </p>
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-base">Vidya Valley International School</h3>
                <span className="text-sm">2021 - 2023</span>
              </div>
              <p className="text-sm">Higher Secondary Education - Grade: 88% (CBSE)</p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Projects
            </h2>
            <div>
              <h3 className="font-bold text-base mb-2">Automatic Pill Dispenser | ESP32</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-justify">
                <li>
                  Developed an IoT enabled pill dispenser using ESP32, sensors and other for healthcare.
                </li>
                <li>
                  Implemented <span className="font-bold">gesture-based pill dispensing</span> with customizable medicine schedules.
                </li>
                <li>
                  Enabled <span className="font-bold">email alerts</span> for pill dispensing and intrusion detection in real time.
                </li>
                <li>
                  Integrated <span className="font-bold">AWS IoT Core with MQTT</span> and stored device data in <span className="font-bold">AWS S3</span> for secure monitoring.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Skills
            </h2>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-bold">TECHNICAL SKILLS:</span> Java, C++, Python, Data Structures and Algorithms, Database, AWS (Cloud Computing)
              </p>
              <p>
                <span className="font-bold">SOFTWARE TOOLS:</span> MATLAB, Multisim, Cadence Virtuoso, AWR Design
              </p>
              <p>
                <span className="font-bold">SOFT SKILLS:</span> Strong problem-solving skills, Teamwork, Communication Skills, Time Management, Analytical Thinking, German
              </p>
            </div>
          </section>

          {/* Extracurricular Activities */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Extracurricular Activities
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-base">Advanced Developers Group, VIT</h3>
                  <span className="text-sm">June 2024 – Mar 2025</span>
                </div>
                <p className="text-sm">Sponsorship Team, Junior Core</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-base">Society of Automotive Engineers, VIT</h3>
                  <span className="text-sm">Mar 2024 – Mar 2025</span>
                </div>
                <p className="text-sm">Finance Executive, Junior Core</p>
              </div>
            </div>
          </section>

          {/* Certification */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-foreground mb-3 pb-1">
              Certification
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Introduction to Generative AI</li>
              <li>Machine Learning Specialization, DeepLearningAI</li>
              <li>OCI Generative AI</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Index;
