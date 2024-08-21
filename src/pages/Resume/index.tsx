import { useState } from "react";
import { Link } from "react-router-dom";

import Aside from "@/components/Aside/Aside";

export function Resume() {
	const [activeLink, setActiveLink] = useState("");

	const handleLinkClick = (link: string) => {
		setActiveLink(link);
	};

	return (
		<>
			<div className="min-w-80 pt-4 px-3 sm:px-14 pb-20 sm:pt-16 lg:flex lg:justify-center lg:gap-6 lg:w-full">
				<Aside />

				<main className="border border-neutral-700 p-5 rounded-2xl bg-neutral-800 lg:flex lg:flex-col lg:w-[900px] lg:pt-0">
					<nav className="hidden lg:flex lg:justify-end lg:h-16 lg:relative left-5 bottom-px ">
						<ul className="flex items-center gap-4 bg-neutral-700 px-8 border-collapse rounded-tr-2xl rounded-bl-2xl">
							<li>
								<Link
									className={`text-white hover:text-orange-600 ${
										activeLink === "Sobre mim"
											? "text-orange-600"
											: ""
									}`}
									to="/"
									onClick={() =>
										handleLinkClick("Sobre mim")
									}>
									Sobre mim
								</Link>
							</li>
							<li>
								<Link
									className={`text-white hover:text-orange-600 ${
										activeLink === "Resumo"
											? "text-orange-600"
											: ""
									}`}
									to="/resume"
									onClick={() => handleLinkClick("Resumo")}>
									Resumo
								</Link>
							</li>
							<li>
								<Link
									className={`text-white hover:text-orange-600 ${
										activeLink === "Projetos"
											? "text-orange-600"
											: ""
									}`}
									to="/projects"
									onClick={() => handleLinkClick("Projetos")}>
									Projetos
								</Link>
							</li>
							<li>
								<Link
									className={`text-white hover:text-orange-600 ${
										activeLink === "Contato"
											? "text-orange-600"
											: ""
									}`}
									to="contact"
									onClick={() => handleLinkClick("Contato")}>
									Contato
								</Link>
							</li>
						</ul>
					</nav>

					<h1 className="text-orange-600 font-semibold mb-4 text-3xl">
						Resumo
					</h1>
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
