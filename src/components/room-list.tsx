import { ArrowRight, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UseRooms } from '@/http/use-rooms';
import { dayjs } from '@/lib/dayjs';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export function RoomList() {
  const { data, isLoading } = UseRooms();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salar criadas recentementes
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {isLoading && <Loader className="animate-spin" />}
        {data?.map((room) => (
          <Link
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
            key={room.id}
            to={`room/${room.id}`}
          >
            <div className="flex flex-1 flex-col gap-1">
              <h3 className="font-medium">{room.name}</h3>

              <div className="flex items-center gap-2">
                <Badge className="text-xs" variant={'secondary'}>
                  {dayjs().to(dayjs(room.createdAt))}
                </Badge>

                <Badge className="text-xs" variant={'outline'}>
                  {room.questionsCount} pergunta(s)
                </Badge>
              </div>
            </div>

            <span className="flex items-center gap-1 text-sm">
              Entrar <ArrowRight />
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
