import NavItem from "@/components/NavItem";
export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10 py-20">
      <NavItem href="#profile" >Profile</NavItem>
      <NavItem href="#skills">Skills</NavItem>
      <NavItem href="#projets">Projects</NavItem>
      <NavItem href="#contact">Contacts</NavItem>
    </ul>
  );
}
