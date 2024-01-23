
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import ProjectsItem from "./ProjectsItem";

export default function ProjectsSection(){
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Beberapa projek bikinan saya </SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ProjectsItem
              image="/hasten.png"
              nama="Hasten"
              description="Explorasi landing page"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectsItem
              image="/resources.png"
              nama="Resources"
              description="Explorasi landing page"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectsItem
              image="/resources.png"
              nama="Resources"
              description="Explorasi landing page"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectsItem
              image="/hasten.png"
              nama="Hasten"
              description="Explorasi landing page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}