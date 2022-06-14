import Image from 'next/image'
import vid from './travel.jpg'
import style from './Vidhandle.module.css'
const Vidhandle = () => {
  return (
    <div className={style.container}>
        <Image src={vid}/>
    </div>
  )
}

export default Vidhandle