import style from './Input.module.css'

const Input = ({ tipo, value, textoLabel, onChange}) => {
  return (
    <div className={style.inputForm}>
      <label>{textoLabel}
        <input
          type={tipo}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;