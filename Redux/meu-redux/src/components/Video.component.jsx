import {connect} from 'react-redux';

const Video = ({activeModule, activeVideo}) => {
  console.log(activeModule);
  return (
    <div>
      <h1> Meu modulo atual é: {activeModule.title} </h1>
      <h2> Meu vídeo atual é: {activeVideo.title} </h2>
    </div>
  )
}
export default connect(state => ({
  activeModule: state.videoReducer.activeModule,
  activeVideo: state.videoReducer.activeVideo
}))(Video);