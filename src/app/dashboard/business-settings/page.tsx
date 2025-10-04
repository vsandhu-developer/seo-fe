"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SidebarLayout from "../page";

interface dataType {
  title: string;
  value: string;
  editBtnUrl: string;
}

interface contentType {
  content: string;
}

interface sectionsDataType {
  title: string;
  editBtnUrl: string;
  content: contentType[];
}

export default function BusinessSettings() {
  const data: dataType[] = [
    {
      title: "Business Name",
      value: "Codepaper",
      editBtnUrl: "#",
    },
    {
      title: "Business Type",
      value: "Software development",
      editBtnUrl: "#",
    },
  ];

  const sectionsData: sectionsDataType[] = [
    {
      title: "About The Business",
      editBtnUrl: "#",
      content: [
        {
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tempore dolorem vel.",
        },
        {
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tempore dolorem vel.",
        },
        {
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tempore dolorem vel.",
        },
      ],
    },
    {
      title: "Keywords",
      editBtnUrl: "#",
      content: [
        {
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta tempore dolorem vel.",
        },
      ],
    },
    {
      title: "Competitive Advantage",
      editBtnUrl: "#",
      content: [
        {
          content:
            "Not available – insufficient information to identify unique strengths.",
        },
      ],
    },
    {
      title: "Competitors",
      editBtnUrl: "",
      content: [
        {
          content:
            "Not available – no customer profiles can be derived without business context.",
        },
      ],
    },
    {
      title: "Current Ranking",
      editBtnUrl: "#",
      content: [
        {
          content: "Not Available",
        },
      ],
    },
  ];

  return (
    <SidebarLayout breadcrumbPage="Business Settings">
      <div className="border max-w-4xl m-auto rounded-sm">
        <h1 className="border-b p-4 font-semibold custom-h1">
          Business Information
        </h1>

        <div className="p-4">
          <div className="border p-4 mx-4 space-y-6 rounded-sm">
            {data.map(({ title, value, editBtnUrl }, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h2 className="custom-h2">{title}</h2>
                    <h2 className="custom-h2-medium">{value}</h2>
                  </div>

                  <Button variant={"link"} asChild>
                    <Link href={`${editBtnUrl}`}>Edit</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 space-y-6">
          {sectionsData.map(({ title, content, editBtnUrl }) => {
            return (
              <div key={title}>
                <div className="border p-4 mx-4 space-y-2 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-medium custom-h2">{title}</h2>
                    </div>

                    <Button variant={"link"} asChild>
                      <Link href={`${editBtnUrl}`}>Edit</Link>
                    </Button>
                  </div>

                  <div>
                    <ul className="list-disc px-4 space-y-2">
                      {content.map(({ content }, index) => (
                        <li key={content + index} className="text-[15px]">
                          {content}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SidebarLayout>
  );
}
