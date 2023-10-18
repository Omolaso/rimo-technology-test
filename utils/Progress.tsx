import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Progress = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<CircularProgress size={25} sx={{ color: "#212121" }} />
		</Box>
	);
};

export default Progress;
