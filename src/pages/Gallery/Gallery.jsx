import styles from "./Gallery.module.css";
import Header from "../../components/PagesHeader/Header";
import { Fragment } from "react";
import HeaderImage from "../../images/header_bg_3.jpg";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i < galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <Fragment>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo reiciendis
        neque quidem ex quibusdam, minus maiores blanditiis deleniti animi
        numquam?
      </Header>

      <section className={styles.gallery}>
        <div className={`container ${styles.gallery_container}`}>
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt="gallery img" />
            </article>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Gallery;
