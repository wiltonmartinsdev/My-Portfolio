import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Aside from "@/components/Aside/Aside";
import focusTimerImg from "@/assets/focusTimer.png";
import foodExplorerImg from "@/assets/foodExplorer.png";
import gitFavImg from "@/assets/gitFav.png";
import imcImg from "@/assets/imc.png";
import nextNoteImg from "@/assets/nextNote.png";
import myPortfolioImg from "@/assets/myPortfolio.png"
import imHereImg from "@/assets/imHere.png"

export function Projects() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const [selectedCategory, setSelectedCategory] = useState("all");

	const projects = [
		{
			id: 1,
			title: "Portfólio",
			description:
				"Bem-vindo ao meu portfólio pessoal! Este projeto foi desenvolvido para apresentar minhas habilidades como desenvolvedor front-end.",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/My-Portfolio",
			image: myPortfolioImg,
		},
		{
			id: 2,
			title: "Food Explorer",
			description:
				"Este projeto consiste em desenvolver um menu interativo de ponta a ponta, ou seja, do Front-End ao Back-End onde terá duas personas que serão o Admin e Usuário.",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/FoodExplorer-Front-end",
			image: foodExplorerImg,
		},
		{
			id: 3,
			title: "Git Fav",
			description:
				"Essa aplicação consiste em pesquisar por um usuário no GitHub e adicioná-lo como usuário favorito.",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/Git-Fav",
			image: gitFavImg,
		},
		{
			id: 4,
			title: "Next Note",
			description:
				"A aplicação permite aos usuários adicionar notas de forma fácil e intuitiva, seja digitando diretamente ou gravando uma nota em áudio que será convertida automaticamente para texto.",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/next-note",
			image: nextNoteImg,
		},
		{
			id: 5,
			title: "Focus Timer",
			description:
				"Este projeto consiste em desenvolver um temporizador e alternar entre o tema light e dark mode.",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/FocusTimer-2.0",
			image: focusTimerImg,
		},
		{
			id: 6,
			title: "Calculadora de IMC",
			description:
				"Esse projeto consiste em fazer o cálculo simples de IMC.",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/Calculadora-de-IMC",
			image: imcImg,
		},
		{
			id: 7,
			title: "Im Here",
			description:
				"Esta é uma aplicação mobile que permite adicionar e remover participantes de eventos como treinamentos, palestras ou workshops.",
			category: "mobileApp",
			href: "https://github.com/wiltonmartinsdev/im-here",
			image: imHereImg,
		},
	];

	const filteredProjects =
		selectedCategory === "all"
			? projects
			: projects.filter(
					(project) => project.category === selectedCategory
			  );

	return (
		<>
			<div className="min-w-80 pt-4 px-3 sm:px-14 pb-20 sm:pt-16 lg:flex lg:justify-center lg:gap-6 lg:w-full">
				<Aside />

				<main className="border border-neutral-700 p-5 rounded-2xl bg-neutral-800 lg:flex lg:flex-col lg:w-[900px] lg:pt-0">
					<nav className="hidden lg:flex lg:justify-end lg:h-16 lg:relative left-5 bottom-px ">
						<ul className="flex items-center gap-4 bg-neutral-700 px-8 border-collapse rounded-tr-2xl rounded-bl-2xl">
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "text-orange-600"
											: "text-white"
									}
									to="/">
									Sobre mim
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "text-orange-600"
											: "text-white"
									}
									to="/resume">
									Resumo
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "text-orange-600"
											: "text-white"
									}
									to="/projects">
									Projetos
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "text-orange-600"
											: "text-white"
									}
									to="/contact">
									Contato
								</NavLink>
							</li>
						</ul>
					</nav>

					<h1 className="text-center sm:text-left text-orange-600 font-semibold mb-4 text-3xl">
						Projetos
					</h1>

					<Select
						onOpenChange={(open) => setIsDropdownOpen(open)}
						onValueChange={(value) => setSelectedCategory(value)}>
						<SelectTrigger className="w-full text-white">
							<SelectValue placeholder="Todos" />
						</SelectTrigger>

						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							<SelectItem value="webApp">Web</SelectItem>
							<SelectItem value="mobileApp">Mobile</SelectItem>
						</SelectContent>
					</Select>

					<div
						className={`transition-all duration-600 ease-in-out ${
							isDropdownOpen ? "mt-24" : "mt-0"
						} py-6 grid justify-center gap-6 sm:grid-cols-2 sm:justify-items-center xl:grid-cols-3`}>
						{filteredProjects.map((project) => (
							<a
								key={project.id}
								href={project.href}
								target="_blank"
								rel="noopener noreferrer">
								<div className="card border border-neutral-600">
									<img
										src={project.image}
										alt={project.title}
										className="card__image"
									/>
									<div className="card__content">
										<p className="card__title">
											{project.title}
										</p>
										<p className="card__description">
											{project.description}
										</p>
									</div>
								</div>
							</a>
						))}
					</div>
				</main>
			</div>

			<footer className="border border-neutral-700 bg-neutral-800 h-14 flex justify-center items-center rounded-t-2xl fixed bottom-0 left-0 right-0 z-10">
				<div className="flex flex-col items-center justify-center gap-0.5">
					<p className=" text-white hover:text-orange-600 text-xs cursor-default">
						Desenvolvido por Wilton Lira Martins
					</p>

					<p className="text-white hover:text-orange-600 text-xs cursor-default">
						Copyright &copy; 2024 - Todos os direitos reservados
					</p>
				</div>
			</footer>
		</>
	);
}
