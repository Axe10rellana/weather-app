const Footer = () => {
  return (
    <div>
      <footer className="text-center footer-style">
        <div className="container">
          <div className="row">
            <div className="col-md-6 footer-col">
              <h3>Dirección</h3>
              <p>
                Merlo - Argentina <br />
                Urien 188
              </p>
            </div>
            <div className="col-md-6 footer-col">
              <h3>Mis redes</h3>
              <ul className="list-inline">
                <li>
                  <a
                    target="blank"
                    href="https://www.facebook.com/axel.orellana.31337"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/axel-orellana/"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
