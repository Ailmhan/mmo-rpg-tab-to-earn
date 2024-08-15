import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SkillShop() {
  // Пример данных навыков с иконками
  const skills = [
    {
      title: "Fireball",
      description: "Launch a powerful fireball at your enemies, dealing 50 damage.",
      cost: "100 Gold",
      icon: "/fire-iso-color.png", // Добавляем иконку для Fireball
    },
    {
      title: "Healing Light",
      description: "Restore 30 health to yourself or an ally.",
      cost: "80 Gold",
      icon: "/flash-iso-color.png", // Добавляем иконку для Healing Light
    },
    {
      title: "Stealth",
      description: "Become invisible for 10 seconds.",
      cost: "120 Gold",
      icon: "/magic-trick-iso-color.png", // Добавляем иконку для Stealth
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-black">
      <h1 className="text-2xl font-bold text-white">Skill Shop</h1>
      <p className="mt-2 text-sm text-gray-400">Purchase or upgrade your skills</p>

      <div className="mt-8 w-full max-w-sm space-y-4">
        {skills.map((skill, index) => (
          <Card key={index} className="border border-gray-700 bg-black text-white">
            <CardHeader className="flex items-center">
              {/* Иконка навыка */}
              <Image 
                src={skill.icon}
                alt={skill.title}
                width={40}
                height={40}
                className="mr-4"
              />
              <CardTitle className="text-green-400">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>{skill.description}</p>
              <p className="mt-4 text-yellow-500">Cost: {skill.cost}</p>
              <Button className="mt-4 w-full text-green-400 border-green-400">
                Purchase
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
