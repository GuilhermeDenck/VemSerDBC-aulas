import FrameGoogle from '../iframe/FrameGoogle.component';
import styles from './About.module.css'

const About = () => {
  return (
    <>
        <h1> Sobre a DBC </h1>
        <FrameGoogle className={styles.video} width={'100%'} height={'500'} src={'https://www.youtube.com/embed/h9HiHkEar-Y'} title="YouTube video player"/>
        <div className={styles.textMain}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit dolore tenetur magni ea modi ducimus nihil, minus ut. Rerum dolor sed, hic quis numquam optio incidunt omnis porro sit facere dolorem temporibus, aliquid aperiam doloribus aut laborum fugit quos consequatur commodi distinctio quia. Dolore id, cupiditate pariatur, adipisci expedita quaerat labore voluptatum numquam, nobis molestiae explicabo vitae? Repellat molestias minima in esse suscipit commodi enim doloribus. Beatae nostrum possimus quae libero vel magnam cum maiores deleniti labore architecto aut repellendus voluptas laborum dolores amet tenetur ullam, dolorum officia a veritatis quos. Numquam ducimus tempora accusantium ipsum dolorum provident recusandae quae enim quia dicta, cumque beatae harum repellendus? Dolore nobis aspernatur autem ducimus voluptas ea rem tenetur, laudantium id eligendi ab enim eos blanditiis atque deserunt beatae velit nulla quis fuga ex perspiciatis explicabo laborum veniam rerum! Placeat voluptatum repellendus rem eum error consequuntur suscipit doloremque nemo vero odit! Officia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit dolore tenetur magni ea modi ducimus nihil, minus ut. Rerum dolor sed, hic quis numquam optio incidunt omnis porro sit facere dolorem temporibus, aliquid aperiam doloribus aut laborum fugit quos consequatur commodi distinctio quia. Dolore id, cupiditate pariatur, adipisci expedita quaerat labore voluptatum numquam, nobis molestiae explicabo vitae? Repellat molestias minima in esse suscipit commodi enim doloribus. Beatae nostrum possimus quae libero vel magnam cum maiores deleniti labore architecto aut repellendus voluptas laborum dolores amet tenetur ullam, dolorum officia a veritatis quos. Numquam ducimus tempora accusantium ipsum dolorum provident recusandae quae enim quia dicta, cumque beatae harum repellendus? Dolore nobis aspernatur autem ducimus voluptas ea rem tenetur, laudantium id eligendi ab enim eos blanditiis atque deserunt beatae velit nulla quis fuga ex perspiciatis explicabo laborum veniam rerum! Placeat voluptatum repellendus rem eum error consequuntur suscipit doloremque nemo vero odit! Officia.</p>
        </div>
    </>
  );
}

export default About;