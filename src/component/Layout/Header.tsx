import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "../theme-provider/ThemeContext";
import { User } from "firebase/auth";
import {
  onAuthStateChange,
  loginWithGoogle,
  logout,
} from "./../Services/authentication/authService";
import {
  fetchLikeCount,
  fetchUserLikeStatus,
  updateLikeStatus,
} from "../Services/likeServices/likeServices";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavbarContext } from "../context/NavbarContext";
const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [likeCount, setLikeCount] = useState<number>(0);
  const [likedEmails, setLikedEmails] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const { isNavbarExpanded, toggleNavbar } = useNavbarContext();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      if (user && user.email) {
        setUser(user);
        fetchUserLikeStatus(user.email)
          .then((data) => {
            if (data.status === 1 && user.email) {
              setLikedEmails([user.email]);
            } else {
              setLikedEmails([]);
            }
          })
          .catch(console.error);
      } else {
        setUser(null);
        setLikedEmails([]);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const linkId = "portfolio_page_likes";
    fetchLikeCount(linkId)
      .then((data) => setLikeCount(data.like_count))
      .catch(console.error);
  }, []);

  const handleLike = async () => {
    if (user && user.email) {
      const userEmail = user.email;
      const linkId = "portfolio_page_likes";
      const isLiked = likedEmails.includes(userEmail);

      setLikedEmails(
        isLiked
          ? likedEmails.filter((email) => email !== userEmail)
          : [...likedEmails, userEmail]
      );

      try {
        await updateLikeStatus(userEmail, linkId, !isLiked);
      } catch (error) {
        console.error("Error updating like status:", error);
      }
    } else {
      await loginWithGoogle();
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`bg-${theme} shadow text-${
        theme === "dark" ? "light" : "dark"
      }`}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className={`fw-bold fs-4 text-${theme === "dark" ? "light" : "dark"}`}
        >
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={`navbar-toggler ${
            theme === "dark" ? "navbar-toggler-dark" : "navbar-toggler-light"
          }`}
          onClick={toggleNavbar}
        />
        <Navbar.Collapse id="navbarScroll" in={isNavbarExpanded}>
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              active={location.pathname === "/"}
              className={`text-${theme === "dark" ? "light" : "dark"}`}
            >
              <HomeIcon /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              active={location.pathname === "/about"}
              className={`text-${theme === "dark" ? "light" : "dark"}`}
            >
              <PermIdentityIcon /> About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              active={location.pathname === "/projects"}
              className={`text-${theme === "dark" ? "light" : "dark"}`}
            >
              <WorkIcon /> Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              active={location.pathname === "/resume"}
              className={`text-${theme === "dark" ? "light" : "dark"}`}
            >
              <DescriptionIcon /> Resume
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <div className="like-wrapper" onClick={handleLike}>
              {user && likedEmails.includes(user.email!) ? (
                <FavoriteIcon className="like-icon" color="error" />
              ) : (
                <FavoriteBorderIcon className="like-icon" />
              )}
              <span className="like-count">{likeCount}</span>
            </div>
            {user ? (
  <Button
    onClick={logout}
    variant="light"
    className={`me-2 border ${
      theme === "dark" ? "border-white text-white bg-dark custom-button-dark" : "border-black text-black bg-light custom-button-light"
    } custom-button`}
  >
    Logout
  </Button>
) : (
  <Button
    onClick={loginWithGoogle}
    variant="light"
    className={`me-2 border ${
      theme === "dark" ? "border-white text-white bg-dark custom-button-dark" : "border-black text-black bg-light custom-button-light"
    } custom-button`}
  >
    Login
  </Button>
)}

            <Button
              variant={theme === "dark" ? "light" : "dark"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
