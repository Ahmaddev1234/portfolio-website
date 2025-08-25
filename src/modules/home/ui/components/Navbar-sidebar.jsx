import { Icons } from "@/constants/constants"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { FacebookIcon, InstagramIcon, LinkedinIcon, MenuIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"


const NavbarItems=[
    {href:"/" , children:"Home"},
    {href:"#aboutUs" , children:"About"},
    {href:"#resume" , children:"Resume"},
    {href:"#portfolio" , children:"Portfolio"},
    {href:"#services" , children:"Services"}
]

const NavbarItem=({href,children,isActive})=>{

        return(
            <div className="flex w-full px-4 py-4 text-gray-200 hover:text-white text-lg">
                
                <a href={href} >{children}</a>
            </div>
        )
}

  

function NavbarSidebar() {
  return (
    <div className="text-white relative">

          <Sheet >
              <SheetTrigger className="fixed right-4 top-4 cursor-pointer z-50"><MenuIcon size={32} color="black"/></SheetTrigger>
              <SheetContent className="bg-[#054185] text-white">
                  <SheetHeader>
                      <SheetTitle>
                          <div className="flex flex-col justify-center items-center gap-4 text-white">
                              <div className="h-40 w-40 rounded-full bg-gray-500 overflow-hidden border-10 border-[#4675ac]">
                                  <img className="w-auto h-auto object-cover " src="/profile-img.jpg" alt="" />
                              </div>
                              <h1 className="text-[24px]">Alex Smith</h1>
                              <div className="flex gap-4">
                                {Icons.map((Icon)=>(
                                    <Link href={Icon.href} target="_blank"  className="cursor-pointer">
                                    <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[#4675ac] hover:bg-primary">
                                        <Icon.Icon size={12} color="white" />
                                    </div>
                                </Link>
                                ))}
                                  
                              </div>
                            </div>
                        </SheetTitle>
                      <SheetDescription className="text-white mt-4">
                          {NavbarItems.map((item)=>(
                            <NavbarItem href={item.href} key={item.href}>
                                {item.children}
                            </NavbarItem>
                          ))}
                      </SheetDescription>
                  </SheetHeader>
              </SheetContent>
          </Sheet>
    </div>
  )
}

export default NavbarSidebar
