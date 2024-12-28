import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus] = useState(true);

    // Since event Listeners needs to be attached only on initial render therefore we use the hook useEffect.
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })

        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })

    },[]);

    return onlineStatus;
}

export default useOnlineStatus;