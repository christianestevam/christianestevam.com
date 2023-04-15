import { Resume } from './Resume'

export const About = () => (
  <section className="mt-8 flex min-w-0 flex-auto flex-col px-2 md:mt-3 md:px-0">
    <h1 className="font-serif text-3xl font-semibold">
      Christian Estevam Barbosa
    </h1>

    <div className="mb-5 font-sans">
      <p className="my-4">
      {`I'm`} Christian Estevam <strong>Software Engineer</strong> from Brazil. 
      Throughout my career, I have gained experience in both <strong>backend and frontend</strong>
      technologies, including HTML/CSS, JS, React, Node.js, Python, Java, and more. 
      Currently, I am focused on the <strong>Java language and related technologies such as
      SpringBoot, Hibernate, and Junit</strong>. I am always eager to learn and am currently
       studying for my AWS Certified Solutions Architect ‒ Associate certification.
      </p>

      <p className="my-4">
      In addition to my technical skills, I pride myself on being a communicative team
      player who values a positive work environment. I believe in working closely with
      others, listening to their feedback, and offering my own opinions. 
       My goal is always to find the best possible solution to any problem, using SOLID
      principles and desing patterns to create robust and reliable software.

      </p>
      Outside of work, I am a student at the <strong>Federal University of Ceará</strong>, where I am
      continuing to expand my knowledge of computer science. My ultimate goal is to 
      contribute more in the academic area while continuing to grow in my career and 
      become a better person along the way.
      <p className="my-4">
        
      </p>
    </div>
    <Resume />
  </section>
)
