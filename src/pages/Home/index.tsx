import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { NavigationMenu } from "@/components/NavigationMenu";
import Aside from "@/components/Aside/Aside";
import LaptopIcon from "@/assets/laptopIcon.svg";
import MobileDeviceIcon from "@/assets/mobileDeviceIcon.svg";

export function AboutMe() {
	return (
		<>
			<div className="min-w-80 pt-4 px-3 sm:px-14 pb-20 sm:pt-16 lg:flex lg:justify-center lg:gap-6 lg:w-full">
				<Aside />

				<main className="border border-neutral-700 p-5 rounded-2xl bg-neutral-800 lg:flex lg:flex-col lg:w-[900px] lg:pt-0">
					<NavigationMenu />

					<h1 className="font-roboto-flex font-black italic text-center sm:text-left text-orange-600 mb-4 text-3xl">
						Sobre mim
					</h1>

					<p className="text-white mb-4">
						Olá, bem-vindo (a), ao meu portfólio!
					</p>

					{/* "About Me" section with a brief description of the developer, their passions, journey, and goals in programming. */}
					<section className="text-white mb-8">
						<p className="mb-4">
							Sou um desenvolvedor apaixonado por tecnologia e
							programação e estou em busca de oportunidades como
							Desenvolvedor FullStack Júnior, meu foco é utilizar
							minhas habilidades técnicas tanto em Front-end: {""}
							<span className="font-roboto-flex font-black italic text-orange-600">
								HTML, CSS, JavaScript, TypeScript e React
							</span>{" "}
							quanto em Back-end:{" "}
							<span className="font-roboto-flex font-black italic text-orange-600">
								Node.js, Express, PostgreSQL e Prisma ORM
							</span>{" "}
							para criar soluções completas que impactem
							positivamente a vida das pessoas através da
							tecnologia.
						</p>

						<p className="mb-4">
							Desde meu primeiro contato com a programação em
							2019, minha paixão por essa área cresceu
							exponencialmente. Concluí minha formação FullStack
							na Rocketseat, em 2023, onde adquiri conhecimentos
							sólidos em todas as camadas do desenvolvimento web.
							Minha formação abrangente me proporciona uma visão
							integrada do ciclo de desenvolvimento, permitindo-me
							compreender e implementar tanto interfaces de
							usuário responsivas e intuitivas quanto APIs
							robustas e bancos de dados eficientes, agregando
							valor significativo ao trabalho em equipe.
						</p>

						<p className="mb-4">
							Programação para mim não é apenas um desejo
							momentâneo, é o que quero para minha vida! Embora eu
							esteja no começo da minha trajetória, me vejo
							diariamente como um desenvolvedor, capaz de
							construir aplicações do zero até a implantação. As
							dificuldades impostas no caminho são grandes, mas, o
							que eu aprendi na programação é que nunca devemos
							desistir e sempre persistir! Com a constância dos
							meus estudos, sei que atingirei meus objetivos.
						</p>

						<p>
							Estou entusiasmado para contribuir com projetos
							desafiadores e aprender com profissionais
							experientes. Se você está em busca de um
							Desenvolvedor FullStack Júnior dedicado, capaz de
							atuar em todas as etapas do desenvolvimento,
							apaixonado por programação e pronto para agregar
							valor à sua equipe, estou à disposição para conectar
							e colaborar.
						</p>
					</section>

					<h2 className="font-roboto-flex font-black text-orange-600 mb-4 text-xl">
						O que estou fazendo...
					</h2>

					<Card className="border border-neutral-700 mb-4">
						<CardHeader>
							<CardTitle className="font-roboto-flex font-black flex gap-2 items-center justify-center">
								<img
									src={LaptopIcon}
									alt=""
								/>
								Desenvolvimento Web
							</CardTitle>
							<CardDescription>
								Desenvolvimento de soluções web personalizadas,
								com foco em design moderno, performance
								otimizada e alto nível de qualidade para atender
								às necessidades de negócios e usuários.
							</CardDescription>
						</CardHeader>
					</Card>

					<Card className="border border-neutral-700">
						<CardHeader>
							<CardTitle className="font-roboto-flex font-black flex gap-2 items-center justify-center text-base xsm:text-lg">
								<img
									src={MobileDeviceIcon}
									alt=""
								/>
								Desenvolvimento Mobile
							</CardTitle>
							<CardDescription>
								Iniciando meus estudos em desenvolvimento
								mobile, estou aprimorando minhas habilidades na
								criação de aplicativos intuitivos e de alta
								performance para iOS e Android, com foco em
								crescimento contínuo e aplicação das melhores
								práticas do mercado.
							</CardDescription>
						</CardHeader>
					</Card>
				</main>
			</div>

			<Footer />
		</>
	);
}
