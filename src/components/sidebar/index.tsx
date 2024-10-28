import { HiX } from "react-icons/hi";
import SidebarLinks from "./SidebarLinks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import routes from "../routes";

const Sidebar = ({ open, onClose }: { open: boolean; onClose: any }) => {
  const router = useRouter();

  return (
    <div
      className={`fixed !z-50 flex max-h-full min-h-full  mt-[6rem] flex-col overflow-y-auto pb-10 shadow-2xl shadow-white/5 transition-transform dark:bg-navy-800 dark:text-white ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      {/* Close Icon */}
      <span
        className="absolute right-4 top-4 cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <ul className="w-full flex-1 py-4">
        <SidebarLinks routes={routes} />
      </ul>
    </div>
  );
};

export default Sidebar;
