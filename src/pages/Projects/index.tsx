import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { Footer } from "@/components/Footer";
import { NavigationMenu } from "@/components/NavigationMenu";
import Aside from "@/components/Aside/Aside";
import focusTimerImg from "@/assets/focusTimer.png";
import foodExplorerImg from "@/assets/foodExplorer.png";
import gitFavImg from "@/assets/gitFav.png";
import igniteTeamsImg from "@/assets/igniteTeams.png";
import imcImg from "@/assets/imc.png";
import imHereImg from "@/assets/imHere.png";
import myPortfolioImg from "@/assets/myPortfolio.png";
import nextNoteImg from "@/assets/nextNote.png";
import ThumbnailEP from "@/assets/thumbnail-Ep.png";

export function Projects() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const [selectedCategory, setSelectedCategory] = useState("all");

	const projects = [
        {
			id: 1,
			title: "Energia Pura Internacional",
			description:
				"Este é um projeto pessoal desenvolvido para o grupo de Capoeira Energia Pura do qual faço parte. Clique para saber mais...",
			category: "webApp",
			href: "https://capoeiraenergiapura.vercel.app",
			image: ThumbnailEP,
		},
		{
			id: 2,
			title: "Portfólio",
			description:
				"Bem-vindo ao meu portfólio pessoal! Este projeto foi desenvolvido para apresentar minhas habilidades como desenvolvedor front-end. Clique para saber mais...",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/My-Portfolio",
			image: myPortfolioImg,
		},
		{
			id: 3,
			title: "Food Explorer",
			description:
				"Este projeto consiste em desenvolver um menu interativo de ponta a ponta, onde terá duas personas que serão o Admin e Usuário. Clique para saber mais...",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/FoodExplorer-Front-end",
			image: foodExplorerImg,
		},
		{
			id: 4,
			title: "Git Fav",
			description:
				"Essa aplicação consiste em pesquisar por um usuário no GitHub e adicioná-lo como usuário favorito. Clique para saber mais...",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/Git-Fav",
			image: gitFavImg,
		},
		{
			id: 5,
			title: "Next Note",
			description:
				"A aplicação permite adicionar notas de forma fácil, digitando ou gravando áudio que será automaticamente convertido em texto. Clique para saber mais…",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/next-note",
			image: nextNoteImg,
		},
		{
			id: 6,
			title: "Focus Timer",
			description:
				"Este projeto consiste em desenvolver um temporizador e alternar entre o tema light e dark mode. Clique para saber mais...",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/FocusTimer-2.0",
			image: focusTimerImg,
		},
		{
			id: 7,
			title: "Calculadora de IMC",
			description:
				"Esse projeto consiste em fazer o cálculo simples de IMC. Clique para saber mais...",
			category: "webApp",
			href: "https://github.com/wiltonmartinsdev/Calculadora-de-IMC",
			image: imcImg,
		},
		{
			id: 8,
			title: "Im Here",
			description:
				"Esta é uma aplicação mobile que permite adicionar e remover participantes de eventos como treinamentos, palestras ou workshops. Clique para saber mais...",
			category: "mobileApp",
			href: "https://github.com/wiltonmartinsdev/im-here",
			image: imHereImg,
		},
		{
			id: 9,
			title: "Ignite Teams",
			description:
				"Ignite Teams é uma aplicação mobile desenvolvida com o objetivo de ajudar a organizar pessoas que se reúnem para jogar em turmas. Clique para saber mais...",
			category: "mobileApp",
			href: "https://github.com/wiltonmartinsdev/ignite-teams",
			image: igniteTeamsImg,
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
					<NavigationMenu />

					<h1 className="font-roboto-flex font-black italic text-center sm:text-left text-orange-600 mb-4 text-3xl">
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

			<Footer />
		</>
	);
}
