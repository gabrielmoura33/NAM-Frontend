import React, { useState, useEffect, useCallback } from 'react';
// import { FaWhatsapp } from "react-icons/fa"
import { FaWhatsapp } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import { CgFileDocument } from 'react-icons/cg';
import { RiFileExcel2Line } from 'react-icons/ri';
import Sidebar from '../../components/Sidebar';
import {
  Container,
  DocumentBoxContainer,
  DocumentBox,
  InputBlock,
  Label,
  ButtonGroup,
} from './styles';
import LoadingAnimation from '../../components/LoadingAnimation';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

interface Collection {
  id: number;
  name: string;
  about: string;
  created_by: string;
  cover_image_url: string;
}

interface Document {
  titulo: string;
}
interface RouteParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<RouteParams>();

  const { user, token } = useAuth();
  const { addToast } = useToast();
  const [collection, setCollection] = useState<Collection>();
  const [documents, setDocuments] = useState<Document[]>();

  const [loading, setLoading] = useState(true);

  const loadCollectionAPIData = useCallback(async () => {
    const response = await api.get(`/collection/${params.id}`, {
      headers: { Authorization: token },
    });

    setCollection(response.data);
  }, [params.id, token]);

  const loadCollectionDocumentsData = useCallback(async () => {
    const response = await api.get(`/documents/data/${params.id}`, {
      headers: { Authorization: token },
    });

    setDocuments(response.data);
  }, [params.id, token]);

  useEffect(() => {
    loadCollectionAPIData();
    loadCollectionDocumentsData();
    setLoading(false);
  }, [loadCollectionAPIData, loadCollectionDocumentsData, setLoading]);

  const downloadExcelData = useCallback(async () => {
    setLoading(true);

    try {
      await api.get(`/documents/excel/${params.id}`, {
        headers: { Authorization: token },
      });

      addToast({
        type: 'sucess',
        title: 'Download realizado!',
        description:
          'O Download dos documentos em excel foi realizado com sucesso',
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Erro ao realizar download!',
        description:
          'Ocorreu um erro ao realizar o download da planilha do acervo',
      });
    } finally {
      setLoading(false);
    }
  }, [addToast, params.id, token]);
  return (
    <Container id="page-orphanage">
      <LoadingAnimation visible={loading} />
      <Sidebar />

      {!loading && (
        <main>
          <div className="orphanage-details">
            <img src={collection?.cover_image_url} alt="Lorem Ipsum" />

            <div className="images">
              <button type="button" className="active">
                <img src={collection?.cover_image_url} alt="lorem ipsum" />
              </button>
            </div>

            <div className="orphanage-details-content">
              <h1>{collection?.name}</h1>

              <hr />

              <p>{collection?.about}</p>

              <div className="map-container" />

              <h2>Documentos</h2>
              <InputBlock>
                <input id="name" value="" placeholder="Filtrar" />
              </InputBlock>

              <DocumentBoxContainer>
                {documents?.map(doc => (
                  <DocumentBox>
                    <CgFileDocument size={50} color="#000" />
                    <span>{doc?.titulo}</span>
                  </DocumentBox>
                ))}
              </DocumentBoxContainer>

              <ButtonGroup>
                <button
                  type="button"
                  onClick={() => downloadExcelData()}
                  className="contact-button"
                >
                  Exportar dados
                </button>
                <button type="button" className="contact-button">
                  <RiFileExcel2Line size={32} />
                  Exportar modelo excel
                </button>
                <button type="button" className="contact-button">
                  Cadastrar documento
                </button>
              </ButtonGroup>
            </div>
          </div>
        </main>
      )}
    </Container>
  );
};

export default Orphanage;
