import { useState } from "react";
import { useMembers } from "../../hooks/teamMemberCustomHook/useMembers";
import List from "../../ui/List";
import Loader from "../../ui/Loader";
import MemberItem from "./MemberItem";
import { Plus, Minus } from "lucide-react";
import MemberForm from "./MemberForm";

function AdminTeam() {
  const { teamMembers, isLoading } = useMembers();
  const [isOpen, setIsOpen] = useState(false);
  const [editMember, setEditMember] = useState(null);

  function toggleOpen() {
    setIsOpen((i) => !i);
    setEditMember(null);
  }
  function openEditForm(member) {
    setIsOpen(true);
    setEditMember(member);
  }

  if (isLoading)
    return (
      <div className="p-6 flex justify-center">
        <Loader size="medium" />
      </div>
    );

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          Team Members
        </h1>

        <button
          onClick={toggleOpen}
          className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-sm"
        >
          {isOpen ? (
            <Minus size={18} className="mr-2" />
          ) : (
            <Plus size={18} className="mr-2" />
          )}
          <span>{isOpen ? "Close Form" : "Add Member"}</span>
        </button>
      </div>
      {isOpen && <MemberForm setIsOpen={setIsOpen} editMember={editMember} />}
      <List
        items={teamMembers}
        render={(member) => (
          <MemberItem
            member={member}
            key={member.id}
            openEditForm={openEditForm}
          />
        )}
        firstCol="Name"
        secondCol="Title"
        thirdCol="Address"
      />
    </div>
  );
}

export default AdminTeam;
