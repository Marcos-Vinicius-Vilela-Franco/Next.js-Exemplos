import style from '../styles/Google.module.css'
export default function Google() {
    return (
        <>
            <div className={style.container}>
                <div className={style.topbar}>
                    <div className={style.menu}>
                        <a className={`text-decoration-none ` + style.links} href="https://mail.google.com/mail/?tab=rm&ogbl">Gmail</a>
                        <a className={`text-decoration-none ` + style.links} href="https://www.google.com.br/imghp?hl=pt-PT&tab=ri&ogbl">Imagens</a>
                        <div className={style.divIcon}>
                            <svg class={style.icon} focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                        </div>
                        <div className={style.gibi}>M</div>
                    </div>
                </div>
                <div className={style.main}>
                    <div className={style.logo}>

                        <img className={style.imageSize} src="/images/googlelogo.png" alt="logo" />
                    </div>
                    <div className={style.boxPesquisa}>
                        <div className={style.busca}>
                            <span className={style.lupaSpan}><svg className={style.lupa} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>
                            <input type="text" name="" className={style.inputStyle} />
                            <span className='d-flex' > <img src="/images/tia.png" alt="teclado" /></span>
                            <div className={style.mic}><svg class="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg></div>
                        </div>
                        <div className={style.favorito}>
                            <div className={style.pGoogle}><a>Pesquisa Google</a></div>
                            <div className={style.pGoogle}><a>Estou com sorte</a></div>
                        </div>
                    </div>
                    <div className={style.vazia}></div>

                </div>
                <div className={style.footerStyle}>

                <div className={style.pais}>
                            Brasil
                        </div>
                    <div className={style.corpoFooter}>
                       
                        
                        <a href="" className={style.footerLink}>Sobre</a>
                        <a href="" className={style.footerLink}>Publicidade</a>
                        <a href="" className={style.footerLink}>Negócios</a>
                        <a href="" className={style.footerLink}>Como funciona a Pesquisa</a>
                        <a href="" className={style.footerLink}>Privacidade</a>
                        <a href="" className={style.footerLink}>Termos</a>
                        <a href="" className={style.footerLink}>Configurações</a>
                        
                    </div>

                </div>
            </div>
        </>
    )
}