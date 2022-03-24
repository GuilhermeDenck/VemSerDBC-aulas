import style from './Terminal.module.css';

const Terminal = ({width, children}) => {

  return(
    <div className={style[`terminal${width}`] }>
      <div className={style.btns}>
        <div className={style.btnFechar} />
        <div className={style.btnMaximizar} />
        <div className={style.btnMinimizar} />
      </div>

      <div className={style.classesText}>
        {children}
      </div>
    </div>
  );
}

Terminal.Tag = ({classe, children}) => {
  return (
    <div className={style.blocoCodigo}>
    <span> .{classe} &#123;  </span>
      {children}
    <span> &#125; </span>
  </div>
  );
}

Terminal.Prop = ({textTag, textProp}) => {
  return (
    <div className={style.bloco}>
        <p className={style.propriedade}> {textTag}: </p>
        <p className={style.estilo}> {textProp}; </p>
    </div>
  );
}

export default Terminal