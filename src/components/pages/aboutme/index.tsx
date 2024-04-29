import React from 'react'
import './style.css'

const AboutMe: React.FunctionComponent = () => {
    return (
        <div className='pagina'>
            <div className='blocoPagina'>
                <div className="txtAboutMe">
                    <p>Olá, sou Walmir Fernandes, um Arquiteto de Soluções com 7 anos de experiência em projetos de implantação e manutenção de sistemas. Minha jornada profissional tem sido marcada por um profundo comprometimento com a excelência e uma busca constante por desafios inspiradores.</p>
                    <br></br>
                    <p>Ao longo da minha carreira, tive o privilégio de participar ativamente em projetos de geração de arquivos fiscais e tributários, utilizando tecnologias como .NET, SQL e Azure. Essas experiências me permitiram aprimorar minhas habilidades técnicas e adquirir um profundo entendimento das complexidades do mundo tributário, contribuindo para o sucesso de projetos cruciais para nossas operações.</p>
                    <br></br>
                    <p>Meu avanço na carreira não se limita apenas à implementação técnica, mas também à busca constante de conhecimento sobre padrões de projeto e melhores práticas. Investi tempo e esforço para entender a importância de padrões de projeto, visando viabilizar as melhores formas de trabalho em nossos projetos. Acredito que a combinação de conhecimento técnico e sólida base conceitual é fundamental para atender às necessidades em constante evolução do mercado.</p>
                    <br></br>
                    <p>Além de concluir meu MBA em Arquitetura de Soluções em abril de 2023, estou atualmente dedicando esforços ao aprimoramento contínuo. Estou estudando para obter certificações importantes, como TOGAF e Cloud Foundation AWS e Azure, a fim de aprofundar ainda mais minha expertise e oferecer soluções mais robustas para os desafios tecnológicos atuais.</p>
                    <br></br>
                    <p>Meu desejo é aplicar essa expertise em projetos desafiadores, onde eu possa contribuir para a transformação digital e a gestão eficiente. Acredito que a inovação é impulsionada pela busca de desafios e estou ansioso para enfrentar novos horizontes profissionais.</p>
                    <br></br>
                    <p>Estou sempre aberto a oportunidades que me permitam aplicar minha paixão por tecnologia e minha dedicação em fazer a diferença em projetos inovadores. Se você está interessado em discutir colaborações potenciais, novos desafios ou trocar ideias, não hesite em entrar em contato.</p>
                    <br></br>
                    <p>Vamos conectar e explorar como podemos trabalhar juntos para alcançar resultados excepcionais!</p>
                </div>
                <div className="imgAboutMe">
                    <img src={process.env.PUBLIC_URL + '/Picture1.png'} alt="Walmir Fernandes" />
                </div>
            </div>            
        </div>
    )
}

export default AboutMe