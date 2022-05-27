import Style from '../styles/Main.module.css'
import {useForm} from 'react-hook-form'
export default function Login() {
    const {register,handleSubmit} = useForm();

   function handleSignIn(data){
    console.log(data)
    }
    return (
        <div className={Style.frame}>
            <form className={Style.home} onSubmit={handleSubmit(handleSignIn)}>
                <h3 className="mb-3">Sign In</h3>
                <div className="form-group">
                    <label>Email </label>
                    <input {...register('email')} type="email" className="form-control mt-2 mb-2" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input {...register('senha')}type="password" className="form-control mt-2 " placeholder="Digite sua senha" />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3 mb-2 ">Entrar</button>
                <p className="forgot-password text-right ">
                    Esqueceu a <a href="#">senha?</a>
                </p>
            </form>
        </div>
    )
}