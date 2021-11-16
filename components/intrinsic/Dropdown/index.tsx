import {
	FunctionComponent,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from "react";

export interface DropdownProps {
	button: ReactNode;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ button, children }) => {
	const [isActive, setIsActive] = useState(false);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);
	function handleClickOutside(event: MouseEvent) {
		if (
			menuRef.current &&
			button &&
			!buttonRef.current.contains(event.target) &&
			!menuRef.current.contains(event.target)
		) {
			setIsActive(false);
		}
	}
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative flex justify-center items-center">
			<button
				ref={buttonRef}
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				{button}
			</button>
			{isActive && (
				<div
					ref={menuRef}
					className="absolute vstack p-4 top-[110%] right-0  bg-background border-2 border-secondary rounded-md"
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
