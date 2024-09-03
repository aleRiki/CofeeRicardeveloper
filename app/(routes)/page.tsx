import ComponetsCoffeImage from "@/components/components";
import ComponentsInfo from "@/components/componentsInfo";
import { UserButton } from "@clerk/nextjs";
import { BookOpenCheck, CakeIcon, Coffee, UsersRound, Waypoints } from "lucide-react";
import Image from "next/image";
import { CardSummary } from "./components/CardSummary";

const dataCardsSummary = [
  {
    icon: Coffee,
    total: "3.00",
    average: 15,
    title: "Café filtrado",
    tooltipText: "Café filtrado"
  },
  {
    icon: Coffee,
    total: "8.00",
    average: 80,
    title: "Café con leche",
    tooltipText: "Café Cortado"
  },
  {
    icon: Coffee,
    total: "3.00",
    average: 15,
    title: "Americano",
    tooltipText: "Cafe americano"
  },
  {
    icon: Coffee,
    total: "15.00",
    average: 70,
    title: "Café turco",
    tooltipText: "Cafe americano"
  },
]
const dataCardsDesa = [
  {
    icon: CakeIcon,
    total: "15.00",
    average: 10,
    type: "Tostadas francesas",
    tooltipText: "Tostadas"
  },
  {
    icon: CakeIcon,
    total: "18.00",
    average: 70,
    type: "Barras de granola:",
    tooltipText: "Tostadas"
  },
  {
    icon: CakeIcon,
    total: "2.00",
    average: 80,
    type:"Panqueques",
    tooltipText: "Tostadas"
  },

]
export default function Home() {
  return (
    <main>

      <div>
        <h2 className="mb-4 text-2xl">Cafe </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
          {dataCardsSummary.map(({ icon, total, average, title, tooltipText }) => (
            <CardSummary
              key={title}
              icon={icon}
              total={total}
              average={average}
              title={title}
              tooltipText={tooltipText}
            />
          ))}

        </div>
      </div>
      <div>
        <h2 className="mb-4 text-2xl">Desayunos  </h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20">
          {dataCardsDesa.map(({ icon, total, average, type, tooltipText }) => (
            <CardSummary
              key={type}
              icon={icon}
              total={total}
              average={average}
              title={type}
              tooltipText={tooltipText}
            />
          ))}

        </div>
      </div>

    </main>


  );
}
