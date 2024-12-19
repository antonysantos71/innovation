import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Factory } from "lucide-react";

export function StartupsDetails() {
  return (
    <div>
      <h1 className="text-2xl">Startups detalhes</h1>
      <Card className="p-2 dark:bg-slate-900 rounded-none my-3 gap-5 flex">
        <img
          src="https://imgs.search.brave.com/V5A-vWsrglPNLAsKCbH0qliftDOisJqKaZudUTPB2TQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MTQzMzQ1Ny9waG90/by9yb2NrZXQtbGF1/bmNoLWRpZ2l0YWwt/YnVzaW5lc3Mtc3Rh/cnR1cC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9SUhwbWMy/OEdBMGlWaHVpS2xk/Rm9KR2FsTzNWODdE/X0QzVlhNdU9rVWlO/MD0"
          alt=""
        />
        <div>
          <CardTitle className="text-3xl">Innovation studio</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            reiciendis voluptatibus possimus quae? Modi nostrum inventore quo
            illum quos, saepe ad aliquam est quis ullam iste suscipit, accusamus
            assumenda reprehenderit. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Itaque reiciendis voluptatibus possimus quae? Modi
            nostrum inventore quo illum quos, saepe ad aliquam est quis ullam
            iste suscipit, accusamus assumenda reprehenderit. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Itaque reiciendis
            voluptatibus possimus quae? Modi nostrum inventore quo illum quos,
            saepe ad aliquam est quis ullam iste suscipit, accusamus assumenda
            reprehenderit.
          </CardDescription>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 7 }, (_, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row gap-2 items-center">
              <Factory size={50} />
              <div>
                <CardTitle>Setor</CardTitle>
                <CardDescription>AgTech (Agronegócio)</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
