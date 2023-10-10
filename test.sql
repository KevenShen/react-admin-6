-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        8.0.32 - MySQL Community Server - GPL
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  12.5.0.6680
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 导出 mytest 的数据库结构
CREATE DATABASE IF NOT EXISTS `mytest` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mytest`;

-- 导出  表 mytest.menu 结构
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `path` varchar(255) NOT NULL COMMENT '路径',
  `component` varchar(255) NOT NULL COMMENT '组件',
  `parent_id` int DEFAULT NULL,
  `isShow` tinyint NOT NULL DEFAULT '1',
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `sort_num` int NOT NULL COMMENT '排序',
  `redirectTo` varchar(255) NOT NULL COMMENT '重定向',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.menu 的数据：~10 rows (大约)
REPLACE INTO `menu` (`id`, `name`, `icon`, `path`, `component`, `parent_id`, `isShow`, `create_time`, `sort_num`, `redirectTo`) VALUES
	(1, 'CRM管理', 'icon-ancient-gate-fill', '/user', 'User', NULL, 1, '2023-03-17 07:51:18.181750', 2, '/user/manage'),
	(2, '用户管理', 'icon-map-pin-user-fill', '/user/manage', 'User/Manage', 1, 1, '2023-03-17 07:49:34.098808', 1, ''),
	(3, '菜单管理', 'icon-menu-4-fill', '/user/menu', 'User/Menu', 1, 1, '2023-03-17 07:50:18.901981', 2, ''),
	(4, '角色管理', 'icon-map-pin-user-fill', '/user/role', 'User/Role', 1, 1, '2023-03-17 07:50:49.164287', 3, ''),
	(6, '关于', 'icon-ghost-line', '/about', 'About', NULL, 1, '2023-03-17 07:52:54.176499', 3, ''),
	(7, 'ChatGPT', 'icon-ghost-line', '/chatgpt', 'ChatGPT', NULL, 1, '2023-03-17 07:53:13.806632', 4, ''),
	(8, '主页', 'icon-aliens-fill', '/home', 'Home', NULL, 1, '2023-03-17 08:06:21.283648', 1, ''),
	(9, '日历', 'icon-map-pin-user-fill', '/calendar', 'Calendar', NULL, 1, '2023-03-22 03:34:27.099441', 4, ''),
	(10, '岗位管理', 'icon-map-pin-user-fill', '/user/pos', 'User/Pos', 1, 1, '2023-04-12 09:45:42.512700', 4, ''),
	(11, '日志', 'icon-ghost-line', '/logs', 'Logs', NULL, 1, '2023-04-24 09:47:41.190751', 5, 'null'),
	(12, '用户岗位管理', 'icon-ancient-gate-fill', '/user/userpos', 'User/UserPos', 1, 1, '2023-09-22 07:13:58.952924', 5, 'null');

-- 导出  表 mytest.pos 结构
CREATE TABLE IF NOT EXISTS `pos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '名称',
  `description` varchar(255) NOT NULL COMMENT '描述信息',
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '修改时间',
  `type` int NOT NULL COMMENT '岗位角色类型',
  `status` enum('1','2','3') NOT NULL COMMENT '状态',
  `org_id` varchar(255) NOT NULL COMMENT '机构',
  `role_id` int NOT NULL COMMENT '岗位角色id',
  PRIMARY KEY (`id`),
  KEY `FK_5c3eb1829f1f431edc33770d583` (`role_id`),
  CONSTRAINT `FK_5c3eb1829f1f431edc33770d583` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.pos 的数据：~5 rows (大约)
REPLACE INTO `pos` (`id`, `name`, `description`, `create_time`, `update_time`, `type`, `status`, `org_id`, `role_id`) VALUES
	(1, '总部管理员', '总部管理员', '2023-03-31 03:54:42.115645', '2023-04-10 09:11:18.706686', 1, '2', '0315', 1),
	(2, '总部人员', '总部人员', '2023-04-10 09:54:47.320528', '2023-04-10 09:54:47.320528', 1, '2', '0315', 2),
	(3, '总部日历', '总部日历', '2023-04-12 07:56:14.750962', '2023-09-22 08:11:55.207778', 1, '2', '0315', 4),
	(4, '岗位1', '测试岗位', '2023-09-25 09:59:31.585624', '2023-09-25 09:59:31.585624', 1, '2', '0315', 1),
	(5, '岗位2', '测试', '2023-09-25 09:59:50.761914', '2023-09-25 09:59:50.761914', 1, '2', '0315', 1);

