import style from '../styles/Exercicio.module.css'
import { motion } from "framer-motion"
import Footer from '../components/footer'
import Link from 'next/link'


export default function Exercicio(props) {
   

    return (
        <>

            <div className={style.main}>
                <div className={`navbar navbar-expand d-flex justify-content-between ` + style.navBar}>
                    <div className={style.netflixLogo}>
                        <a className='navbar-brand' id="logo" href="http://localhost:3000"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /></a>
                            
                    </div>
                    <div className={style.textHeader}>
                         <Link href='/busca'><a className='cursor-pointer text-decoration-none'><h4 className='text-light m-3 '>Buscar</h4></a></Link> 
                        

                    </div>
                </div>
                <h1 className='display-1 text-center m-4 mb-5 text-light'>Filmes em destaque </h1>

                <motion.div
                    className={`container pb-4 pt-4 ` + style.principal}>



                    {props.list.map(item => (
                        <motion.div initial={{ scale: 0.6 }} animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }} whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }} className={` item card ` + style.boxFilme}>
                            <img className='rounded' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} width="250" height="350" /><br />

                            {/* <p className='text-center  card-title text-light'>{item.title}</p> */}
                        </motion.div>
                    ))}


                </motion.div>
            </div>
            <Footer />
        </>
    )
}
