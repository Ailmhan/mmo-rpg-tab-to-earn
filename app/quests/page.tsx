import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Quests() {
  // Пример данных для квестов
  const quests = [
    {
      id: 1,
      title: "Watch video",
      reward: "+ 5 000 AP",
      icon: "/video-camera-iso-color.png", // Иконка для примера
    },
    {
      id: 2,
      title: "Connect Wallet",
      reward: "+ 2 500 AP",
      icon: "/wallet-iso-color.png", // Иконка для примера
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-full p-4 bg-black">
      {/* Заголовок страницы */}
      <div className="text-center">
        <Image 
          src="/target-iso-color.png" // Добавьте свою иконку заголовка
          alt="Tasks Icon"
          width={60}
          height={60}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-white mb-2">Quests</h1>
        <p className="text-lg text-gray-400">Get rewards for completing partner tasks</p>
      </div>

      {/* Секция с квестами */}
      <div className="w-full max-w-md mt-8">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className="relative flex items-center justify-between p-4 mb-4 bg-green-100 bg-opacity-10 rounded-xl shadow-sm"
            style={{
              borderRadius: '12px',
            }}
          >
            {/* Иконка квеста */}
            <div className="flex items-center">
              <Image
                src={quest.icon}
                alt={quest.title}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-3">
                <h2 className="text-green-500 text-sm font-semibold"> {/* Уменьшили шрифт заголовка */}
                  {quest.title}
                </h2>
                <p className="text-green-400 text-xs"> {/* Уменьшили шрифт награды */}
                  {quest.reward}
                </p>
              </div>
            </div>
            {/* Кнопка Claim */}
            <Button
              className="py-2 px-4 text-sm bg-green-500 text-white rounded-lg hover:bg-green-400"
              style={{
                minWidth: '80px', // Увеличенная ширина кнопки для лучшего выравнивания
              }}
            >
              Claim
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
