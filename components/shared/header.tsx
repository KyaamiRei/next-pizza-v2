import { cn } from "@/lib/utils"
import Image from "next/image"
import { Container } from "."
import { Button } from "../ui"
import { ArrowRight, ShoppingCart, User } from "lucide-react"

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("border", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="group relative">
              <b>123$</b>
              <span className="mx-3 h-full w-px bg-white/30"></span>
              <div className="item flex gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="relative h-4 w-4" />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
