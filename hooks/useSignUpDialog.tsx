import { useState } from "react";

const useDialog = () => {
	const [openSignUpDialog, setOpenSignUpDialog] = useState<boolean>(false);

	const handleSignUpDialogOpen = () => {
		setOpenSignUpDialog(true);
	};

	return {
		openSignUpDialog,
		setOpenSignUpDialog,
		handleSignUpDialogOpen,
	};
};

export default useDialog;
