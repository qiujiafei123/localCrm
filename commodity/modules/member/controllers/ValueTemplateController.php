<?php
/**
 * CRM system for 9daye
 *
 * @author: qch <qianchaohui@9daye.com.cn>
 */
namespace commodity\modules\member\controllers;

use Yii;
use common\controllers\Controller as CommonController;
use commodity\modules\member\models\cardTemplate\ValueTemplateModel;

class ValueTemplateController extends CommonController
{

    public $enableCsrfValidation = false;
    protected $actionUsingDefaultProcess = [
        'get-one' => [
            'scenario' => ValueTemplateModel::ACTION_GET_ONE,
            'method' => 'get',
            'convert' => false,
        ],
        'get-all' => [
            'scenario' => ValueTemplateModel::ACTION_GET_ALL,
            'method' => 'get',
            'convert' => false,
        ],
        'put-one' => [
            'scenario' => ValueTemplateModel::ACTION_PUT_ONE,
            'method' => 'post',
            'convert' => false,
        ],
        'set-one' => [
            'scenario' => ValueTemplateModel::ACTION_SET_ONE,
            'method' => 'post',
            'convert' => false,
        ],
        '_model' => ValueTemplateModel::class,
    ];
    protected $access = [
        'get-one' => ['@', 'get'],
        'get-all' => ['@', 'get'],
        'put-one' => ['@', 'post'],
        'set-one' => ['@', 'post'],
    ];

}