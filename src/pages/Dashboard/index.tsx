import React, { useState, FormEvent } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        // Add novo repositório
        event.preventDefault();

        const response = await api.get(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repository, repository]);
    }

    return (
        <>
            <img src={logoImg} alt="Logo" />
            <Title>Dashboard</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    type="text"
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/25070025?s=400&u=9644db2c8ca12aaed6a2276aa4279c9745f28cc6&v=4"
                        alt="Perfil"
                    />

                    <div>
                        <strong>victorhermes/teste</strong>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
