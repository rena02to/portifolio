import Image from 'next/image';
import style from './../styles/start.module.scss';
import { useEffect } from 'react';

export default function Start(){
    //deixar o texto circular
    useEffect(() => {
        const text = document.getElementById('name');
        if(text){
            text.innerHTML = text.innerText.split("").map(
                (char, i) =>
                `<span style="transform:rotate(${i * 6.5}deg)">${char === " " ? "&nbsp;" : char}</span>`
            ).join("");
        }
    }, []);

    return(
        <section className={style.home}>
            <div className={style.containerIcon}>
                <div className={style.name}>
                    <p id='name'>Renato Alves - Portifólio - </p>
                </div>
                <Image alt='Hacker icon' src={'/images/hacker.png'} height={45} width={45} />
            </div>
            <div className={style.open}>
                <span/>
                <p>Disponível para trabalhos</p>
            </div>
        </section>
    );
}