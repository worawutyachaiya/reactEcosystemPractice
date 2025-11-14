import { House, UserRoundPen, Settings } from "lucide-react"
const Navlucide = () => {
    return (
        <div className="bg-black/65 h-dvh">
            <div className="flex justify-between bg-blue-700 p-4 text-white text-xl">
            <div>
                Logo
            </div>
            <div className="flex gap-4">
                <House className="hover:text-black hover:cursor-pointer"/>
                <UserRoundPen className="hover:text-black hover:cursor-pointer"/>
                <Settings  className="hover:text-black hover:cursor-pointer"/>
            </div>
        </div>
        </div>
    )
}
export default Navlucide