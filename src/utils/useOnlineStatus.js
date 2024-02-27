import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    // check online

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })

    },[]);

    // boolean value
    return onlineStatus;
};

export default useOnlineStatus;