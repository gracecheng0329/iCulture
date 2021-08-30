import React from 'react'
import { Menu } from 'antd';
import {useState} from "react";
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [key, setKey] = useState({
        current: 'mail',
    })

    const handleClick = (e:any) => {
        setKey({ current: e.key });
    };

    const { current } = key;

        return (
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{display:'flex',justifyContent:'center'}}>
                <Menu.Item key="mail" >
                    <Link to='/iCulture'>台灣節慶專區</Link>
                </Menu.Item>
                <Menu.Item key="app">
                    <Link to='/fav'>我的最愛</Link>
                </Menu.Item>
            </Menu>
        )

}

export default NavBar