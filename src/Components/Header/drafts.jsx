// import React,{useState, useEffect} from 'react'
// import "./Home.scss"
// import banner from "../../banner.jpg"
// import axios from 'axios'

// const apiKey="a0b7dc80b906464e28bddcd780d9c9b2"
// const url="https://api.themoviedb.org/3"
// const trending="trending/movie/week"


// const Card= ({img})=>(
//     <img className="card" src={img} alt="cover"/>
// )


// const Row = ({title})=>(

//     <div className="row">

//         <h2>{title}</h2>

//         <div>
//             <Card img ={"https://nbg1.your-objectstorage.com/yourprops/uploads/images/202503/img_lg_67e2bc6784c192-39715945.jpg"}/>
//         <Card img={"https://www.jambofilms.com/img/storage/gallery/movies/I%20Will%20Find%20You/a232fb03bc288f2457aa5d494216bc9f.jpg?w=640&fm=webp"} />
//         <Card img={"https://jambofilms.com/img/storage/gallery/movies/The%20Rip/rip_ver2.jpg?w=640&fm=webp"} />
//         <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ288BfZ7PAw0MnWb6lmEN4fSbURJHADaL2y4Ew4fPgUWPkO3o5jBILr4G&s=10"} />
//         <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbR-Il0cpQVs50hMMAFFOUcZcxCUKkqw5RiDXnH1UVLhTIxv_AGFvszXM&s=10"} />
//         <Card img={"https://jambofilms.com/img/storage/gallery/movies/JOhn%20Wick%202/john_wick_chapter_two_ver4_xxlg.jpg?w=640&fm=webp"} />
//         <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUi4HmGb8JSQktfeWKsLcaTa4yPEadWAM_xgnOHfI8qhc4A3lcvtOlOnQ&s=10"} />
//         <Card img={"https://www.jambofilms.com/img/storage/gallery/series/Unfamiliar/unfamiliar.jpg?w=640&fm=webp"} />
//         <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyNYm3x28qh4yKPuglKDe136LreRQXidLE-GFdqIfAfrfvhn_ow07CuI&s=10"} />
//         </div>
//     </div>
// )

// const Home = () => {


//     useEffect(()=>{
//       const fetchTrending = async() =>{
//        const {data} = await axios.get(`${url}/${trending}?api_key=${apiKey}`);
//       console.log(data)

//       };

//       fetchTrending()

//     },[])




//     console.log(banner)

//   return (
//     <section className="home">
//         <div className="banner">
//             <img src={banner} alt="banner" />
//         </div>

//         <Row title={"Popular on NETFLIX"}/>
//     </section>
//   )
// }

// export default Home