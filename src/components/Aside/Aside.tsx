import {
	DeviceMobile,
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import CSSLogo from "@/assets/cssLogo.png";
import HTMLLogo from "@/assets/htmlLogo.png";
import JSLogo from "@/assets/jsLogo.png";
import profileImage from "@/assets/perfil.png";
import ReactLogo from "@/assets/reactLogo.png";

function Aside() {
	const [isOpen, setIsOpen] = useState(false);

	const [isLargeScreen, setIsLargeScreen] = useState(
		window.innerWidth >= 1024
	);

	// Atualiza o estado quando o tamanho da tela mudar
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup do event listener quando o componente for desmontado
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<aside
			className={`border border-neutral-700 flex flex-col items-center justify-center mx-auto bg-neutral-800 overflow-hidden transition-[height] duration-1000 ease-in-out ${
				isOpen || isLargeScreen ? "h-[420px] lg:h-[560px]" : "h-56"
			} rounded-2xl mb-3 lg:w-72 lg:mx-0 lg:sticky lg:top-16`}>
			<span className="w-full flex justify-end lg:hidden">
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					size={26}
					color="white"
					rounded
				/>
			</span>

			<div className="flex items-center gap-3 mb-4 lg:flex lg:flex-col">
				<img
					className="border border-neutral-600 w-20 bg-transparent rounded-2xl hover:border-2 hover:border-orange-600 lg:w-32"
					src={profileImage}
					alt="Foto do perfil"
				/>

				<div>
					<p className="text-white text-center text-lg hover:text-orange-600 cursor-default">
						Wilton Lira Martins
					</p>

					<Badge className="cursor-default">
						Desenvolvedor Front-end
					</Badge>
				</div>
			</div>

			<div className="flex gap-8 sm:gap-4 mb-4 mt-4">
				<img
					src={HTMLLogo}
					alt="Logo HTML"
					title="HTML"
					className="w-6 transition-transform duration-500 ease-in-out hover:scale-125"
				/>
				<img
					src={CSSLogo}
					alt="Logo CSS"
					title="CSS"
					className="w-6 transition-transform duration-500 ease-in-out hover:scale-125"
				/>
				<img
					src={JSLogo}
					alt="Logo JavaScript"
					title="JavaScript"
					className="w-6 transition-transform duration-500 ease-in-out hover:scale-125"
				/>

				<img
					src={ReactLogo}
					alt="Logo React"
					title="React"
					className="w-7 relative right-1 transition-transform duration-500 ease-in-out hover:scale-125"
				/>
			</div>

			{(isOpen || isLargeScreen) && (
				<div className="w-72 text-white text-center border-t border-orange-600 mb-3 pt-5 space-y-3 px-2 lg:pl-5 lg:w-60">
					<div className="flex items-center gap-2">
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

					<div className="flex items-center gap-2">
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

					<div className="flex items-center gap-2">
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

					<div className="flex items-center gap-2">
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

					<nav>
						<ul className="flex justify-center gap-3 text-sm lg:hidden">
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
							<li className="">
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
				</div>
			)}
		</aside>
	);
}

export default Aside;
