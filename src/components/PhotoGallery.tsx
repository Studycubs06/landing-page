import { Camera } from "lucide-react";

const photos = [
  { title: "Storytelling Session", desc: "Cubs narrating tales with expressions" },
  { title: "Debate Workshop", desc: "Young debaters in action" },
  { title: "Stage Performance", desc: "Confidence on the big stage" },
  { title: "Group Activity", desc: "Collaborative learning & fun" },
  { title: "Award Ceremony", desc: "Celebrating Super Cubs" },
  { title: "Creative Expression", desc: "Poetry & role-play moments" },
];

const PhotoGallery = () => (
  <section className="py-20 bg-dark-gradient relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary" />
      <div className="absolute bottom-10 right-20 w-56 h-56 rounded-full bg-secondary" />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-primary" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/20 text-primary font-body font-bold text-sm px-5 py-2 rounded-full mb-4 tracking-wide">
          <Camera className="inline mr-2" size={14} />
          GALLERY
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Life at <span className="text-gradient">StudyCubs</span>
        </h2>
        <p className="font-body text-white/60 max-w-xl mx-auto text-lg">
          Glimpses of our cubs in action — learning, growing, and shining every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <div
            key={photo.title}
            className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 ${
              i === 0 ? "sm:row-span-2 sm:h-full" : ""
            }`}
          >
            <div className={`bg-gradient-to-br from-primary/20 to-secondary/20 ${i === 0 ? "h-full min-h-[320px]" : "h-56"} flex items-center justify-center`}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Camera className="text-white/60" size={28} />
                </div>
                <p className="text-white/40 font-body text-sm">Photo coming soon</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <h4 className="font-display font-bold text-white text-lg">{photo.title}</h4>
              <p className="font-body text-white/60 text-sm">{photo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PhotoGallery;
