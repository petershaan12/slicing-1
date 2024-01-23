import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className="bg-hero h-[812px]">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-16">
          <h1 className="text-3xl text-white font-semibold font-mono w-8/12 mx-auto">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white text-opacity-60 text-lg w-4/12 mx-auto mt-6">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button  href="#profile" className="mt-14" variant="yellow" pill>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
