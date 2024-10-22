import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function HomePage() {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			<div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					{/* Mobile Menu Button */}
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
							<XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
						</DisclosureButton>
					</div>

					{/* Full Navigation */}
					<div className="flex flex-1 items-center justify-between sm:items-stretch">
						{/* Logo and Navigation Links */}
						<div className="flex items-center space-x-4">
							{/* Logo */}
							<div className="text-white text-xl font-bold cursor-default">
								MUGIWARA
							</div>
							{/* Navigation Links */}
							<div className="hidden sm:flex space-x-4">
								<a
									href="/"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</a>
								<a
									href="/about"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
								>
									About
								</a>
								<a
									href="/contact"
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
								>
									Contact Us
								</a>
							</div>
						</div>

						{/* Login Button */}
						<div className="hidden sm:block">
							<a
								href="/login"
								className="text-gray-300 border border-gray-300 hover:bg-gray-700 hover:border-transparent hover:text-white px-3 py-2 rounded-md text-base font-medium hidden sm:block"
							>
								Log In
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<DisclosurePanel className="sm:hidden">
				<div className="space-y-1 px-2 pt-2 pb-3">
					<a
						href="/"
						className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
					>
						Home
					</a>
					<a
						href="/about"
						className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
					>
						About
					</a>
					<a
						href="/contact"
						className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
					>
						Contact Us
					</a>
					<a
						href="/login"
						className="block text-gray-300 border border-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
					>
						Login
					</a>
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}
