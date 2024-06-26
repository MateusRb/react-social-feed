import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/MateusRb.png' />
          <div className={styles.authorInfo}>
            <strong>Mateus Ribeiro</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title='11 de Maio as 8:30h' dateTime='2022-05-11 8:30:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p> 
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
  </div>
    </article>
  )
}