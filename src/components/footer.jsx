import style from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <>
        <footer className={`text-center text-white  `+style.bg} >
            
            <div class="container p-4"></div>
            

            
            <div className={`text-center p-3 `+style.bg2}>
                © 2020 Copyright:
                <a className="text-white text-decoration-none pb-2" href="https://mdbootstrap.com/"> Footer com Bootstrap</a>
            </div>
            
        </footer>
        </>
    )
}