import style from './../styles/start.module.scss';

export default function Start(){
    return(
        <section className={style.home} id='projetos'>
            <div className={style.open}>
                <span/>
                <p>Disponível para trabalhos</p>
            </div>
        </section>
    );
}