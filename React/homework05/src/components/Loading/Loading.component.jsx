import gitLoading from '../../images/Settings.gif'
import style from './Loading.module.css'

function Loading() {
  return (
    <div className={style.loading}>
      <div>
        <img src={gitLoading} alt="Loading" />
        <h1>Loading...</h1>
      </div>
    </div>
  )
}

export default Loading;