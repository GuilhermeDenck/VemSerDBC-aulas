const Logo = ({caminho, alt, src, width, heigth}) => {
  return (
    <a href={caminho} target="_blank"> <img src={src} alt={alt} width={width} height={heigth} /> </a>
  );
}

export default Logo;