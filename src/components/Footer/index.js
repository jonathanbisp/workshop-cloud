import './style.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer(){
    return(
        <footer className='footer-component'>
            <div>
            <a href='https://www.linkedin.com/in/nobarbosa/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href='https://www.linkedin.com/in/beatriz-de-santana-da-cruz/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href='https://www.linkedin.com/in/jonathan-bisp/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href='https://www.linkedin.com/in/julianecarvalho-/' target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;