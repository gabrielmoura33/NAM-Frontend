import React, { useState, useEffect, useCallback, FormEvent } from 'react';

import { Link, useParams } from 'react-router-dom';
import { CgFileDocument } from 'react-icons/cg';
import { RiFileExcel2Line } from 'react-icons/ri';
import Sidebar from '../../components/Sidebar';
import {
  Container,
  DocumentBoxContainer,
  DocumentBox,
  InputBlock,
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
  id: string;
  titulo: string;
}
interface RouteParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<RouteParams>();

  const { token } = useAuth();
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

  const downloadExcelData = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setLoading(true);

      try {
        window.open(
          `${process.env.REACT_APP_API_URL}/documents/data/excel/${params.id}`,
        );

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
    },
    [addToast, params.id],
  );
  const downloadExcelStructure = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setLoading(true);

      try {
        window.open(
          `${process.env.REACT_APP_API_URL}/documents/structure/excel/${params.id}`,
        );

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
    },
    [addToast, params.id],
  );
  return (
    <Container id="page-orphanage">
      <Sidebar />

      {loading ? (
        <LoadingAnimation visible={loading} />
      ) : (
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
                  <DocumentBox key={doc.id}>
                    <CgFileDocument size={50} color="#000" />
                    <span>{doc?.titulo}</span>
                  </DocumentBox>
                ))}
              </DocumentBoxContainer>

              <ButtonGroup>
                <a
                  href="asds"
                  onClick={(Event: FormEvent) => downloadExcelData(Event)}
                  download
                  className="contact-button"
                >
                  Exportar dados
                </a>
                <a
                  href="sdasa"
                  onClick={(Event: FormEvent) => downloadExcelStructure(Event)}
                  className="contact-button"
                >
                  <RiFileExcel2Line size={32} />
                  Exportar modelo excel
                </a>
                <Link
                  to={`/acervo/${params.id}/documento`}
                  className="contact-button"
                >
                  Cadastrar documento
                </Link>
              </ButtonGroup>
            </div>
          </div>
        </main>
      )}
    </Container>
  );
};

export default Orphanage;
