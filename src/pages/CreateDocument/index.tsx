import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Sidebar from '../../components/Sidebar';
import { Container, InputCustom, InputGroupCustomContainer } from './styles';
import LoadingAnimation from '../../components/LoadingAnimation';

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [loading, setLoading] = useState(true);

  const [images, setImages] = useState<File[]>([]);
  const [selectedImagesPreview, setSelectedImagesPreview] = useState<string[]>(
    [],
  );

  const { push } = useHistory();

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const files = Array.from(event.target.files);

    setImages(files);

    const imagesPreview = files.map(file => {
      return URL.createObjectURL(file);
    });

    setSelectedImagesPreview(imagesPreview);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    images.forEach(image => data.append('images', image));
  }

  return (
    <Container id="page-create-orphanage">
      <Sidebar />
      <LoadingAnimation visible={!loading} />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Campos obrigatórios</legend>

            <div className="input-block">
              <label htmlFor="name">Título</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="name">Autor</label>
              <input id="Autor" />
            </div>
            <div className="input-block">
              <label htmlFor="about">
                Observações
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {selectedImagesPreview.map(image => (
                  <img key={image} src={image} alt="Local Orfanato" />
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                type="file"
                id="image[]"
                multiple
                onChange={handleSelectImages}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Campos personalizados</legend>
            <InputGroupCustomContainer type="varchar">
              <div className="input-block">
                <label htmlFor="name">Autor</label>
                <InputCustom id="Autor" />
              </div>
              <div className="input-block">
                <label htmlFor="name">Autor</label>
                <InputCustom id="Autor" />
              </div>
              <div className="input-block">
                <label htmlFor="name">Autor</label>
                <InputCustom id="Autor" />
              </div>
              <div className="input-block">
                <label htmlFor="name">Autor</label>
                <InputCustom id="Autor" />
              </div>
              <div className="input-block">
                <label htmlFor="name">Autor</label>
                <InputCustom id="Autor" />
              </div>
              <div className="input-block">
                <label htmlFor="name">Autor</label>
                <InputCustom id="Autor" />
              </div>
            </InputGroupCustomContainer>
            <InputGroupCustomContainer>
              <div className="input-block">
                <label htmlFor="about">
                  Gênero
                  <span>Máximo de 300 caracteres</span>
                </label>
                <textarea id="name" maxLength={300} />
              </div>
              <div className="input-block">
                <label htmlFor="about">
                  Arquivo Atual
                  <span>Máximo de 300 caracteres</span>
                </label>
                <textarea id="name" maxLength={300} />
              </div>
            </InputGroupCustomContainer>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </Container>
  );
};

export default CreateOrphanage;
