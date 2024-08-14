import {
	DeviceMobile,
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Divide as Hamburger } from "hamburger-react";
import { Laptop } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/perfil.png";

function AboutMe() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="min-w-80 pt-4 px-3 xsm:px-14 pb-20 lg:flex lg:gap-6">
				<aside
					className={`border border-neutral-700 flex flex-col items-center justify-center mx-auto bg-neutral-800 overflow-hidden transition-[height] duration-1000 ease-in-out ${
						isOpen ? "h-96" : "h-44"
					} rounded-2xl mb-3`}>
					<span className=" w-full flex justify-end">
						<Hamburger
							toggled={isOpen}
							toggle={setIsOpen}
							size={26}
							color="white"
							rounded
						/>
					</span>
					<div className="flex items-center gap-3 mb-10">
						<img
							className="border border-neutral-600  w-20 bg-transparent rounded-2xl hover:border-2 hover:border-orange-600"
							src={profileImage}
							alt="Foto do perfil"
						/>

						<div>
							<p className="text-white text-center text-lg hover:text-orange-600">
								Wilton Lira Martins
							</p>

							<Badge>Desenvolvedor Front-end</Badge>
						</div>
					</div>

					{isOpen && (
						<div className="w-72 text-white text-center border-t border-orange-600 mb-3 pt-5 space-y-3 px-2 lg:hidden">
							<div className=" flex items-center gap-2">
								<DeviceMobile
									size={24}
									color="#ea580c"
								/>
								<div className="text-left text-xs">
									<a
										className="hover:text-orange-600"
										href="tel:+55 91 98250-4940">
										(91) 98250-4940
									</a>
								</div>
							</div>

							<div className=" flex items-center gap-2">
								<EnvelopeSimple
									size={24}
									color="#ea580c"
								/>
								<div className="text-left text-xs">
									<a
										className="hover:text-orange-600"
										href="mailto:wiltonliramartins@icloud.com">
										wiltonliramartins@icloud.com
									</a>
								</div>
							</div>

							<div className=" flex items-center gap-2">
								<GithubLogo
									size={24}
									color="#ea580c"
								/>
								<div className="text-left text-xs">
									<a
										className="hover:text-orange-600"
										href="https://github.com/wiltonmartinsdev"
										target="_blank">
										GitHub
									</a>
								</div>
							</div>

							<div className=" flex items-center gap-2">
								<LinkedinLogo
									size={24}
									color="#ea580c"
								/>
								<div className="text-left text-xs">
									<a
										className="hover:text-orange-600"
										href="https://www.linkedin.com/in/wiltonliramartins"
										target="_blank">
										LinkedIn
									</a>
								</div>
							</div>

							<div className="loader"></div>
						</div>
					)}
				</aside>

				<main className="border border-neutral-700 min-h-screen p-5 rounded-2xl bg-neutral-800 lg:flex lg:flex-1">
					<h1 className="text-orange-600 font-semibold mb-4 text-3xl">
						Sobre mim
					</h1>

					<p className="text-white mb-4">
						Olá, bem-vindo (a), ao meu portfólio!
					</p>

					<ul className="text-white mb-8">
						<li className="mb-4">
							Sou um entusiasta da programação em busca de
							oportunidades como Programador Júnior, meu foco é
							utilizar minhas habilidades técnicas em {""}
							<span className="text-orange-600">
								HTML, CSS, JavaScript e React.js
							</span>{" "}
							para impactar positivamente a vida das pessoas
							através da tecnologia.
						</li>
						<li className="mb-4">
							Programação para mim não é o que eu quero hoje, é o
							que eu quero para minha vida! Embora eu esteja no
							começo da minha trajetória, me vejo diariamente como
							programador, as dificuldades impostas no caminho são
							grandes, mas, o que eu aprendi na programação é que
							nunca devemos desistir e sempre persistir! A
							constância dos meus estudos me levará aos meus
							objetivos.
						</li>
						<li className="mb-4">
							Desde meu primeiro contato, de fato, com a
							programação em 2019, minha paixão por essa área
							cresceu exponencialmente. Atualmente, estou
							aprimorando meus conhecimentos na Rocketseat, onde
							tenho a oportunidade de me desenvolver
							constantemente.
						</li>
						<li>
							Estou entusiasmado para contribuir com projetos
							desafiadores e aprender com profissionais
							experientes. Se você está em busca de um Programador
							Jr. dedicado, apaixonado por programação e pronto
							para agregar valor à sua equipe, estou à disposição
							para conectar e colaborar.
						</li>
					</ul>

					<h2 className="text-orange-600 font-semibold mb-4 text-xl">
						O que estou fazendo...
					</h2>

					<Card className="border border-neutral-700 mb-4">
						<CardHeader>
							<CardTitle className="flex gap-1 items-center justify-center">
								<Laptop size={24} />
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
							<CardTitle className="flex gap-1 items-center justify-center text-base xsm:text-lg">
								<DeviceMobile size={24} />
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

			<footer className="border border-neutral-700 bg-neutral-800 h-14 flex justify-center items-center rounded-t-2xl fixed bottom-0 left-0 right-0 z-10 lg:hidden">
				<nav className="">
					<ul className="text-white flex gap-3">
						<li>
							<a
								className="hover:text-orange-600"
								href="#">
								Sobre mim
							</a>
						</li>
						<li>
							<a
								className="hover:text-orange-600"
								href="#">
								Resumo
							</a>
						</li>
						<li>
							<a
								className="hover:text-orange-600"
								href="#">
								Projetos
							</a>
						</li>
						<li>
							<a
								className="hover:text-orange-600"
								href="#">
								Contato
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
}

export default AboutMe;
