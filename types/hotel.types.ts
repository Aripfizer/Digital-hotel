import { Hotel, Room } from "@prisma/client";

export type HotelWithRooms = Hotel & {
  rooms: Room[];
};
