
import Style from '../styles/Orkut.module.css'
import Logo from 'next/image'
export default function Orkut() {
    return (
        <>
            <div className={Style.first}>
            <div className={Style.principal}>
                <div className={Style.logo}>
                    <div className={Style.divImage}>
                        <img className={Style.image} src="/images/orkut-logo.png" />
                    </div>
                    <div className='m-2'>
                        <h6 className='text-center'> <span className={Style.textColor}>Conecte-se</span> aos seus amigos e familiares usando recursos e mensagens instantâneas</h6>
                        <h6 className='text-center'><span className={Style.textColor}>Conheça </span>novas pessoas através de amigos de seus amigos e comunidades</h6>
                        <h6 className='text-center'><span className={Style.textColor}>Compartilhe </span> seus vídeos, fotos e paixões em um só lugar</h6>
                    </div>
                </div>
                <div className={Style.formulario}>
                    <form class="form-horizontal m-3" action="/action_page.php">
                        <h6 className="sr-only text-center mb-3">Acesse o orkut com a sua conta </h6>
                        <div className="form-group">

                            <label className="sr-only" for="email">Email:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div classNames="form-group">
                            <label className="sr-only" for="pwd">Senha:</label>
                            <input type="password" className="form-control" id="pwd" />
                        </div>
                        <div className="checkbox mt-3">
                            <label><input type="checkbox" /> Salvar minhas informações neste computador</label>
                        </div>
                        <div classNames="d-flex flex-column">
                            <button type="submit" className="mt-3 btn btn-outline-dark" >Login</button>
                            <div className="mt-3 text-center "><a href="#"  >Não consegue acessar sua conta?</a></div>
                        </div>
                    </form>

                </div>
                <div className={Style.inscrever}>
                    <div className={Style.texto}>
                        <span>Ainda não é menbro?</span>
                        <a href="#">Entre já</a>
                    </div>
                </div>
                <footer className={`text-center p-1 ` + Style.footer}> Orkut - <a href="#">Sobre Orkut</a>- <a href="#">Centro de cegurança</a>- <a href="#">Privacidade</a>- <a href="#">Termos</a></footer>

            </div>

            </div>


        </>
    )
}