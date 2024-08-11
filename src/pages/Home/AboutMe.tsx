import { Badge } from "@/components/ui/badge";

function AboutMe() {
	return (
		<div className="pt-4 px-3 pb-20">
			<aside className="flex items-center gap-3 bg-neutral-800 w-[351px] h-28 rounded-2xl p-4 mb-3 ">
				<img
					className="w-20 bg-neutral-700 rounded-2xl"
					src="src/assets/my-avatar.png"
					alt="Foto do perfil"
				/>

				<div>
					<h1 className="text-white text-center text-lg">
						Wilton Lira Martins
					</h1>

                    <Badge>Desenvolvedor Front-end</Badge>
				</div>
			</aside>

			<main className="bg-blue-500">PRINICPAL</main>
		</div>
	);
}

export default AboutMe;
