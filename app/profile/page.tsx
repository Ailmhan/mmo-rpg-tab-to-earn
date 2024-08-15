import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Импортируем Avatar

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 bg-black">
      {/* Аватар */}
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src="/path/to/avatar-image.png" alt="User Avatar" />
        <AvatarFallback>U</AvatarFallback> {/* Фоллбек на случай отсутствия изображения */}
      </Avatar>

      <h1 className="text-xl font-bold text-white">Profile</h1>
      <p className="mt-2 text-sm text-gray-400">Your profile information</p>

      <div className="mt-8 w-full max-w-sm space-y-4">
        <Card className="border border-gray-700 bg-black text-white">
          <CardHeader>
            <CardTitle className="text-green-400">Username</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Your username details...</p>
          </CardContent>
        </Card>

        <Card className="border border-gray-700 bg-black text-white">
          <CardHeader>
            <CardTitle className="text-green-400">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            <p>Details about your account settings...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
