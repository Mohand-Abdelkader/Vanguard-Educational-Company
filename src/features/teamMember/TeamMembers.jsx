import Member from "./Member";
function TeamMember() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-primary mb-8">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Member key={i}></Member>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
