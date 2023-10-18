import { useState } from "react";

const useSubmmiting = () => {
	const [submitting, setSubmitting] = useState<boolean>(false);

	return {
		submitting,
		setSubmitting,
	};
};

export default useSubmmiting;
