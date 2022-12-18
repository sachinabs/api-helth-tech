-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 18, 2022 at 06:31 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `helthtec`
--

-- --------------------------------------------------------

--
-- Table structure for table `robo_params`
--

DROP TABLE IF EXISTS `robo_params`;
CREATE TABLE IF NOT EXISTS `robo_params` (
  `scan_type` varchar(20) NOT NULL,
  `gain` varchar(20) NOT NULL,
  `zoom_level` varchar(20) NOT NULL,
  `system_mode` varchar(20) NOT NULL,
  `depth` varchar(20) NOT NULL,
  `x` varchar(20) NOT NULL,
  `y` varchar(20) NOT NULL,
  `robo_id` varchar(20) NOT NULL,
  `s_num` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `robo_params`
--

INSERT INTO `robo_params` (`scan_type`, `gain`, `zoom_level`, `system_mode`, `depth`, `x`, `y`, `robo_id`, `s_num`) VALUES
('Ultra Sound', 'A-6', '4', 'Auto', '13.08', '-', 'yes', 'R002', '2'),
('Ultra Sound', 'A-6', '5', 'Auto', '13.08', 'yes', '-', 'R001', '1');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
