import Cogu from '../cogu-main/Cogu.component';
import styles from './Home.module.css'

const Home = () => {
  return (
    <main>
        <h1 className={styles.h1Home}> Estamos aprendendo HTML e CSS com o melhor professor de todos </h1>
        <div className={styles.containerCogus}>
          <Cogu />
          <Cogu />
          <Cogu />
        </div>
        <div className={styles.textMain}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non impedit dolore tenetur magni ea modi ducimus nihil, minus ut. Rerum dolor sed, hic quis numquam optio incidunt omnis porro sit facere dolorem temporibus, aliquid aperiam doloribus aut laborum fugit quos consequatur commodi distinctio quia. Dolore id, cupiditate pariatur, adipisci expedita quaerat labore voluptatum numquam, nobis molestiae explicabo vitae? Repellat molestias minima in esse suscipit commodi enim doloribus. Beatae nostrum possimus quae libero vel magnam cum maiores deleniti labore architecto aut repellendus voluptas laborum dolores amet tenetur ullam, dolorum officia a veritatis quos. Numquam ducimus tempora accusantium ipsum dolorum provident recusandae quae enim quia dicta, cumque beatae harum repellendus? Dolore nobis aspernatur autem ducimus voluptas ea rem tenetur, laudantium id eligendi ab enim eos blanditiis atque deserunt beatae velit nulla quis fuga ex perspiciatis explicabo laborum veniam rerum! Placeat voluptatum repellendus rem eum error consequuntur suscipit doloremque nemo vero odit! Officia.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci non eum iusto animi, ipsam vero fugiat ex cumque blanditiis nihil cum fuga, nostrum nobis aliquam assumenda labore provident? Voluptates nobis nemo ullam expedita unde ipsam alias harum minus aspernatur blanditiis distinctio culpa, reprehenderit ab illum debitis magni impedit, soluta delectus in. Nisi quae eligendi minima molestias sit? Recusandae voluptates atque id eligendi possimus! Incidunt, eos et voluptatibus quis nulla delectus consequuntur debitis sunt minus voluptates enim blanditiis ullam sed possimus.</p>
        </div>

        <section className={styles.mapa}>
            <h2>Endereço da DBC</h2>
            <aside>
              <iframe className={styles.localizacao} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4089120483595!2d-51.20348518438338!3d-29.996412836005753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1645473021714!5m2!1spt-BR!2sbr" width="98%" height="400px"   loading="lazy"></iframe>
            </aside>
        </section>
    </main>
  );
}

export default Home;