import Avatar from 'react-avatar-edit'
import React, { useEffect, useState } from 'react'

const AvatarEdit = () => {
const [src, setSrc] = useState(null);
const [preview, setPreview] = useState(null);

const onClose = ()=>{
    setPreview(null);
}
const onCrop = view=>{
    setPreview(view);
}
useEffect(() => {
  console.log(preview);
}, [preview])

    return (
    <>
   <Avatar 
   width={400} 
   height={300} 
   src={src}
   onClose={onClose}
   onCrop={onCrop}
   />
   {preview && 
    <img src={preview} />
   }
    </>
  )
}

export default AvatarEdit