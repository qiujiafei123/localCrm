<?php

namespace commodity\activeRecord;

use yii\db\ActiveRecord;

class MemberCardAR extends ActiveRecord
{
    public static function tableName()
    {
        return '{{%member_card}}';
    }
}
