import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSide = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Email</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSide;