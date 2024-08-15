'use client'
import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function Game() {
  const gameContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Создание нового приложения Pixi.js
    const app = new PIXI.Application({
      width: 400, // ширина холста
      height: 300, // высота холста
      backgroundColor: 0x1099bb, // цвет фона
    });

    // Добавление холста в DOM
    if (gameContainer.current) {
      gameContainer.current.appendChild(app.view);
    }

    // Пример базовой графики: создаем круг
    const circle = new PIXI.Graphics();
    circle.beginFill(0xff0000);
    circle.drawCircle(200, 150, 50);
    circle.endFill();
    app.stage.addChild(circle);

    // Очистка при размонтировании компонента
    return () => {
      app.destroy(true, true);
    };
  }, []);

  return <div ref={gameContainer} />;
}
