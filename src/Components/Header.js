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
                <SLink href="/">Home</SLink>
            </Item>
            <Item>
                <SLink href="/skills">Skills</SLink>
            </Item>
            <Item>
                <SLink href="/portfolio">Portfolio</SLink>
            </Item>
            <Item>
                <SLink href="/contact">Contact</SLink>
            </Item>
        </List>
    </Header>
);
