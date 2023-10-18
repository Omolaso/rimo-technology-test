import { useState } from "react";

const useCollapse = () => {
	const [isCollapse, setIsCollapse] = useState<boolean>(false);

	const toggleCollapse = () => {
		setIsCollapse(!isCollapse);
	};

	return {
		isCollapse,
		toggleCollapse,
	};
};

export default useCollapse;
