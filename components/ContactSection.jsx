import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import Field from "./Field";
import ContactItem from "./ContactItem";
import Button from "./Button";

export default function ContactSection() {
  return (
    <section className="container mx-auto" id="contact">
      <div className="bg-primarygray flex">
        <div className="w-6/12 border-r border-primarygray-200">
          <div className="p-16">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>Contact</SectionParagraph>

            <ContactItem
              label="Mail"
              value="contact.petershaan@gmail.com"
              icon="/mail.svg"
              className="mt-10"
            />
            <ContactItem
              label="Phone"
              value="089529882952"
              icon="/phone.svg"
              className="mt-6"
            />
            <ContactItem
              label="Twitter"
              value="petershaan12"
              icon="/twitter.svg"
              className="mt-6"
            />
          </div>
        </div>
        <div className="w-6/12">
          <form action="" className="py-16 px-20">
            <div className="flex -mx-4">
              <div className="w-6/12 px-4">
                <Field label="Name" name="name" type="text" />
              </div>
              <div className="w-6/12 px-4">
                <Field label="Email" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="subject" type="text" />
            <Field
              label="Message"
              name="message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
