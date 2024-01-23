import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import SkillsCard from "./SkillsCard";

export default function SkillsSection() {
  return (
    <section className="py-28 bg-primarygray" id="skills">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Skills</SectionTitle>
        <SectionParagraph>Beberapa kemampuan saya.</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillsCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillsCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillsCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs-icon.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillsCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs-icon.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillsCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <SkillsCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillsCard
              name="React JS"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillsCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs-icon.svg"
              imageClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
            <SkillsCard
              name="JavaScript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
