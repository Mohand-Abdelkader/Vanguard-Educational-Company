import About from "../ui/About";
import TeamMembers from "../features/teamMember/TeamMembers";

function AboutUs() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col gap-20 py-32">
        <About />
        <TeamMembers />
      </div>
    </div>
  );
}

export default AboutUs;
