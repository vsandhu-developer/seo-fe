"use client";
import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "@/components/version-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavUser } from "./nav-user";

const user = {
  name: "Vinay",
  email: "vinay@codepaper.com",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Setup",
      url: "/dashboard",
      items: [
        {
          title: "Business Settings",
          url: "/business-settings",
          isActive: true,
        },
        {
          title: "Publish Console",
          url: "/publish-console",
        },
      ],
    },
    {
      title: "Project",
      url: "/dashboard/project",
      items: [
        {
          title: "Content Plan",
          url: "/content-plan",
        },
        {
          title: "All Content",
          url: "/all-content",
        },
        {
          title: "All Backlinks",
          url: "/all-backlinks",
        },
        {
          title: "Settings",
          url: "/settings",
        },
      ],
    },
    {
      title: "Account",
      url: "/dashboard/account",
      items: [
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => {
          const groupUrl = `${item.url}`;
          return (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => {
                    const fullUrl = `${groupUrl}${item.url}`;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathName === fullUrl}
                        >
                          <Link href={`${groupUrl}${item.url}`}>
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
