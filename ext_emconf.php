<?php

/**
 * Extension Manager/Repository config file for ext "mk7base".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'mk7base',
    'description' => 'Base Extension',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.0-9.5.99',
            'fluid_styled_content' => '9.5.0-9.5.99',
            'rte_ckeditor' => '9.5.0-9.5.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Mk7\\Mk7base\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Mario Kober',
    'author_email' => 'm@mk7.de',
    'author_company' => 'MK7',
    'version' => '1.0.0',
];
