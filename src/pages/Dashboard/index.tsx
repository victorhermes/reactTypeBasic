import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Logo" />
            <Title>Dashboard</Title>

            <Form>
                <input type="text" placeholder="Digite o nome do repositório" />
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
