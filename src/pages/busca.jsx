import style from '../styles/Exercicio.module.css'
import { motion } from "framer-motion"
import Footer from '../components/footer'
import { useState } from 'react'
import Link from 'next/link'


export default function Exercicio(props) {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState(props.list);
       console.log(props.children);
    const handleSearch = async () => {
        if (searchText !== '') {

            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
            const json = await result.json();
            setMovieList(json.list)
        }
    }
    

    return (
        <>

            <div className={style.main}>
                <div className={`navbar navbar-expand d-flex justify-content-between ` + style.navBar}>
                    <div className={style.netflixLogo}>
                        <a className='navbar-brand' id="logo" href="http://localhost:3000/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /></a>

                    </div>
                    <div className={style.textHeader}>
                        <Link href='http://localhost:3000/'><a className='text-decoration-none'><h4 className='text-light m-3 cursor-pointer '>Voltar</h4></a></Link>


                    </div>
                </div>
                <h1 className='display-1 text-center m-4 mb-5 text-light'>Buscar</h1>


                <div className='container pb-5 pt-4 p-5'>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button onClick={handleSearch} className="btn btn-success" type="button">Buscar</button>
                        </div>
                        <input type="text" className="form-control" value={searchText} placeholder="" aria-label="" aria-describedby="basic-addon1" onChange={e => setSearchText(e.target.value)} />
                    </div>
                </div>
                <div
                    className={`container pb-4 pt-4 ` + style.principal}>

                    {movieList.map(item => (
                        <motion.div initial={{ scale: 0.6 }} animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }} whileHover={{ scale: 1.3 }}
                            whileTap={{ scale: 0.9 }} className={` item card ` + style.boxFilme}>
                            <img className='rounded' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" width="250" height="350" /><br />
                            {/* <p className='text-center  card-title text-light'>{item.title}</p> */}
                        </motion.div>
                    ))}
                </div>

            </div>
            <Footer />
        </>
    )
}
export async function getServerSideProps(){
    const res = await fetch('http://localhost:3000/api/trending');
    const json = await res.json();
    return{
        props:{
            list: json.list
        }  
    }; 
  }