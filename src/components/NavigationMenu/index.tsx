import { NavLink } from "react-router-dom";

export function NavigationMenu() {
	return (
		<nav className="hidden lg:flex lg:justify-end lg:h-16 lg:relative left-5 bottom-px ">
			<ul className="font-roboto-flex font-black flex items-center gap-4 bg-neutral-700 px-8 border-collapse rounded-tr-2xl rounded-bl-2xl">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-orange-600" : "text-white"
						}
						to="/">
						Sobre mim
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-orange-600" : "text-white"
						}
						to="/resume">
						Resumo
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-orange-600" : "text-white"
						}
						to="/projects">
						Projetos
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-orange-600" : "text-white"
						}
						to="/contact">
						Contato
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
