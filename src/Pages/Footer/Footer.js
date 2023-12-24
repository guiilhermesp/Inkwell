import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.copyright}>
        © Inkwell - Todos os direitos reservados.
      </div>
      <div className={styles.align}>
        <div className={styles.content}>
          <div>
            <h3>Contact:</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:guiilherme.pereira27@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.href}
              >
                guiilherme.pereira27@gmail.com
              </a>
            </p>
            <p>
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/guilherme-dos-santos-pereira/"
                target="_blank"
                rel="noreferrer"
                className={styles.href}
              >
                Guilherme Dos Santos Pereira
              </a>
            </p>
            <p>
              Github:{" "}
              <a
                href="https://github.com/guiilhermesp"
                target="_blank"
                rel="noreferrer"
                className={styles.href}
              >
                {" "}
                guiilhermesp
              </a>
            </p>
          </div>
        </div>
        {/* <div className={styles.content}>
          <div>
            <h3>Recommended:</h3>
            <p>
              Sci-fi:{" "}
              <a
                href="mailto:guiilherme.pereira27@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.href}
              ></a>
            </p>
            <p>
              Adventure:{" "}
              <a
                href="mailto:guiilherme.pereira27@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.href}
              ></a>
            </p>
            <p>
              Suspense:{" "}
              <a
                href="mailto:guiilherme.pereira27@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.href}
              ></a>
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
