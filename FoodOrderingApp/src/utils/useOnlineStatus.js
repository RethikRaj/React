import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus] = useState(true);

    // Since event Listeners needs to be attached only on initial render therefore we use the hook useEffect.
    useEffect(()=>{
        const handleOffline = () => setOnlineStatus(false);
        const handleOnline = () => setOnlineStatus(true);

        window.addEventListener('offline',handleOffline);

        window.addEventListener('online',handleOnline);

        return () =>{
            window.removeEventListener("offline",handleOffline);
            window.removeEventListener("online",handleOnline);
        }

    },[]);

    return onlineStatus;
}

export default useOnlineStatus;