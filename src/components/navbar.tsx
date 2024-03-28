import Image from 'next/image';
import style from '../styles/navbar.module.scss';
import { RootState } from '@/redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { useEffect } from 'react';

export default function Navbar(){
    //variaveis
    const states = useSelector((state : RootState) => state.states);
    const dispatch = useDispatch();

    //effect
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 300) {
              dispatch({ type: 'setqScroll', payload: true });
            } else {
                dispatch({ type: 'setqScroll', payload: false });
            }
        }
      
        window.addEventListener('scroll', handleScroll);
      
        // Limpa o ouvinte de evento quando o componente é desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch])

    const links = [
        {key: 3, name: "Projetos", link: "projetos"},
        {key: 4, name: "Habilidades", link: "habilidades"},
        {key: 2, name: "Experiências", link: "experiencias"},
        {key: 1, name: "Resumo", link: "resumo"},
        {key: 6, name: "Contate-me", link: "contato"},
    ];

    const clickButton = ( rota : string ) => {
        document.getElementById(rota)?.scrollIntoView({ behavior: 'smooth' });
    }

    const topButton = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return(
        <>
            <nav className={style.nav}>
                <div className={style.buttons}>
                    {links.map((link) => (
                        <button key={link.key} type='button' className={style.link} onClick={() => clickButton(link.link)}>
                            {link.name}
                        </button>
                    ))}
                </div>
            </nav>
            {states.qScroll ? 
                <button type='button' className={style.top} onClick={topButton}>
                    <PiArrowFatLinesUpFill />
                    Topo
                </button>
                : null
            }
        </>
    )
}