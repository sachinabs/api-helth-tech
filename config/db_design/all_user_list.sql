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
-- Table structure for table `all_user_list`
--

DROP TABLE IF EXISTS `all_user_list`;
CREATE TABLE IF NOT EXISTS `all_user_list` (
  `s_num` varchar(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `p_id` varchar(20) NOT NULL,
  `appoinment` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `img` varchar(300) NOT NULL,
  `location` varchar(20) NOT NULL,
  `age` varchar(20) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `contact` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `all_user_list`
--

INSERT INTO `all_user_list` (`s_num`, `user_id`, `p_id`, `appoinment`, `user_name`, `img`, `location`, `age`, `gender`, `contact`) VALUES
('1', '1', 'A-103', '10:20 AM', 'Vinm Rosh', 'https://randomuser.me/api/portraits/men/75.jpg', 'Coimbatore', '26', 'Male', '0987654321'),
('3', '3', 'A-109', '10:40 AM', 'Nirmal Vis', 'https://randomuser.me/api/portraits/men/95.jpg', 'coimbatore', '34', 'Male', '0987654322');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
