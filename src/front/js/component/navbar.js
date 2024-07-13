import React from "react";

export const Navbar = () => {
	return (
		<Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">RecipeApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#">
                        <i className="fas fa-user"></i> Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	);
};
