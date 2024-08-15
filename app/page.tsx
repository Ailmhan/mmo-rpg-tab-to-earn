"use client"; // Для клиентского компонента

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion-3d";

// Функция для генерации случайного цвета
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [color, setColor] = useState(getRandomColor()); // Начальный случайный цвет

  const handleStartOrBoost = () => {
    if (!isStarted) {
      setIsStarted(true);
    } else {
      setIsAnimating(true);

      // Обновляем прогресс, когда прогресс достигает 100%, сбрасываем его и увеличиваем уровень
      setProgress((prev) => {
        if (prev >= 100) {
          setLevel((prevLevel) => prevLevel + 1); // Увеличиваем уровень
          setColor(getRandomColor()); // Меняем цвет объекта
          return 0; // Сбрасываем прогресс
        } else {
          return prev + 10; // Увеличиваем прогресс на 10%
        }
      });

      // Останавливаем анимацию после одного оборота
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-black">
      {/* Прогресс-бар и уровень */}
      {isStarted && (
        <>
          <div className="w-full max-w-xs bg-gray-700 rounded-full h-2.5 mb-4">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white mb-4">Level {level}</p>
        </>
      )}

      {/* Заголовок и описание */}
      <h1 className="text-2xl font-bold text-white mb-2">TMAGIC</h1>

      {/* Карточка с изображением или 3D объектом */}
      <div
        className="p-4 rounded-xl shadow-sm w-full max-w-xs mb-6"
        style={{
          backgroundColor: "rgba(0, 128, 0, 0.1)", // Прозрачный зеленый фон
          border: "2px solid rgba(56, 241, 148, 0.8)", // Полупрозрачная градиентная зеленая рамка
        }}
      >
        {!isStarted ? (
          <>
            <Image
              src="/2D.jpg" // Путь к изображению
              alt="TMAGIC LEVELING"
              width={400}
              height={300}
              className="mb-4 rounded"
            />
            <h2 className="text-sm font-semibold text-white">TMAGIC LEVELING</h2>
            <p className="mt-2 text-sm text-gray-400">Execute tasks and earn tokens, Tab to Earn Game.</p>
          </>
        ) : (
          <div className="w-full h-[150px] flex justify-center items-center">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 5, 2]} />
              <motion.group
                onClick={handleStartOrBoost}
                animate={isAnimating ? { rotateY: 360 } : { rotateY: 0 }}
                transition={{ duration: 1 }}
              >
                <Sphere args={[1.5, 32, 32]}>
                  <MeshDistortMaterial color={color} distort={0.5} speed={2} />
                </Sphere>
              </motion.group>
            </Canvas>
          </div>
        )}
      </div>

      {/* Кнопка */}
      <Button
        className="w-full max-w-xs py-2 text-base text-green-400 bg-black border border-green-400 rounded-lg hover:bg-green-900 hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
        onClick={handleStartOrBoost}
        style={{ marginTop: "20px" }} // Подняли кнопку выше
      >
        {!isStarted ? "START MAKING MORE" : "BOOST"}
      </Button>
    </div>
  );
}
