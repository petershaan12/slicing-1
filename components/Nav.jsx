import NavItem from "@/components/NavItem";
export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10 py-20">
      <NavItem>Profile</NavItem>
      <NavItem>Skills</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Contacts</NavItem>
    </ul>
  );
}
