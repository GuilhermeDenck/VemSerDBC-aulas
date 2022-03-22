import style from './FrameGoogle.module.css'

const FrameGoogle = ({src, width, height, title}) => {
  return (
    <iframe className={style.iframe} src={src} width={width} height={height} title={title}/>
  );
}

export default FrameGoogle;
