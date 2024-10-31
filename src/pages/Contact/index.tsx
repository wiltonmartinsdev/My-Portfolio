import { ContactForm } from "@/components/Form";
import { Footer } from "@/components/Footer";
import { NavigationMenu } from "@/components/NavigationMenu";
import Aside from "@/components/Aside/Aside";

export function Contact() {
	return (
		<>
			<div className="min-w-80 pt-4 px-3 sm:px-14 pb-20 sm:pt-16 lg:flex lg:justify-center lg:gap-6 lg:w-full">
				<Aside />

				<main className="border border-neutral-700 p-5 rounded-2xl bg-neutral-800 lg:flex lg:flex-col lg:w-[900px] lg:pt-0">
					<NavigationMenu />

					<h1 className="font-roboto-flex font-black italic text-center sm:text-left text-orange-600 mb-4 text-3xl">
						Contato
					</h1>

					<p className="font-roboto-flex font-black text-center text-white text-2xl mb-12">
						Vamos{" "}
						<span className="text-orange-600">conversar?</span>
					</p>

					<ContactForm />
				</main>
			</div>

			<Footer />
		</>
	);
}
