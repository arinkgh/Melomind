// "use client";

// import Image from "next/image";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { RiEditBoxFill } from "react-icons/ri";
// import { useReserveStore } from "@/store/reserve.store";

// const ReserveTable = () => {
//   const reservations = useReserveStore((s) => s.reservations);
//   const remove = useReserveStore((s) => s.removeReservation);

//   if (reservations.length === 0) return null;

//   return (
//     <div className="border-2 rounded-[20px] w-full bg-background p-4 flex flex-col gap-3">
//       {reservations.map((item) => (
//         <div
//           key={item.id}
//           className="bg-secondary/5 rounded-[20px] w-full flex flex-col lg:flex-row lg:h-12"
//         >
//           <div className="flex items-center gap-2 p-3 lg:w-80">
//             <Image src="/Images/mind.svg" alt="" width={24} height={24} />
//             <p className="text-secondary font-medium">
//               <span>{item.group?.name ?? "-"}</span> - 
//               <span>{item.type?.name ?? "-"}</span> -
//               <span>{item.meeting?.name ?? "-"}</span>
//             </p>
//           </div>
          

//           <div className="p-3 lg:w-40 text-center">{item.date}</div>
//           <div className="p-3 lg:w-40 text-center">{item.time}</div>
//           <div className="p-3 lg:w-40 text-center">
//             {item.price.toLocaleString()} تومان
//           </div>

//           <div className="p-3 lg:w-40 flex gap-4 justify-center">
//             <RiEditBoxFill className="text-secondary/40 w-6 h-6" />
//             <FaRegTrashAlt
//               onClick={() => remove(item.id)}
//               className="text-[#FF2424] w-5 h-5 cursor-pointer"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ReserveTable;



"use client";

import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { useReserveStore } from "@/store/reserve.store";

const ReserveTable = () => {
  const { reservations, items, removeReservation } = useReserveStore();

  const getService = (id: string) =>
    items.find((s) => s.id === id);

  const getPrice = (ids: string[]) =>
    ids.reduce((sum, id) => sum + (getService(id)?.price ?? 0), 0);

  if (!reservations.length) return null;

  return (
    <div className="border-2 rounded-[20px] w-full bg-background p-4 flex flex-col gap-3">
      {reservations.map((r) => {
        const services = r.services.map(getService);
        const price = getPrice(r.services);

        return (
          <div key={r.id} className="bg-secondary/5 rounded-[20px] w-full flex flex-col lg:flex-row lg:h-12">
            <div className="flex items-center gap-2 p-3 lg:w-80">
              <Image src="/Images/mind.svg" alt="" width={24} height={24} />
              <p className="text-secondary font-medium">
                {services.map((s) => s?.name).join(" - ")}
              </p>
            </div>

            <div className="p-3 lg:w-40 text-center">{r.date}</div>
            <div className="p-3 lg:w-40 text-center">{r.time}</div>
            <div className="p-3 lg:w-40 text-center">
              {price.toLocaleString()} تومان
            </div>

            <div className="p-3 lg:w-40 flex gap-4 justify-center">
              <RiEditBoxFill className="text-secondary/40 w-6 h-6" />
              <FaRegTrashAlt
                onClick={() => removeReservation(r.id)}
                className="text-[#FF2424] w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReserveTable;
