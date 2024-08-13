import {
	DeviceMobile,
	EnvelopeSimple,
	GithubLogo,
	LinkedinLogo,
} from "@phosphor-icons/react";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/perfil.png";

function AboutMe() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="min-w-80 pt-4 px-3 sm:flex">
			<aside
				className={`flex flex-col items-center justify-center mx-auto bg-neutral-800 overflow-hidden transition-[height] duration-1000 ease-in-out ${
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
						<h1 className="text-white text-center text-lg hover:text-orange-600">
							Wilton Lira Martins
						</h1>

						<Badge>Desenvolvedor Front-end</Badge>
					</div>
				</div>

				{isOpen && (
					<div className=" w-72 text-white text-center border-t border-orange-600 mb-3 pt-5 space-y-3 px-2">
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

			<main className="border bg-blue-500 sm:flex sm:flex-1">
				PRINICPAL
			</main>
		</div>
	);
}

export default AboutMe;
