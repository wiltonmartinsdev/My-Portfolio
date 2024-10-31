import { Footer } from "@/components/Footer";
import { NavigationMenu } from "@/components/NavigationMenu";
import Aside from "@/components/Aside/Aside";
import CodeIcon from "@/assets/codeIcon.svg";
import StudentIcon from "@/assets/studentIcon.svg";

export function Resume() {
	return (
		<>
			<div className="min-w-80 pt-4 px-3 sm:px-14 pb-20 sm:pt-16 lg:flex lg:justify-center lg:gap-6 lg:w-full">
				<Aside />

				<main className="border border-neutral-700 p-5 rounded-2xl bg-neutral-800 lg:flex lg:flex-col lg:w-[900px] lg:pt-0">
					<NavigationMenu />

					<h1 className="font-roboto-flex font-black italic text-center sm:text-left text-orange-600 mb-4 text-3xl">
						Resumo
					</h1>

					{/* Section displaying educational */}
					<section>
						<div className="flex items-center gap-2 mb-4">
							<img
								src={StudentIcon}
								alt=""
							/>

							<p className="font-roboto-flex font-black text-orange-600 text-xl">
								Formação
							</p>
						</div>

						<ol className="relative left-5 list-disc text-white custom-bullet mb-4">
							<li className="mb-6">
								Programa de Formação Explorer - Desenvolvimento
								Web FullStack
								<ul className="mt-2">
									<li>2022 - 2023 / RocketSeat</li>
								</ul>
							</li>
							<li>
								Análise e Desenvolvimento de Sistemas
								<ul className="mt-2">
									<li>
										Em andamento - Centro Universitário
										Internacional / UNINTER
									</li>
								</ul>
							</li>
						</ol>
					</section>

					{/* Section displaying technologies used */}
					<section>
						<div className="flex items-center gap-2 mb-4">
							<img
								src={CodeIcon}
								alt=""
							/>

							<p className="font-roboto-flex font-black text-orange-600 text-xl">
								Tecnologias
							</p>
						</div>

						<ol className="relative left-5 list-disc text-white custom-bullet">
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>React</li>
							<li>Styled-components</li>
							<li>Tailwindcss</li>
							<li>Git</li>
						</ol>
					</section>
				</main>
			</div>

			<Footer />
		</>
	);
}
