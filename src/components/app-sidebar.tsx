import { Building2 } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "@/contexts/theme/theme-provider";
import { useState } from "react";
const data = {
  user: {
    name: "Antony Santos",
    email: "antony@gmail.com",
    avatar: "https://avatars.githubusercontent.com/u/115037549?v=4",
  },
  navMain: [
    {
      title: "Ecossistema",
      url: "#",
      icon: Building2,
      isActive: true,
      items: [
        {
          title: "Startups",
          url: "/dashboard/startups",
        },
        {
          title: "Acelleradoras",
          url: "/dashboard/aceleradoras",
        },
        {
          title: "Incubadoras",
          url: "/dashboard/incubadoras",
        },
        {
          title: "Institutos",
          url: "/dashboard/institutos",
        },
        {
          title: "Intituições de ensino",
          url: "/dashboard/instituicoes-de-ensino",
        },
        {
          title: "Fundos de investimentos",
          url: "/dashboard/fundos-de-investimentos",
        },
        {
          title: "Investidores anjos",
          url: "/dashboard/investidores-anjos",
        },
        {
          title: "Empresas beneficiadas",
          url: "/dashboard/empresas-beneficiadas",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme } = useTheme();
  const [switchTheme, setSwitchTheme] = useState<boolean>(true);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className="flex flex-row items-center">
          <Switch
            checked={switchTheme}
            id="dark-mode"
            onClick={() => {
              setSwitchTheme(!switchTheme);
              if (switchTheme === false) {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          />
          <Label
            className="group-data-[collapsible=icon]:hidden"
            htmlFor="dark-mode"
          >
            light Mode
          </Label>
        </SidebarMenu>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
