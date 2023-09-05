'use client'

import { StroreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react"

export const ModalProvider = () => {
    //this model provider is going to be used in app/layout.tsx
    //this is to ensure that there is no hydratiion error
    //our layout.tsx is a server component so we cant use client component in it
    //the server will not havve any model open but the  client will and thatb will throw a hydration error
    //so this way we can ensure untill the lifecycle is finished running which can only happen in client component
    //we return nulll
    // as long as our app is not mounted signifies we are in server side and we are not6 going to 
    //open any model as long as we are in server side :----
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }
    return (<>
        <StroreModal />
    </>
    );
};