-- 导出  表 mytest.posmenu 结构
CREATE TABLE IF NOT EXISTS `posmenu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pos_id` int NOT NULL COMMENT '岗位id',
  `menu_id` int NOT NULL COMMENT '岗位id',
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `FK_8ca183894f9748c69583977dfd5` (`menu_id`),
  CONSTRAINT `FK_8ca183894f9748c69583977dfd5` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.posmenu 的数据：~13 rows (大约)
REPLACE INTO `posmenu` (`id`, `pos_id`, `menu_id`, `create_time`, `update_time`) VALUES
	(39, 2, 8, '2023-09-21 10:10:35.989504', '2023-09-21 10:11:56.285482'),
	(40, 2, 11, '2023-09-21 10:12:03.398773', '2023-09-21 10:12:03.398773'),
	(88, 1, 8, '2023-09-22 08:04:15.732283', '2023-09-22 08:04:15.732283'),
	(89, 1, 2, '2023-09-22 08:04:15.734434', '2023-09-22 08:04:15.734434'),
	(90, 1, 3, '2023-09-22 08:04:15.735493', '2023-09-22 08:04:15.735493'),
	(91, 1, 4, '2023-09-22 08:04:15.736773', '2023-09-22 08:04:15.736773'),
	(92, 1, 6, '2023-09-22 08:04:15.737639', '2023-09-22 08:04:15.737639'),
	(93, 1, 7, '2023-09-22 08:04:15.738393', '2023-09-22 08:04:15.738393'),
	(94, 1, 9, '2023-09-22 08:04:15.739112', '2023-09-22 08:04:15.739112'),
	(95, 1, 11, '2023-09-22 08:04:15.739818', '2023-09-22 08:04:15.739818'),
	(96, 1, 12, '2023-09-22 08:04:15.740519', '2023-09-22 08:04:15.740519'),
	(97, 1, 10, '2023-09-22 08:04:15.741211', '2023-09-22 08:04:15.741211'),
	(98, 1, 1, '2023-09-22 08:04:15.741899', '2023-09-22 08:04:15.741899');

-- 导出  表 mytest.role 结构
CREATE TABLE IF NOT EXISTS `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `level` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `status` varchar(255) NOT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.role 的数据：~3 rows (大约)
REPLACE INTO `role` (`id`, `name`, `code`, `level`, `description`, `create_time`, `status`) VALUES
	(1, '超级管理员', 'admin', 1, '超级管理员所有菜单', '2023-03-18 06:28:10.099609', '1'),
	(2, '用户', 'user', 2, '普通用户', '2023-03-18 06:29:45.197944', '1'),
	(3, 'CRM管理员', 'manage', 3, '可以管理用户', '2023-03-18 06:30:58.792095', '1'),
	(4, '日历管理员', 'calendar', 5, '管理日历', '2023-04-12 07:55:06.922604', '1');

-- 导出  表 mytest.rolemenu 结构
CREATE TABLE IF NOT EXISTS `rolemenu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL COMMENT '角色id',
  `menu_id` int NOT NULL COMMENT '菜单id',
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '修改时间',
  PRIMARY KEY (`id`),
  KEY `FK_11d5f3937b550362473c7274f74` (`menu_id`),
  CONSTRAINT `FK_11d5f3937b550362473c7274f74` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.rolemenu 的数据：~19 rows (大约)
