<?php

/* * 
 * CRM system for 9daye
 * 
 * @author Vett <niulechuan@9daye.com.cn>
 */

namespace commodity\modules\damaged\models\del;

use Yii;
use common\models\Model as CommonModel;
use commodity\modules\damaged\models\del\db\Del;
use commodity\modules\damaged\models\put\PutModel;

class DelModel extends CommonModel {
    
    const ACTION_DEL = 'action_del';
    
    public $token;
    public $damaged_number; //工号 string

    public function scenarios() {
        return [
            self::ACTION_DEL => [
                'damaged_number', 'token'
            ],
        ];
    }

    public function rules() {
        return [
            [
                ['damaged_number', 'token'],
                'required',
                'message' => 2004,
            ],
        ];
    }

    public function actionDel() {

        try {

           
            //判断user是否存在
            $userIdentity = PutModel::verifyUser();

            $damaged_number = $this->damaged_number;
            if (!is_array($damaged_number)) {
                throw new \Exception('参数错误,导致员工删除失败', 7015);
            }

            $condition['damaged_number'] = $damaged_number;
            $condition['store_id'] = current($userIdentity)['store_id'];
           
            //删除动作
            if (!Del::delEmployee($condition)) {
                throw new \Exception('参数错误,导致员工删除失败', 7015);
            }

            return [];
        } catch (\Exception $ex) {

            if ($ex->getCode() === 7015) {
                $this->addError('del', 7015);
                return false;
            }  else {
                $this->addError('del', 7016);
                return false;
            }
        }
    }

}
