/** @jsxImportSource @emotion/react */
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const WriteColorAlerts = ({
  open,
  openHandler,
}: {
  open: boolean;
  openHandler: () => void;
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={openHandler}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key={"bottom" + "center"}
    >
      <Alert onClose={openHandler} severity="success">
        쇼츠 업로드에 성공했습니다.
      </Alert>
    </Snackbar>
  );
};

export default WriteColorAlerts;
