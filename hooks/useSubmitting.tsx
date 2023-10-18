import { useState } from "react";

const useSubmmiting = () => {
	const [submitting, setSubmitting] = useState<boolean>(false);

	const toggleCollapse = () => {
		setSubmitting(submitting);
	};

	return {
		submitting,
		setSubmitting,
	};
};

export default useSubmmiting;
