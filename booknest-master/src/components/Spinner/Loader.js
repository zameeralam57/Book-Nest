import React, { useEffect, useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Spinner from "./Spinner";
function Loader() {
    const [post, setPost] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    }
    useEffect(() => {
    },[]);
    return <>
        <div className="App">
            {post ? post : <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 50 }}
                open
            >
                <Spinner color="inherit" />
            </Backdrop>}
        </div>
    </>
}
export default Loader;