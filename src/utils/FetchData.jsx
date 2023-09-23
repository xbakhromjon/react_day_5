import {useEffect, useState} from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isPending, setPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setPending(false)
                })
                .catch(err => {
                    setErrorMessage(err.message)
                })
        }, 1000)
    }, []);

    return {data, isPending, errorMessage}
}

export default useFetch