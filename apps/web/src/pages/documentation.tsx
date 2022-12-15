import { useEffect } from 'react'

export default function Page() {
    useEffect(() => {
        window.location.replace(window.location.origin + '/documentation')
    }, [])
    return <></>;
}
