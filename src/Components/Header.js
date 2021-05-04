import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover {
        background-color: blue;
    }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">Home</SLink>
            </Item>
            <Item>
                <SLink to="/skills">Skills</SLink>
            </Item>
            <Item>
                <SLink to="/portfolio">Portfolio</SLink>
            </Item>
            <Item>
                <SLink to="/contact">Contact</SLink>
            </Item>
        </List>
    </Header>
);
