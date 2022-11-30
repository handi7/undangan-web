import { Button } from "grommet";
import { Projects, Group, Secure, UserAdmin } from "grommet-icons";

export const menuData = [
  {
    id: 1,
    icon: (
      <Button
        plain
        icon={<Projects color="admin" />}
        color="admin"
        label="Dashboard"
      />
    ),
    label: "Dashboard",
    href: "/admin",
  },
  {
    id: 2,
    icon: (
      <Button
        plain
        icon={<Group color="admin" />}
        color="admin"
        label="Customers"
      />
    ),
    href: "/admin/customers",
  },
  {
    id: 3,
    icon: (
      <Button
        plain
        icon={<UserAdmin color="admin" />}
        color="admin"
        label="Admins"
      />
    ),
    href: "/admin/admins",
  },
  // {
  //   id: 4,
  //   icon: <Secure color="admin" />,
  //   label: "Customers",
  //   href: "/admin/customers",
  // },
];
