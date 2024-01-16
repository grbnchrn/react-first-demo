'use client';
import  './general.css';


export default function TabButton({children, onSelect}){

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}
function handleClick(){
    console.log('Clicked'); 
}