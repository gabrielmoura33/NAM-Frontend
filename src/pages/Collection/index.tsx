import React from 'react';
// import { FaWhatsapp } from "react-icons/fa"
import { FaWhatsapp } from 'react-icons/fa';

import Sidebar from '../../components/Sidebar';

import './orphanage.css';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: {
    id: number;
    url: string;
  }[];
}

interface RouteParams {
  id: string;
}

const Orphanage: React.FC = () => {
  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src="http://localhost:3333/images/458594d3e1d6e823b061-Frame.png"
            alt="Lorem Ipsum"
          />

          <div className="images">
            <button type="button" className="active">
              <img
                src="http://localhost:3333/images/458594d3e1d6e823b061-Frame.png"
                alt="lorem ipsum"
              />
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>Acervo Lorem Ipsum</h1>
            <hr />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
              massa. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
              magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
              felis ut adipiscing.
            </p>

            <div className="map-container" />

            <h2>Documentos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
            </p>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#fff" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orphanage;
