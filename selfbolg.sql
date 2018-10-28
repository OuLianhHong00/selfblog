/*
 Navicat MySQL Data Transfer

 Source Server         : bendi
 Source Server Type    : MySQL
 Source Server Version : 50703
 Source Host           : localhost:3306
 Source Schema         : selfbolg

 Target Server Type    : MySQL
 Target Server Version : 50703
 File Encoding         : 65001

 Date: 09/10/2018 20:06:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog_blog
-- ----------------------------
DROP TABLE IF EXISTS `blog_blog`;
CREATE TABLE `blog_blog`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picture` mediumblob NULL,
  `blogname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `evalutiontime` int(11) NULL DEFAULT NULL,
  `liulannum` int(11) NULL DEFAULT NULL,
  `type` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `dianzan` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_blog
-- ----------------------------
INSERT INTO `blog_blog` VALUES (2, NULL, 'java由浅入深', '2018/7/30 12:12:12', 0, 0, '技术分享', '先学习java的基础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功。。。先学习java的基但是础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功先学习java的基础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功先学习java的基础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功', 0);
INSERT INTO `blog_blog` VALUES (3, NULL, 'html从入门到精通', '2018/7/5 12:20:32', 0, 1, '技术分享', '先学习java的基础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功。。。先学习java的基但是础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功先学习java的基础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功先学习java的基础知识，再从基础过渡到面向对象，在学习神程度的算法。达到成功', 0);
INSERT INTO `blog_blog` VALUES (4, 0x2F2E2E2F75706C6F6164732F322E706E67, '随笔', '2018/08/30 14:31:41', 0, 2, '技术分享', '<p>sdjwgeui开吧U币创建表从记事都是鞭策我看见俺爸爸从</p>', 0);
INSERT INTO `blog_blog` VALUES (5, 0x2F2E2E2F75706C6F6164732F312E372E6A7067, '新纪元', '2018/08/30 14:32:08', 0, 0, '心情随笔', '<p>scnwenvb八点上班是几十年快乐新年是大V记事本拉V领不了奥吃啊</p>', 0);
INSERT INTO `blog_blog` VALUES (13, 0x2F2E2E2F75706C6F6164732F322E6A7067, 'erg', '2018/08/07 14:00:44', NULL, 1, '技术分享', '', 0);
INSERT INTO `blog_blog` VALUES (14, 0x2F2E2E2F75706C6F6164732FE68998E4B98EE68B89E88B8F2E6A7067, '深度学习PHP', '2018/09/29 13:39:32', NULL, 19, '技术分享', '<p><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">PHP 支持8种基本的数据类型。</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">四种标量类型：</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">boolean&nbsp;（布尔型）</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">integer&nbsp;（整型）</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">float&nbsp;（浮点型, 也称作&nbsp;double)</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">string&nbsp;（字符串）</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">两种复合类型：</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">array&nbsp;（数组）</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">object&nbsp;（对象）</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">最后是两种特殊类型：</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">resource　（资源）</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">NULL　（NULL）</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">为了确保代码的易读性，本手册还介绍了一些伪类型：</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">mixed</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">number</span><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">callback</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">以及伪变量&nbsp;$....</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">可能还会读到一些关于“双精度（double）”类型的参考。实际上 double 和 float 是相同的，由于一些历史的原因，这两个名称同时存在。</span><br/><br/><span style=\"font-size: 14px; font-variant-numeric: normal; font-variant-east-asian: normal; color: rgb(51, 51, 51); font-family: 微软雅黑, Verdana, Arial, Tahoma; line-height: 25px; text-size-adjust: auto; background-color: rgb(255, 255, 255);\">变量的类型通常不是由程序员设定的，确切地说，是由 PHP 根据该变量使用的上下文在运行时决定的。</span></p>', 5);

-- ----------------------------
-- Table structure for blog_intership
-- ----------------------------
DROP TABLE IF EXISTS `blog_intership`;
CREATE TABLE `blog_intership`  (
  `company` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `position` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_intership
-- ----------------------------
INSERT INTO `blog_intership` VALUES ('久坡科技公司', '2017-08-10', '职员', '写简单的程序', 2);
INSERT INTO `blog_intership` VALUES ('科技公司', '2018-08-14', '实习生', '我               \n            ', 3);

-- ----------------------------
-- Table structure for blog_prize
-- ----------------------------
DROP TABLE IF EXISTS `blog_prize`;
CREATE TABLE `blog_prize`  (
  `prizename` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prizetime` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_prize
-- ----------------------------
INSERT INTO `blog_prize` VALUES ('奖学金55', '2018-08-02', 2);
INSERT INTO `blog_prize` VALUES ('互联网+', '2018-08-04', 3);
INSERT INTO `blog_prize` VALUES ('春蕾绽放9', '2018-07-05', 4);

-- ----------------------------
-- Table structure for blog_proposal
-- ----------------------------
DROP TABLE IF EXISTS `blog_proposal`;
CREATE TABLE `blog_proposal`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_proposal
-- ----------------------------
INSERT INTO `blog_proposal` VALUES (1, '好');
INSERT INTO `blog_proposal` VALUES (2, '修养');
INSERT INTO `blog_proposal` VALUES (6, 'wf');
INSERT INTO `blog_proposal` VALUES (7, 'cs');

-- ----------------------------
-- Table structure for blog_recommend
-- ----------------------------
DROP TABLE IF EXISTS `blog_recommend`;
CREATE TABLE `blog_recommend`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_recommend
-- ----------------------------
INSERT INTO `blog_recommend` VALUES (1, '余华', '推荐的人', 'https://baike.baidu.com/item/%E4%BD%99%E5%8D%8E/6935');
INSERT INTO `blog_recommend` VALUES (2, '赵丽颖', '推荐的人', 'https://baike.baidu.com/item/%E8%B5%B5%E4%B8%BD%E9%A2%96/10075976?fr=aladdin');
INSERT INTO `blog_recommend` VALUES (3, '廖雪峰', '推荐的人', 'https://www.liaoxuefeng.com/');
INSERT INTO `blog_recommend` VALUES (5, '明天你好', '推荐的音乐', 'https://music.163.com/#/search/m/?s=%E6%98%8E%E5%A4%A9%E4%BD%A0%E5%A5%BD&type=1&market=baiduqk');
INSERT INTO `blog_recommend` VALUES (6, '云烟成雨', '推荐的音乐', 'https://music.163.com/#/search/m/?s=%E4%BA%91%E7%83%9F%E6%88%90%E9%9B%A8&type=1&market=baiduqk');
INSERT INTO `blog_recommend` VALUES (7, '讲真的', '推荐的音乐', 'https://music.163.com/#/search/m/?s=%E8%AE%B2%E7%9C%9F%E7%9A%84&type=1&market=baiduqk');
INSERT INTO `blog_recommend` VALUES (9, '红玫瑰与白玫瑰', '推荐的书籍', 'https://book.douban.com/review/9571227/');
INSERT INTO `blog_recommend` VALUES (10, '第一行代码', '推荐的书籍', 'https://baike.baidu.com/item/%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81/18619612?fr=aladdin');
INSERT INTO `blog_recommend` VALUES (12, '计算机操作系统', '推荐的书籍', 'https://baike.baidu.com/item/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%EF%BC%88%E7%AC%AC%E5%9B%9B%E7%89%88%EF%BC%89/19925494');

-- ----------------------------
-- Table structure for blog_self_info
-- ----------------------------
DROP TABLE IF EXISTS `blog_self_info`;
CREATE TABLE `blog_self_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `jobExper` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '有',
  `address` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `politicalface` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '中共党员',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `QQ` varchar(12) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `emil` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `weixin` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `evaluation` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `studytime` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `studyschool` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `studeresult` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `studycollege` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `studyjob` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `name_idx`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_self_info
-- ----------------------------
INSERT INTO `blog_self_info` VALUES (1, 'Sunshine', '无', '成都市新都区', '共青团员', '15828152536', '841002907', '841002907@qq.com', 'olh00000', '性格开朗，为人勤奋，自我动手能力强...', '2016-09-03', '西南石油大学', '本科', '计算机科学学院', '软件工程');

SET FOREIGN_KEY_CHECKS = 1;
