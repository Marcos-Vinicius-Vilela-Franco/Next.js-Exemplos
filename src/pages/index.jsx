import Login from "../components/Login"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Google from "./LayoutGoogle";

import Orkut from "./layoutOrkut";
import Exercicio from "./exercicio";

export default function Home(props) {
  return (
      // <Login/>
     // <Orkut/>
     <>
     <Head>
       <title>Exemplo</title>
      
     </Head>
    {/* <Exercicio list={props.list}/> */}
    <Google/>
    
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