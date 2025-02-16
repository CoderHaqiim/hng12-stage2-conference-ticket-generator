import React from 'react'
import { toPng } from 'html-to-image';

export default function useDownloadTickets() {
    const downloadTicket = (ref, name) => {
        if(!ref.current){
            console.log('no ref')
        }
        toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.download = `${name} - techember fest '25.png`
          link.href = dataUrl
          link.click()
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return {downloadTicket}
}
