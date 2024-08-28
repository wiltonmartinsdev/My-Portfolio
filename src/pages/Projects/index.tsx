import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { NavLink } from "react-router-dom";

import Aside from "@/components/Aside/Aside";

export function Projects() {
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

					<h1 className="text-orange-600 font-semibold mb-4 text-3xl">
						Projetos
					</h1>

					<Select>
						<SelectTrigger className="w-full text-white">
							<SelectValue placeholder="Todos" />
						</SelectTrigger>

						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							<SelectItem value="webApp">Web</SelectItem>
							<SelectItem value="mobileApp">Mobile</SelectItem>
						</SelectContent>
					</Select>

					<div className="py-6 grid justify-center gap-6 sm:grid-cols-2 sm:justify-items-center xl:grid-cols-3">
						<div className="card">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
							</svg>
							<div className="card__content">
								<p className="card__title">Food Explorer</p>
								<p className="card__description">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco.
								</p>
							</div>
						</div>

						<div className="card">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
							</svg>
							<div className="card__content">
								<p className="card__title">Git Fav</p>
								<p className="card__description">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco.
								</p>
							</div>
						</div>

						<div className="card">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
							</svg>
							<div className="card__content">
								<p className="card__title">Next Note</p>
								<p className="card__description">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco.
								</p>
							</div>
						</div>

						<div className="card">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
							</svg>
							<div className="card__content">
								<p className="card__title">Focus Timer</p>
								<p className="card__description">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco.
								</p>
							</div>
						</div>

						<div className="card">
							<svg
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
							</svg>
							<div className="card__content">
								<p className="card__title">
									Calculadora de IMC
								</p>
								<p className="card__description">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco.
								</p>
							</div>
						</div>
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
