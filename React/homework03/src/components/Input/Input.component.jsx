import style from './Input.module.css';

const Input = ({label, labelText, type, name, id, onChange}) => {
  return (
    <div className={style.form}>
      <label htmlFor={label}> {labelText} </label>
      <input type={type} name={name} id={id} onChange={onChange} required/>
    </div>
  );
}

Input.TextArea = ({label, labelText, name, id, cols, rows, onChange}) => {
  return (
    <div className={style.form}>
      <label htmlFor={label}> {labelText} </label>
      <textarea name={name} id={id} cols={cols} rows={rows} onChange={onChange} required/>
    </div>
  );
}

Input.ButtonSubmit = ({typeBtn, value}) => {
  return (
    <div className={style.form}>
      <input type={typeBtn} value={value} />
    </div>
  );
}

export default Input;