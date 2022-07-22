import "./index.css";
const Footer = () =>{
    return (
        <footer className="footer__container">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/roberta-d-agostino-285173241/"
            target="_blank"
            className="icon icon--linkedin"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <a
            href="https://github.com/robdgs"
            target="_blank"
            className="icon icon--github"
          >
            <i className="ri-github-line"></i>
          </a>
          <br />
        </div>
       
      </footer>
  
    )
}

export default Footer;