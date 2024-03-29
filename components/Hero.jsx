import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto px-10 2xl:px-0">
        <Navbar />
        <div className="text-center lg:mt-8 md:mt-6">
          <h1 className="text-3xl text-white font-semibold font-mono xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white text-opacity-60 text-lg w-full mx-auto mt-6 leading-relaxed">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button href="#profile" pill variant="yellow" className="mt-14">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
