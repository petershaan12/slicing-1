import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import SectionParagraph from "@/components/SectionParagraph";

export default function ProfileSection() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto">
        <SectionTitle>Profile</SectionTitle>
        <SectionParagraph>Mengenal saya secara singkat</SectionParagraph>
        <div className="flex items-center w-9/12 mx-auto mt-10">
          <div className="w-5/12 p-10">
            <Image
              src="/profile.png"
              alt="me"
              className="w-full"
              width={800}
              height={500}
            />
          </div>
          <div className="w-7/12 px-10">
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
