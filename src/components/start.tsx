import style from './../styles/start.module.scss';

export default function Start(){
    return(
        <section className={style.home}>
            <div className={style.open}>
                <span/>
                <p>Disponível para trabalhos</p>
            </div>
            <div className={style.text}>
                <h1>Renato Alves: Desenvolvedor Frontend</h1>
                <p>Transformando ideias em experiências digitais memoráveis...</p>
            </div>
        </section>
    );
}