import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Wallet() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-black">
      {/* Заголовок страницы */}
      <div className="text-center">
        {/* Иконка с единорогом */}
        <Image 
          src="/gift-iso-premium.png" // Убедитесь, что иконка находится в папке public
          alt="Unicorn Icon"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-white mb-2">Levelling up</h1>
        <p className="text-lg text-gray-400">
          Connect your wallet to access upcoming crypto features. Our team is working hard to bring them to you soon!
        </p>
      </div>

      {/* Кнопка Connect Wallet */}
      <Button
        className="mt-8 w-full max-w-xs py-3 text-base text-white bg-white text-black rounded-lg hover:bg-gray-100"
      >
        Connect wallet
      </Button>
    </div>
  );
}
