import { useState } from "react";

const useLoginDialog = () => {
	const [loginDialog, setLoginDialog] = useState<boolean>(false);

	const handleLoginDialogOpen = () => {
		setLoginDialog(true);
	};

	return {
		loginDialog,
		setLoginDialog,
		handleLoginDialogOpen,
	};
};

export default useLoginDialog;
