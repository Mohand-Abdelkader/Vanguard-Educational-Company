import { User, Pen, Activity, Handshake, Flame, Briefcase } from "lucide-react";
import { useService } from "../../hooks/projectServiceCustomHooks/useService";
import Loader from "../../ui/Loader";

import Stat from "./Stat";
import { useRequests } from "../../hooks/requestsCustomHooks/useRequests";
import { useActivities } from "../../hooks/activitesCustomHooks/useActivities";
import { useBlogs } from "../../hooks/blogCustomHooks/useBlogs";
import { useLogos } from "../../hooks/logosCustomHooks/useLogos";
import { useMembers } from "../../hooks/teamMemberCustomHook/useMembers";

function Stats() {
  const { requests, isLoading: isLoading1 } = useRequests();
  const { blogs, isLoading: isLoading2 } = useBlogs();
  const { activities, isLoading: isLoading3 } = useActivities();
  const { logos, isLoading: isLoading4 } = useLogos();
  const { teamMembers, isLoading: isLoading5 } = useMembers();
  const { projectService, isLoading: isLoading6 } = useService();

  const isLoading =
    isLoading1 ||
    isLoading2 ||
    isLoading3 ||
    isLoading4 ||
    isLoading5 ||
    isLoading6;

  if (isLoading) return <Loader />;

  const requestlength = requests.length;
  const blogsLength = blogs.length;
  const activitiesLength = activities.length;
  const logosLength = logos.length;
  const teamMembersLength = teamMembers.length;
  const projectServiceLength = projectService.length;

  return (
    <>
      <Stat title="Client Request" color="blue" value={requestlength}>
        <User />
      </Stat>

      <Stat title="Blogs" color="green" value={blogsLength}>
        <Pen />
      </Stat>

      <Stat title="Project Activities" color="indigo" value={activitiesLength}>
        <Activity></Activity>
      </Stat>
      <Stat title="Project Partner" color="yellow" value={logosLength}>
        <Handshake />
      </Stat>
      <Stat title="Our Team" color="orange" value={teamMembersLength}>
        <Flame />
      </Stat>
      <Stat title="Project Service" color="purple" value={projectServiceLength}>
        <Briefcase />
      </Stat>
    </>
  );
}

export default Stats;
