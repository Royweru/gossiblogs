import {useQueryState,parseAsBoolean} from 'nuqs'

export const useSubscribeModal = ()=>{
    const[isOpen,setIsOpen] = useQueryState("subscribe-modal",
        parseAsBoolean.withDefault(false).withOptions({clearOnDefault:true})
    )
    const subscribeModalOpen = () =>setIsOpen(true)
    const subscribeModalclose = () =>setIsOpen(false)

    return{
        isOpen,
        subscribeModalOpen,
        subscribeModalclose,
        setIsOpen
    }
}