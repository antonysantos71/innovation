import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export function Dashboard() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {pathSegments.length === 1 &&
                  pathSegments[0] === "dashboard" && (
                    <BreadcrumbItem>
                      <span className="font-bold text-blue-800">dashboard</span>
                    </BreadcrumbItem>
                  )}

                {/* Caso tenha mais segmentos (ex.: dashboard > startups) */}
                {pathSegments.length > 1 && (
                  <>
                    {pathSegments
                      .filter((segment) => !segment.match(/^\d+$/)) // Remove segmentos que são IDs numéricos
                      .map((segment, index, filteredSegments) => {
                        const href = `/${filteredSegments
                          .slice(0, index + 1)
                          .join("/")}`;

                        const isLast = index === filteredSegments.length - 1;

                        return (
                          <React.Fragment key={index}>
                            <BreadcrumbItem>
                              {isLast ? (
                                <span className="font-bold text-blue-800">
                                  {segment}
                                </span> 
                              ) : (
                                <BreadcrumbLink href={href}>
                                  {segment}
                                </BreadcrumbLink> 
                              )}
                            </BreadcrumbItem>

                            {!isLast && <BreadcrumbSeparator />}
                          </React.Fragment>
                        );
                      })}
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mr-5 flex items-center gap-3">
            <span className="hidden sm:block">Antony santos</span>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/115037549?v=4" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {location.pathname === "/dashboard" ? (
            <div className="space-y-5">
              <Card className="flex p-3 dark:bg-slate-900">
                <img
                  className="h-96 rounded-md"
                  src="https://imgs.search.brave.com/7aH6MmlzSePgug2xdOXr4EBHtbRDxLf9m6ah7YYp56E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/NDUzNjcxL3B0L3Zl/dG9yaWFsL2ZvZ3Vl/dGUtbm8tZXNwYSVD/MyVBN28uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTZBT00z/N2tTbE94RFJMUHpx/cV85Rk5MdDd1LVp6/Z3NlbGxFc3RUbi1m/ZVE9"
                  alt=""
                />
                <div className="flex flex-col">
                  <CardHeader className="h-5/6">
                    <CardTitle className="text-3xl">
                      Innovation studio
                    </CardTitle>
                    <CardDescription>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-1 ml-auto">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src="https://avatars.githubusercontent.com/u/115037549?v=4"
                          alt="antony"
                        />
                        <AvatarFallback className="rounded-lg">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          Antony Santos
                        </span>
                        <span className="truncate text-xs text-slate-500">
                          antony@gmail.com
                        </span>
                      </div>
                    </div>
                  </CardFooter>
                </div>
              </Card>
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-center">
                        <Avatar className="size-52">
                          <AvatarImage src="https://imgs.search.brave.com/7aH6MmlzSePgug2xdOXr4EBHtbRDxLf9m6ah7YYp56E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/NDUzNjcxL3B0L3Zl/dG9yaWFsL2ZvZ3Vl/dGUtbm8tZXNwYSVD/MyVBN28uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTZBT00z/N2tTbE94RFJMUHpx/cV85Rk5MdDd1LVp6/Z3NlbGxFc3RUbi1m/ZVE9" />
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle className="text-2xl text-center">
                        Colaborador 0{index + 1}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="p-4 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed posuere, arcu nec faucibus ullamcorper, quam velit
                      tempus lacus, at viverra velit neque non velit.
                    </CardDescription>
                    <CardFooter className="flex justify-center">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="space-x-4">
                          <Avatar>
                            <AvatarFallback>GG</AvatarFallback>
                          </Avatar>
                        </div>
                      ))}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
