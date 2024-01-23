import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import SectionParagraph from "@/components/SectionParagraph";

export default function ProfileSection() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>Mengenal saya secara singkat</SectionParagraph>
        <div className="flex lg:items-center md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
          <div className="md:w-5/12 w-full px-10 mb-10 md:mb-0">
            <Image
              src="/profile.png"
              alt="me"
              className="w-full"
              width={800}
              height={500}
            />
          </div>
          <div className="md:w-7/12 w-full px-10">
            <div className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, at
              officia quis consequuntur laboriosam, nulla nobis deserunt impedit
              placeat ab sapiente obcaecati. Temporibus eligendi sequi incidunt
              consequuntur quis illo eius!
            </div>
            <div className="text-lg mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, at
              officia quis consequuntur laboriosam, nulla nobis deserunt impedit
              placeat ab sapiente obcaecati. Temporibus eligendi sequi incidunt
              consequuntur quis illo eius!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
