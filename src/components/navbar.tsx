import Image from 'next/image';
import style from '../styles/navbar.module.scss';
import { RootState } from '@/redux/reducers';
import { useSelector, useDispatch } from 'react-redux';

export default function Navbar(){
    //variaveis
    const states = useSelector((state : RootState) => state.states);
    const dispatch = useDispatch();

    const links = [
        {key: 3, name: "Projetos", link: "##"},
        {key: 4, name: "Habilidades", link: "##"},
        {key: 2, name: "Experiências", link: "##"},
        {key: 1, name: "Resumo", link: "##"},
        {key: 6, name: "Contate-me", link: "##"},
    ];

    return(
        <nav className={style.nav}>
            <div className={style.buttons}>
                {links.map((link) => (
                    <button key={link.key} type='button' className={style.link}>
                        {link.name}
                    </button>
                ))}
            </div>
        </nav>
    )
}