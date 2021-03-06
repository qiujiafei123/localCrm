<?php

/* * 
 * CRM system for 9daye
 * 
 * @author wx <wangxiong@9daye.com.cn>
 */

namespace commodity\modules\service\controllers;

use Yii;
use common\controllers\Controller as CommonController;
use commodity\modules\service\models\modify\ModifyModel;

class ModifyController extends CommonController {

    public $enableCsrfValidation = false;
    protected $actionUsingDefaultProcess = [
        'modify' => [
            'scenario' => ModifyModel::ACTION_MODIFY,
            'method' => 'post',
            'convert' => false,
        ],
        'stop' => [
            'scenario' => ModifyModel::ACTION_STOP,
            'method' => 'post',
            'convert' => false,
        ],
        'open' => [
            'scenario' => ModifyModel::ACTION_OPEN,
            'method' => 'post',
            'convert' => false,
        ],
            '_model' => ModifyModel::class,
    ];
    protected $access = [
        'modify' => ['@', 'post'],
        'stop' => ['@', 'post'],
        'open' => ['@', 'post'],
    ];

}
