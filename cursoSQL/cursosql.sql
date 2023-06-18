-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2023 at 04:15 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cursosql`
--

-- --------------------------------------------------------

--
-- Table structure for table `empleado`
--

CREATE TABLE `empleado` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `empleado`
--

INSERT INTO `empleado` (`ID`, `nombre`, `apellido`, `email`) VALUES
(1, 'Analuz', 'Sandrea', 'xamples@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `NOMBRE` varchar(30) DEFAULT NULL,
  `APELLIDO` varchar(30) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`NOMBRE`, `APELLIDO`, `EMAIL`) VALUES
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('emmanuel', 'romero', 'EDRM_1bb3@HOTMAIL.COM'),
('daniela', 'aasfdsdf', 'samples@gmail.com'),
('daniela', 'aasfdsdf', 'samples@gmail.com'),
('daniela', 'aasfdsdf', 'samples@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('ana', 'sandrea', 'prueba@gmail.com'),
('ana', 'sandrea', 'prueba@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com'),
('analuz', 'sandrea', 'adsandrea.g@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empleado`
--
ALTER TABLE `empleado`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
