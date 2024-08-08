import { LogOut } from "lucide-react";
import Button from "../Button";

/* eslint-disable @next/next/no-img-element */
const Profile = () => {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/d0uglasSantos.png"
        alt="Profile Photo"
        className=" w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Douglas Santos
        </span>
        <span className="truncate text-sm text-zinc-500 dark:to-zinc-400">
          douglasas410@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
};

export default Profile;
