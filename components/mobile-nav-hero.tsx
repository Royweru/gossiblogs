"use client"
import { MenuIcon } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MobileNavigation } from '@/lib/navigation'
import Link from 'next/link'
import { useSubscribeModal } from '@/hooks/use-subscribe-modal'

export const MobileNavHero = () => {
   const {subscribeModalOpen} = useSubscribeModal()
  return (
    <div className='md:hidden relative w-full flex justity-between items-center ml-2 mt-2'>
      <div className=' font-semibold mr-4'>
         <h4 className='text-2xl text-white'>
          Gossipremier
         </h4>
      </div>
      <div>
      <Sheet>
        <SheetTrigger>
        <MenuIcon className=' size-7 text-neutral-100 cursor-pointer font-bold'/>
        </SheetTrigger>
        <SheetContent side={"left"}>
           <div className=' h-full flex flex-col gap-y-4'>
                  {MobileNavigation.map((item,idx)=>(

                    <div
                     key={idx}
                     className=' w-full py-1 hover:bg-neutral-500/80 cursor-pointer font-semibold text-center'
                    >
                      <Link href={item.href}>
                      {item.name}
                      </Link>
                         
                    </div>
                  ))}
           </div>
        </SheetContent>
      </Sheet>
      </div>
     
      <div className="flex items-center justify-center ml-6">
          <button
           className=" border-2 rounded-lg border-dotted 
           bg-transparent hover:bg-slate-50/90 text-neutral-100
           hover:text-slate-900 transition duration-300 px-6
            py-2.5 cursor-pointer"
            onClick={subscribeModalOpen}
            >
              Subscribe
          </button>
        </div>
    </div>
  )
}
