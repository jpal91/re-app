import React, { useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import { Button, Modal, Box, Container } from "@mui/material";
import { isJsxClosingElement } from "typescript";


const Picsv3 = (props) => {
    const [open, setOpen] = useState(false);
    const [pic, setPic] = useState("");
    const handleOpen = (pic) => {
        setPic(pic);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const pics = props.photos;


    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        p: 4,
    };

    const renderPics = () => {
        if (pics.length === 0) {
            return;
        }

        return (
            <Carousel
                wrapAround={true}
                slidesToShow={2}
                adaptiveHeight={false}
                cellAlign="center"
                speed={100}
                style={{maxHeight: 700}}
            >
                {pics.map((pic, i) => {
                    return (
                        <div key={i}>
                            <Button onClick={() => handleOpen(pic.href)}>
                                <img src={pic.href} />
                            </Button>
                        </div>
                    );
                })}
            </Carousel>
        );
    };

    return (
        <React.Fragment>
            {renderPics()}
            <Modal open={open} onClose={handleClose} closeAfterTransition>
                <Container sx={{...style, display: 'flex', justifyContent: 'center'}}>
                    <img src={pic} />
                </Container>
            </Modal>
        </React.Fragment>
    );
};

export default Picsv3;


//<Box sx={{ ...style, display: 'flex' }}>