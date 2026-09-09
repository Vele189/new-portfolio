import { SkillCard } from "./SkillCard";
import { ContactCTA } from "./ContactCTA";
import { Reveal } from "./ui/reveal";
import { Sparkles } from "./ui/sparkles";
import {
  Html5Badge, JavascriptBadge, TypescriptBadge, NextjsBadge, ReduxBadge, ReactBadge,
  NodejsBadge, ExpressBadge, DjangoBadge, RailsBadge,
  Css3Badge, TailwindBadge, BootstrapBadge, SassBadge, MaterialUiBadge,
  FramerMotionBadge, Image5Badge, LottieBadge,
  DockerBadge, AzureBadge, Image7Badge, Image8Badge, VercelBadge,
  PostmanBadge, JestBadge, SeleniumBadge,
  PythonBadge, CBadge, CppBadge, RubyBadge,
  MysqlBadge, PostgresBadge, MongoBadge, FirebaseBadge,
  Image6Badge, GithubBadge, GitBadge, FigmaBadge,
} from "./icons";

export function SkillsSection() {
  return (
    <section className="bg-black" id="skills" aria-labelledby="skills-heading">
      {/* Heading */}
      <div className="relative px-6 md:px-12 lg:px-[115px] py-20 md:py-[140px] flex justify-center">
        <Sparkles count={48} className="opacity-70" />
        <Reveal className="relative z-10">
          <h2
            id="skills-heading"
            className="font-['DM_Sans:Regular',sans-serif] font-normal text-center text-white text-[clamp(2.5rem,9vw,8.75rem)] leading-[1.05] max-w-[1212px]"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            Skills that fuel my passion
          </h2>
        </Reveal>
      </div>

      {/* Cards grid */}
      <div className="relative z-0 overflow-visible px-6 md:px-12 lg:px-[133px] pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SkillCard
          index={0}
          title="Front-End Development"
          description="Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise."
          logos={<><Html5Badge /><JavascriptBadge /><TypescriptBadge /><NextjsBadge /><ReduxBadge /><ReactBadge /></>}
        />
        <SkillCard
          index={1}
          title="Programming Languages"
          description="Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms."
          logos={<><PythonBadge /><CBadge /><CppBadge /><RubyBadge /></>}
        />
        <SkillCard
          index={2}
          title="Back-End Development"
          description="Developing robust server-side logic and APIs to power dynamic and scalable web applications."
          logos={<><NodejsBadge /><ExpressBadge /><DjangoBadge /><RailsBadge /></>}
        />
        <SkillCard
          index={3}
          title="Database Management"
          description="Designing and managing databases to ensure secure and efficient data storage and retrieval."
          logos={<><MysqlBadge /><PostgresBadge /><MongoBadge /><FirebaseBadge /></>}
        />
        <SkillCard
          index={4}
          title="Styling & Design"
          description="Crafting visually appealing and responsive designs with advanced styling tools and frameworks."
          logos={<><Css3Badge /><TailwindBadge /><BootstrapBadge /><SassBadge /><MaterialUiBadge /></>}
        />
        <SkillCard
          index={5}
          title="Mobile App Development"
          description="Creating cross-platform mobile apps with sleek designs and robust functionality."
          logos={<Image6Badge />}
        />
        <SkillCard
          index={6}
          title="Core Computer Science Concepts"
          description="Demonstrating a strong foundation in core computer science principles, including problem-solving, system design, and efficient computing techniques."
          tags={["Operating Systems", "Computer Networks", "Object-Oriented Programming", "DSA", "System Design"]}
        />
        <SkillCard
          index={7}
          title="Version Control & Collaboration"
          description="Effectively managing code and collaborating on projects to ensure seamless teamwork."
          logos={<><GithubBadge /><GitBadge /></>}
        />
        <SkillCard
          index={8}
          title="Web Animations"
          description="Creating seamless animations and transitions to enhance user engagement and interactivity."
          logos={<><FramerMotionBadge /><Image5Badge /><LottieBadge /></>}
        />
        <SkillCard
          index={9}
          title="Cloud & Deployment"
          description="Experienced in deploying and managing applications using modern cloud platforms and tools."
          logos={<><DockerBadge /><AzureBadge /><Image7Badge /><Image8Badge /><VercelBadge /></>}
        />
        <SkillCard
          index={10}
          title="Testing & Debugging"
          description="Ensuring code quality and reliability through rigorous testing and debugging processes."
          logos={<><PostmanBadge /><JestBadge /><SeleniumBadge /></>}
        />
        <SkillCard
          index={11}
          title="UI/UX Design"
          description="Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate."
          logos={<><FigmaBadge /></>}
          tags={["Prototyping", "Wireframing"]}
        />
        <SkillCard
          index={12}
          title="Personal Development"
          description="Committed to continuous learning and personal growth to excel in both professional and collaborative environments."
          tags={["Time Management", "Problem Solving", "Communication", "Leadership"]}
        />
      </div>

      <ContactCTA variant="dark" />
    </section>
  );
}
