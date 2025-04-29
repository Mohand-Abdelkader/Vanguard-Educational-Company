import { useState } from "react";
import { Play, ChevronRight, ChevronLeft } from "lucide-react";

function CommercialVideos() {
  const [activeVideo, setActiveVideo] = useState(0);

  // Sample instructor videos data - replace with actual data
  const instructorVideos = [
    {
      id: 1,
      name: "Mohamed Rashed",
      title: "Director/CEO",
      description:
        "Introduction to our educational philosophy and vision for the future.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail:
        "https://vanguardeducationcompany.com/assets/images/mohamed_rash.jpg",
    },
    {
      id: 2,
      name: "Muhammad El-Hofy",
      title: "Senior Instructor",
      description:
        "Demonstrating innovative teaching methods for STEAM education.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail:
        "https://vanguardeducationcompany.com/assets/images/elhofy.jpeg",
    },
    {
      id: 3,
      name: "Wafaa Mohamed",
      title: "Mathematics Specialist",
      description:
        "Exploring advanced techniques for teaching mental mathematics.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail:
        "https://vanguardeducationcompany.com/assets/images/wafaa.jpeg",
    },
    {
      id: 4,
      name: "Amro Ahmad",
      title: "Technology Instructor",
      description: "Showcasing our robotics and AI programming curriculum.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
      thumbnail: "https://vanguardeducationcompany.com/assets/images/amro.jpeg",
    },
  ];

  const nextVideo = () => {
    setActiveVideo((prev) =>
      prev === instructorVideos.length - 1 ? 0 : prev + 1
    );
  };

  const prevVideo = () => {
    setActiveVideo((prev) =>
      prev === 0 ? instructorVideos.length - 1 : prev - 1
    );
  };

  const selectVideo = (index) => {
    setActiveVideo(index);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-white to-primary/5 dark:from-accent/90 dark:to-accent/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
            <h2 className="text-4xl font-bold text-primary">
              Meet Our Instructors
            </h2>
            <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl">
            Get to know our talented team of instructors through these videos
            showcasing their expertise and teaching philosophy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Video Player */}
          <div className="lg:col-span-2 bg-white dark:bg-accent/30 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="aspect-video w-full bg-black">
              <iframe
                src={instructorVideos[activeVideo].videoUrl}
                title={instructorVideos[activeVideo].name}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-8">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">
                    {instructorVideos[activeVideo].name}
                  </h3>
                  <p className="text-secondary font-medium">
                    {instructorVideos[activeVideo].title}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={prevVideo}
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-accent/50 dark:hover:bg-accent/70 transition-colors"
                    aria-label="Previous video"
                  >
                    <ChevronLeft size={20} className="text-primary" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 dark:bg-accent/50 dark:hover:bg-accent/70 transition-colors"
                    aria-label="Next video"
                  >
                    <ChevronRight size={20} className="text-primary" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {instructorVideos[activeVideo].description}
              </p>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="bg-white dark:bg-accent/30 rounded-xl shadow-xl overflow-hidden h-fit">
            <div className="p-5 bg-primary/10 dark:bg-primary/20 border-b border-primary/20 dark:border-primary/30">
              <h3 className="font-semibold text-primary text-lg">
                Instructor Videos
              </h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
              {instructorVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`flex items-center p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-accent/50 transition-colors ${
                    activeVideo === index
                      ? "bg-primary/5 dark:bg-primary/20"
                      : ""
                  }`}
                  onClick={() => selectVideo(index)}
                >
                  <div className="relative w-24 h-24 flex-shrink-0 mr-4 rounded-md overflow-hidden group">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="bg-white/80 rounded-full p-2 transform scale-90 group-hover:scale-100 transition-transform">
                        <Play size={16} className="text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-medium text-gray-900 dark:text-white truncate">
                      {video.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {video.title}
                    </p>
                  </div>
                  {activeVideo === index && (
                    <div className="w-3 h-3 bg-primary rounded-full ml-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommercialVideos;
