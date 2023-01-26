import React from 'react'
import { useCallback, useEffect, useState } from 'react'
const Time = ({ date }) => {
    const [posted, setPosted] = useState("")

    const setTime = useCallback(() => {
        let time = new Date().getTime() - date.getTime()
        let currTime = time
        let format = { year: 31536000000, month: 2419200000, day: 86400000, hour: 3600000, minute: 60000, second: 1000 }
        let updateTime = () => {
            for (let key of Object.keys(format)) {
                if (time >= format[key]) {
                    currTime = format[key];
                    break;
                }
            }
        }
        updateTime();

        for (let key of Object.keys(format)) {
            if (time >= format[key]) {
                let actualTime = Math.floor(time / format[key]);
                if (actualTime > 1) setPosted(`${actualTime} ${key}s ago`)
                else setPosted(`a ${key} ago`);
                break;
            }
        }
        setTimeout(setTime , currTime)
    } , [date])

    useEffect(() =>{
        setTime()
    } , [setTime])
    return (
        <div>
            {posted}
        </div>
    )
}

export default Time