import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button }from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

export function Startups() {
  const navigate = useNavigate();
  const id = 3456; // Ou o id dinâmico que você precisa

  const handleClick = () => {
    navigate(`/dashboard/startups/${id}`);
  };
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array.from({ length: 52 }, (_, index) => (
        <Card key={index} className="dark:bg-slate-900"> 
          <CardHeader>
            <div className="flex justify-center">
              <Avatar className="size-52 rounded-none">
                <AvatarImage src="https://imgs.search.brave.com/7aH6MmlzSePgug2xdOXr4EBHtbRDxLf9m6ah7YYp56E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk3/NDUzNjcxL3B0L3Zl/dG9yaWFsL2ZvZ3Vl/dGUtbm8tZXNwYSVD/MyVBN28uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTZBT00z/N2tTbE94RFJMUHpx/cV85Rk5MdDd1LVp6/Z3NlbGxFc3RUbi1m/ZVE9" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl text-center">Startup 0{index + 1}</CardTitle>
          </CardHeader>
          <CardDescription className="p-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            posuere, arcu nec faucibus ullamcorper, quam velit tempus lacus, at
            viverra velit neque non velit.
          </CardDescription>
          <CardFooter className="flex justify-center">
            <Button className="w-full" onClick={handleClick}>
              ver mais
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}