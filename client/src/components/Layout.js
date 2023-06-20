import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Nav from "./Nav";

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Nav />
                <Container
                    maxWidth={false}
                    disableGutters={true}
                    component="main"
                    sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    {this.props.children}
                </Container>
            </Box>
        );
    }
}
