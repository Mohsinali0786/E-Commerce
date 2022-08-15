import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Mybag from './bag';
// import totalItems from './bag';
// import './';
import { Button, Modal } from 'antd';

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const Model = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="secondary" onClick={showModal}>
                <LocalGroceryStoreOutlinedIcon />
            </Button>
            <Modal title="Cart Items" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Mybag />
            </Modal>
        </>
    );
};

export default Model;