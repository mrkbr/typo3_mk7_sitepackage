<?php
defined('TYPO3_MODE') || die();



/* 
 * -------------------------------------
 * Variables
 * ------------------------------------- 
 */
$extPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extPath($_EXTKEY);



/* 
 * -------------------------------------
 * RTE / CKeditor
 * ------------------------------------- 
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['mk7base'] = 'EXT:mk7base/Configuration/rte/Default.yaml';




/* 
 * -------------------------------------
 * PageTS
 * ------------------------------------- 
 */
 
//\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TsConfig/Page/All.tsconfig">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="DIR:EXT:' . $_EXTKEY . '/Configuration/ts_page" extensions="ts">');




/* 
 * -------------------------------------
 * UserTS
 * ------------------------------------- 
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="DIR:EXT:' . $_EXTKEY . '/Configuration/ts_user" extensions="ts">');