REPLACE INTO `rolemenu` (`id`, `role_id`, `menu_id`, `create_time`, `update_time`) VALUES
	(66, 2, 8, '2023-09-21 09:50:16.382611', '2023-09-21 09:50:16.382611'),
	(67, 3, 1, '2023-09-21 09:50:26.702120', '2023-09-21 09:50:26.702120'),
	(68, 3, 2, '2023-09-21 09:50:26.704045', '2023-09-21 09:50:26.704045'),
	(69, 3, 3, '2023-09-21 09:50:26.705894', '2023-09-21 09:50:26.705894'),
	(70, 3, 4, '2023-09-21 09:50:26.708026', '2023-09-21 09:50:26.708026'),
	(71, 3, 10, '2023-09-21 09:50:26.709487', '2023-09-21 09:50:26.709487'),
	(72, 4, 9, '2023-09-21 09:50:30.484637', '2023-09-21 09:50:30.484637'),
	(73, 4, 8, '2023-09-21 09:50:30.486253', '2023-09-21 09:50:30.486253'),
	(180, 1, 8, '2023-09-22 08:02:54.565089', '2023-09-22 08:02:54.565089'),
	(181, 1, 2, '2023-09-22 08:02:54.567336', '2023-09-22 08:02:54.567336'),
	(182, 1, 3, '2023-09-22 08:02:54.568599', '2023-09-22 08:02:54.568599'),
	(183, 1, 4, '2023-09-22 08:02:54.569902', '2023-09-22 08:02:54.569902'),
	(184, 1, 6, '2023-09-22 08:02:54.571301', '2023-09-22 08:02:54.571301'),
	(185, 1, 7, '2023-09-22 08:02:54.572427', '2023-09-22 08:02:54.572427'),
	(186, 1, 9, '2023-09-22 08:02:54.573682', '2023-09-22 08:02:54.573682'),
	(187, 1, 11, '2023-09-22 08:02:54.574965', '2023-09-22 08:02:54.574965'),
	(188, 1, 10, '2023-09-22 08:02:54.575825', '2023-09-22 08:02:54.575825'),
	(189, 1, 12, '2023-09-22 08:02:54.576617', '2023-09-22 08:02:54.576617'),
	(190, 1, 1, '2023-09-22 08:02:54.577445', '2023-09-22 08:02:54.577445');

-- 导出  表 mytest.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_d72ea127f30e21753c9e229891` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.user 的数据：~3 rows (大约)
REPLACE INTO `user` (`id`, `username`, `nickname`, `password`, `avatar`, `create_time`, `update_time`, `userId`) VALUES
	(1, 'yonghu1', '用户1', '123456', 'https://gitee.com/jiuxiangyangguang/myimg/raw/master/tree/master/photos.png1681284094260', '2023-04-12 07:07:06.859907', '2023-09-22 08:43:14.571318', 'U00001'),
	(2, 'yonghu2', '用户2', '123456', 'https://gitee.com/jiuxiangyangguang/myimg/raw/master/tree/master/photos.png1681284253156', '2023-04-12 07:08:29.007936', '2023-09-22 08:45:07.158577', 'U00002'),
	(3, 'yonghu3', '用户3', '123456', 'https://gitee.com/jiuxiangyangguang/myimg/raw/master/tree/master/photos.png1681285092224', '2023-04-12 07:29:38.860149', '2023-09-22 08:45:12.917457', 'U00003');

-- 导出  表 mytest.userpos 结构
CREATE TABLE IF NOT EXISTS `userpos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `create_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '创建时间',
  `update_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '修改时间',
  `user_id` int NOT NULL,
  `pos_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_816e0ed4ddc711ac7a180aaa7d3` (`pos_id`),
  KEY `FK_5d7b5018d9c6866de775960f8f8` (`user_id`),
  CONSTRAINT `FK_5d7b5018d9c6866de775960f8f8` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_816e0ed4ddc711ac7a180aaa7d3` FOREIGN KEY (`pos_id`) REFERENCES `pos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

-- 正在导出表  mytest.userpos 的数据：~3 rows (大约)
REPLACE INTO `userpos` (`id`, `create_time`, `update_time`, `user_id`, `pos_id`) VALUES
	(2, '2023-09-21 09:40:41.406135', '2023-09-21 10:06:33.372114', 1, 2),
	(4, '2023-09-25 09:04:06.012455', '2023-09-25 09:04:06.012455', 1, 1),
	(6, '2023-09-25 09:43:36.860310', '2023-09-25 09:43:36.860310', 1, 3),
	(9, '2023-09-25 10:00:06.577614', '2023-09-25 10:00:06.577614', 1, 4),
	(10, '2023-09-25 10:00:12.759547', '2023-09-25 10:00:12.759547', 1, 5);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
