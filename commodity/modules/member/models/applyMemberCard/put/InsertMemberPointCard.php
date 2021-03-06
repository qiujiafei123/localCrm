<?php

/*  * 
 * CRM system for 9daye
 * 
 * @author qiujiafei<qiujiafei@9daye.com.cn>
 */

namespace commodity\modules\member\models\applyMemberCard\put;



use commodity\activeRecord\MemberPointAR;
use Yii;

class InsertMemberPointCard
{

    //添加
    public static function insertMemberPointCard(array $data) {
        //整理需要插入的字段
        $newData = array(
            'customer_infomation_id' => $data['customer_infomation_id'],
            'store_id'=>$data['store_id'],
            'member_number'=>$data['member_number'],
            'created_by'=>$data['created_by'],
            'create_time'=>$data['created_time'],
            'point'=>$data['point'],
            'last_modified_time'=>$data['created_time']
        );

            try{
                $insert = new MemberPointAR();
                foreach ($newData as $k=>$v){
                    $insert->$k = $v;
                }
                $insert->save();
                return true;
            }catch (\Exception $ex){
                throw $ex;
            }



    }




}
