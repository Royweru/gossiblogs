import {useQueryState,parseAsBoolean} from 'nuqs'


export const useSearhModalFilter = () =>{
    const [isOpen,setIsOpen] = useQueryState("search-modal",
        parseAsBoolean.withDefault(false).withOptions({clearOnDefault:true})
    )
   const open = ()=>setIsOpen(true)
   const close = ()=>setIsOpen(false)
    return{
        isOpen,
           open,
           close,
           setIsOpen
    }
}
