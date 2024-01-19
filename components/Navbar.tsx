
import { ModeToggle } from "./ui/ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Link href='/' className="text-2xl font-bold underline decoration-pink-500 py-3 mx-2 px-3 hover:underline hover:opacity-80 transition duration-300 cursor-pointer">daily Tools</Link>
        <div className=" py-3 px-5">
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default Navbar