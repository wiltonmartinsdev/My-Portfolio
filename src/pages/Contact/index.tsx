import { NavLink } from "react-router-dom";

import { ContactForm } from "@/components/Form";
import Aside from "@/components/Aside/Aside";


export function Contact() {
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
						Contato
					</h1>

					<p className="text-center text-white text-2xl font-bold mb-12">
						Vamos{" "}
						<span className="text-orange-600">conversar?</span>
					</p>

					<ContactForm />
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
