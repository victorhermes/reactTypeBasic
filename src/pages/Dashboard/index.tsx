import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
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
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepositories = localStorage.getItem(
            '@GithubExplorer:repositories',
        );

        if (storageRepositories) {
            return JSON.parse(storageRepositories);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories),
        );
    }, [repositories]);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        // Add novo repositório
        event.preventDefault();

        const response = await api.get(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewRepo('');
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
                {repositories.map((repositorie) => (
                    <Link
                        key={repositorie.full_name}
                        to={`repositories/${repositorie.full_name}`}
                    >
                        <img
                            src={repositorie.owner.avatar_url}
                            alt={repositorie.owner.login}
                        />

                        <div>
                            <strong>{repositorie.full_name}</strong>
                            <p>{repositorie.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
