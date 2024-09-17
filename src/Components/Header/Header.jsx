import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import LanguageSelector from "../../Language/LanguageSelector";
import HeaderButton from "../HeaderButton/HeaderButton";
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollCount, setScrollCount] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setScrollCount(prev => prev + 1);
    } else {
      // scrool pitir
      setScrollCount(0); //  hisob kixt cond pitham pe tir chuxj
    }
    setLastScrollY(window.scrollY);

    if (scrollCount >= 2) {
      //  joy kixt header bade 2 scroll
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollCount]);

  return (
    <div className="h-[100px]">
      <header className={` ${styles.header} flex items-center  bg-[#FFFFFF] h-[100px] justify-between rounded-b-[20px]  px-[32px] fixed top-0 left-0 right-0 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Link to="/admin">
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar />
        <LanguageSelector />
        <HeaderButton />
      </header>

    </div>
  );
};

export default Header;
