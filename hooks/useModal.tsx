import { useState } from "react";

const useModal = () => {
	const [modal, setModal] = useState<boolean>(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	return {
		modal,
		setModal,
		toggleModal,
	};
};

export default useModal;
