import React from 'react';

const Footer = ({fecha}) =>{

    return(
        <footer>
            <p>
                Todos los derechos resevados &copy; {fecha}
            </p>
        </footer>
    );
}
export default Footer;