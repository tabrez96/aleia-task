import { useState } from "react";

import Text from "../Text";
import Button from "../Button";

import { useBreakpoint } from "../../hooks/useBreakpoint";

import aleiaLogo from "../../assets/logo.svg";

import "./Navigation.scss";
import Flex from "../Flex";

const Navigation = () => {
  const breakpoint = useBreakpoint();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (breakpoint === "mobile") {
    return (
      <div className="aleia-navigation">
        <div className="aleia-navigation-main-content">
          <img
            className="aleia-navigation-logo"
            src={aleiaLogo}
            alt="Aleia logo"
            loading="eager"
          />
        </div>
        <div className="aleia-navigation-right-content">
          <Button variant="text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="aleia-navigation-menu">
            <Flex
              direction="column"
              justify="space-between"
              className="aleia-navigation-menu-content"
            >
              <Flex
                direction="column"
                className="aleia-navigation-menu-content-buttons"
              >
                <Button variant="text">
                  <Text size="x-large">About us</Text>
                </Button>
                <Button variant="text">
                  <Text size="x-large">Projects</Text>
                </Button>
                <Button variant="text">
                  <Text size="x-large">Career</Text>
                </Button>
                <Button variant="text">
                  <Text size="x-large">Contacts</Text>
                </Button>
              </Flex>
              <Button variant="text">
                <Flex>
                  <Text size="x-large" className="text-bold">
                    En
                  </Text>{" "}
                  <Text size="x-large">|</Text> <Text size="x-large">Fr</Text>
                </Flex>
              </Button>
            </Flex>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="aleia-navigation">
      <div className="aleia-navigation-main-content">
        <img
          className="aleia-navigation-logo"
          src={aleiaLogo}
          alt="Aleia logo"
          loading="eager"
        />
        <Button variant="text">
          <Text className="text-bold-600">About us</Text>
        </Button>
        <Button variant="text">
          <Text className="text-bold-600">Projects</Text>
        </Button>
        <Button variant="text">
          <Text className="text-bold-600">Career</Text>
        </Button>
        <Button variant="text">
          <Text className="text-bold-600">Contacts</Text>
        </Button>
      </div>
      <div className="aleia-navigation-right-content">
        <Button variant="text">
          <Text className="text-bold-600">En</Text>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
