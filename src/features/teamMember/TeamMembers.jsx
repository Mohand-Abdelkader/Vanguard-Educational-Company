import Member from "./Member";

const Members = [
  {
    name: "Mohamed Rashed",
    title: "Director/CEO",
    image:
      "https://vanguardeducationcompany.com/assets/images/mohamed_rash.jpg",
  },
  {
    name: "Mohamed Abdulmaqsod",
    title: null,
    image:
      "https://vanguardeducationcompany.com/assets/images/abdulmaqsud.jpeg",
  },
  {
    name: "Muhammad El-Hofy",
    title: null,
    image: "https://vanguardeducationcompany.com/assets/images/elhofy.jpeg",
  },
  {
    name: "Amro Ahmad",
    title: null,
    image: "https://vanguardeducationcompany.com/assets/images/amro.jpeg",
  },
  {
    name: "Muhammad Manga Muhammad",
    title: null,
    image:
      "https://vanguardeducationcompany.com/assets/images/mohammad_ramadan.jpeg",
  },
  {
    name: "Muaz Abdulqadir Ibrahim",
    title: null,
    image: "https://vanguardeducationcompany.com/assets/images/abdulkadir.jpeg",
  },
  {
    name: "Wafaa Mohamed",
    title: null,
    image: "https://vanguardeducationcompany.com/assets/images/wafaa.jpeg",
  },
  {
    name: "Muhammed Woliyat",
    title: null,
    image: "https://vanguardeducationcompany.com/assets/images/wal-moh.jpeg",
  },
  {
    name: "Mariam Mahmoud",
    title: null,
    image: "https://vanguardeducationcompany.com/assets/images/mariam.jpeg",
  },
];

function TeamMember() {
  const teamMembers = Members;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        <h2 className="text-4xl font-bold text-primary">Our Team</h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl">
        Meet the dedicated professionals who make our educational vision a
        reality through their expertise and passion.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Member
            key={member.name}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
