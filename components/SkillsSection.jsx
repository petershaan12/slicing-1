import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillsCard from "./SkillsCard";

export default function SkillsSection() {
  return (
    <section className="py-20 bg-primarygray" id="skills">
      <div className="container mx-auto ">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="Javascript"
              image="/javascript.svg"
              level="lanjutan"
              className="h-16 rounded-full"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="React JS"
              image="/react.svg"
              level="menengah"
              className="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="Node JS"
              image="/nodejs-icon.svg"
              level="lanjutan"
              className="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="Node JS"
              image="/nodejs-icon.svg"
              level="lanjutan"
              className="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="Javascript"
              image="/javascript.svg"
              level="lanjutan"
              className="h-16 rounded-full"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="React JS"
              image="/react.svg"
              level="menengah"
              className="h-16"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <SkillsCard
              nama="React JS"
              image="/react.svg"
              level="menengah"
              className="h-16"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillsCard
              nama="Node JS"
              image="/nodejs-icon.svg"
              level="lanjutan"
              className="h-16"
            />
          </div>
          <div className="w-4/12 px-4">
            <SkillsCard
              nama="React JS"
              image="/react.svg"
              level="menengah"
              className="h-16"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
