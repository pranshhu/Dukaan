import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./button"

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({category, handleOpen, isAnyOpen, isOpen}: NavItemProps) => {
    return <div className="relative flex items-center">
        <Button className="gap-1.5"></Button>
    </div>
}

export default NavItem