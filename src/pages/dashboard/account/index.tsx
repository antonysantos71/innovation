import { FacebookIcon } from "@/components/icons/facebook";
import { InstagramIcon } from "@/components/icons/instagram";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { useState } from "react";

export function Account() {
  const [formData, setFormData] = useState({
    name: "Antony",
    email: "antony@gmail.com",
    password: "antony",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div>
      <div className="w-full h-52 dark:bg-slate-900 bg-slate-200 relative">
        <div className="absolute inset-0 flex items-end">
          <Avatar className="relative size-32 -mb-14 ml-2">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/115037549?v=4"
              alt="users"
            />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-16">
        <h1>Antony santos</h1>
        <span className="text-xs text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </span>
      </div>

      <Card className="p-4 rounded-sm flex flex-col sm:flex-row">
        <div className="space-y-3 sm:w-1/3">
          <div>
            <Label>Nome de usuário</Label>
            <Input type="text" value={formData.name} className="" disabled />
          </div>
          <div>
            <Label>Email do usuário</Label>
            <Input type="email" value={formData.email} disabled />
          </div>
          <div>
            <Label>Senha do usuário</Label>
            <Input type="password" value={formData.password} disabled />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">
                Editar perfil
                <Edit />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar perfil </DialogTitle>
                <DialogDescription>Edite seus dados e salve</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose className="w-full">
                  <Button type="submit" className="w-full">
                    Save changes
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="ml-auto sm:w-1/2 flex flex-col items-center">
          <img
            src="/src/assets/logo-innovation.png"
            alt="logo"
            className="h-32"
          />
          <div className="text-center space-y-2">
            <h2 className="text-xl">Redes sociais</h2>
            <div className="grid grid-cols-2 gap-3">
              <Badge className="flex gap-x-2 cursor-pointer items-center">
                <InstagramIcon className="size-4" />
                Instagram
              </Badge>
              <Badge className="flex gap-x-2 cursor-pointer items-center">
                <FacebookIcon className="size-4" />
                Facebook
              </Badge>
              <Badge className="flex gap-x-2 cursor-pointer items-center">
                <LinkedinIcon className="size-4" />
                Linkedin
              </Badge>
              <Badge className="flex gap-x-2 cursor-pointer items-center">
                <InstagramIcon className="size-4" />
                Instagram
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}