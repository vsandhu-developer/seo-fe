import blogData from "@/lib/data.json";
import SidebarLayout from "../../page";
import BlogPage from "./components/blogInfo";

export default function AllContent() {
  return (
    <SidebarLayout breadcrumbPage="Project / All Content">
      <BlogPage blog={blogData} />
    </SidebarLayout>
  );
}
