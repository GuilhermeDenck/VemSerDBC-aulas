import styles from './Input.module.css';

const Input = ({type, name, id, value, placeholder, onChange}) => {
  return (
    <input type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange}/>
  );
}

Input.Label = ({htmlFor, text, children}) => {
  return (
    <label htmlFor={htmlFor}> {text} {children} </label>
  );
}

Input.Select = ({name, id, value, onChange, children}) => {
  return (
    <select name={name} id={id} value={value} onChange={onChange}>
      {children}
    </select>
  );
}

Input.Option = ({value, text}) => {
  return (
    <option value={value}> {text} </option>
  );
}

Input.TextArea = ({name, id, cols, rows, placeholder, onChange}) => {
  return (
    <textarea name={name} id={id} cols={cols} rows={rows} placeholder={placeholder} onChange={onChange}/>
  );
}

export default Input;

