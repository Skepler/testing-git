import React from 'react';
import ReactDOM from 'react-dom/client';
//ALT+CLICK...multipal cursor
import './index.css';

/*const Gamelist = ['Diablo 4', 'World of Warcraft', 'Overwatch 2' ]
const newGamelist = Gamelist.map((Gamelist) => {
    return <h1>{Gamelist}</h1>;

})*/
const feliratok = [
{
    nev: 'Diablo 4',
    tipus: 'Action RPG',
    id:1,
},
{
    nev: 'World of Warcraft',
    tipus: 'MMORPG',
    id:2,
},
{
    nev: 'Overwatch 2',
    tipus: 'Team-Based Action',
    id:3,
}
];

const Blizzard = () =>{//component
    return (<section className='Blizzard'>
        {feliratok.map((felirat) =>{
            const {nev, tipus, id} = felirat ;
            return <Games nev={nev} tipus={tipus} key={id}></Games>
        })}
        <Games></Games>
        <Games></Games>
    </section>
    );
}

const Games = (props ) =>{
    return <article className='Games'>
        <img src='./Pictures/Diablo 4.jpg' alt='Diablo 4'/> 
        <h4>{props.D4}</h4>
        <h4>{props.Wow}</h4>
        <h4>{props.OW}</h4>
    </article>


}
let i = 0;
const alfonz=function (){
    document.body.style.backgroundColor="#fff";
}
const btn = document.getElementById("btn");
btn.onclick = alfonz;
console.log(i);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Blizzard></Blizzard>);