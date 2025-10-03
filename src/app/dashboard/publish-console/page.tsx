import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import SidebarLayout from "../page";

export default function PublishConsole() {
  return (
    <SidebarLayout breadcrumbPage="Publish Console">
      <div>
        <div className="border max-w-4xl m-auto rounded-sm">
          <h1 className="border-b font-semibold p-4">Publish Console</h1>

          <div className="p-4">
            <div className="border p-4 mx-4 space-y-6 rounded-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold">Auto Publish</h2>
                  <h2 className="text-md text-gray-500">
                    Automatically publish articles to your blog one day after
                    they are generated.
                  </h2>
                </div>
                <Switch checked={true} />
              </div>

              <div>
                <h2 className="font-semibold">Connect Your Blog</h2>
                <h2 className="text-md text-gray-500">
                  Connect your blog to automatically publish generated content
                  to your blog.
                </h2>

                <div className="flex gap-2 items-center mt-4">
                  <Button variant={"outline"} size={"lg"}>
                    WordPress
                  </Button>
                  <Button variant={"outline"} size={"lg"}>
                    Webflow
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="font-semibold">Publish As</h2>
                <div className="flex gap-2 items-center mt-4">
                  <Button size={"lg"}>Draft</Button>
                  <Button variant={"outline"} size={"lg"}>
                    Pushlished
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
