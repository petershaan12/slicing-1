import NavItem from "@/components/NavItem";
import classNames from "classnames";
export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10 py-20 ",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];
  return (
    <ul className={classNames("flex ", pickedDir)}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#projets">
        Projects
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contacts
      </NavItem>
    </ul>
  );
}
