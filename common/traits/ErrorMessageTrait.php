<?php

namespace common\traits;

trait ErrorMessageTrait {

    //以下注释勿删
    /* Error Code Tag Start */
    private static $_errMsg = [
        'unknown' => '未知错误',
        200 => '操作成功',
        1 => '参数缺失',
        3006 => '参数错误',
        //用户登录
        1000 => '用户名或密码错误',
        1001 => '用户已登录',
        1002 => '登录验证码参数必须',
        1003 => '验证码验证失败，请重试',
        1018 => '账号已禁用',
        //账号
        1004 => '密码和确认密码长度必须在8到20个字符',
        1005 => '员工id必须为大于1的整数',
        1006 => '密码和确认密码不一致',
        1007 => '该员工不存在',
        1008 => '账号添加失败',
        1009 => '该用户不存在',
        1010 => '密码输入有误',
        1011 => '账号更改失败',
        1012 => '账号停止失败',
        1013 => '账号启用失败',
        1014 => '参数错误,导致账号删除失败',
        1015 => '账号删除失败',
        1016 => '该员工账号已存在',
        1017 => '同步九大爷登录数据失败',
        //商品信息
        2000 => '商品插入失败',
        2001 => '商品名和条形码都已存在',
        2003 => '图片不能多于5张',
        2004 => '参数错误-1',
        2005 => '无法获取-1',
        2006 => '获取商品信息失败',
        2007 => '商品名称不能超过30字',
        2008 => '商品编码不能超过30字',
        2009 => '商品属性不能超过30字',
        2010 => '价格应该在0-9999999999之间',
        2011 => '商品不存在',
        2012 => '商品信息导出失败',
        2013 => '分类不存在',
        2014 => '仓库不存在',
        2015 => '无法删除,商品已关联单据或库存不为0',
        //单位
        3000 => '单位插入失败',
        3001 => '单位名称已存在',
        3002 => '单位名称不能超过10个字符',
        3003 => '参数异常,导致单位删除失败',
        3004 => '单位删除失败',
        3005 => '单位有对应的商品，不能做删除操作',
        3007 => '单位更改失败',
        3008 => '获取单位列表失败',
        3009 => '单位名称不能小于1个字符',
        //分类
        4000 => '分类插入失败',
        4001 => '分类名称不能超过30个字符',
        4002 => '分类备注不能超过200个字符',
        4003 => '分类名称重复',
        4004 => '您无法在三级分类下进行添加，暂时只支持三级分类',
        4005 => '分类有对应的商品，不能做删除操作',
        4006 => '分类删除失败',
        4007 => '获取分类列表失败',
        4008 => '该分类不能移到对应的分类里',
        4009 => '父级id必须为正整数',
        4010 => '分类更改失败',
        4011 => '分类名称不能小于1个字符',
        4012 => '该分类不存在',
        4013 => '分类父级参数有误',
        4014 => '请选择父级分类,父级分类不能为空',
        //供应商
        5001 => '添加供应商必填字段必须，请填写',
        5002 => '供应商名称最多30个字，请填写',
        5003 => '联系人名称最多30个字，请填写',
        5004 => '手机号只能为11位数字，且只能1开头，请填写',
        5005 => '门店未登录，请登录后重试',
        5006 => '该供应商已存在，不可重复添加',
        5007 => '供应商添加失败，请重试',
        5008 => '非法操作',
        5009 => '供应商更新失败，或未做任何修改，请重试',
        5010 => '供应商不可删除',
        5011 => '操作失败或未做任何改变',
        5012 => '该供应商正在使用，不可删除',
        5013 => '不可删除其他门店供应商或者非法操作',
        5014 => '当前供应商不可编辑',
        5015 => '非本门店供应商，不可添加购货单',
        5016 => '非当前门店供应商，不可查阅',
        //工种
        6000 => '工种插入失败',
        6001 => '工种名称不能超过30个字符',
        6002 => '工种备注不能超过200个字符',
        6003 => '工种名称不能为空',
        6004 => '工种名称已经存在',
        6005 => '工种更改失败',
        6006 => '参数异常,导致工种删除失败',
        6007 => '工种有对应的员工，不能做删除操作',
        6008 => '工种删除失败',
        6009 => '获取工种信息失败',
        //员工
        7000 => '员工插入失败',
        7001 => '员工名称不能小于1个字符',
        7002 => '员工名称不能超过10个字符',
        7003 => '能力值不能小于0',
        7004 => '能力值不能大于100',
        7005 => '底薪不能小于0',
        7006 => '底薪不能超过30位',
        7007 => '员工备注不能超过200个字符',
        7008 => '手机号码格式错误',
        7009 => 'qq格式错误',
        7010 => '图片格式不正确',
        7011 => '身份证号码格式错误',
        7012 => '必须是数字',
        7013 => '员工状态参数错误',
        7014 => '员工更改失败',
        7015 => '参数异常,导致员工删除失败',
        7016 => '员工删除失败',
        7017 => '获取员工列表失败',
        7018 => '员工离职失败',
        7019 => '员工启用失败',
        7020 => '身份证照片格式有误',
        7021 => '工种参数有误',
        7022 => '该员工已开通账号,请删除账号后,再进行该操作',
        //仓库管理
        8001 => '添加仓库，必填项均需要填写',
        8002 => '操作失败或未更新，请重试',
        8003 => '仓库名重复，不可重复添加',
        8004 => '非法编辑',
        8005 => '产品仓库名更新失败',
        8006 => '非法添加',
        8007 => '仓库已有商品，不能删除',
        8008 => '删除失败',
        8009 => '仓库不存在',
        8010 => '非法查询',
        8011 => '仓库名称必须',
        8012 => '门店ID必须',
        //附加服务项目
        9000 => '附加项目插入失败',
        9001 => '附加服务项目名称不能小于1个字符',
        9002 => '附加服务项目名称不能超过30个字符',
        9003 => '售价最小为0',
        9004 => '售价必须为纯数字',
        9005 => '售价不能超过30个字符',
        9006 => '附加服务项目名称已经存在',
        9007 => '附加项目更改失败',
        9008 => '参数异常,附加项目删除失败',
        9009 => '附加项目删除失败',
        9033 => '参数错误,导致附加项目获取失败',
        9039 => '项目名称参数有问题',
        //服务项目分类
        9010 => '服务项目分类插入失败',
        9011 => '服务项目分类名称不能超过30个字符',
        9012 => '服务项目分类备注不能超过200个字符',
        9013 => '服务项目分类名称重复',
        9014 => '服务项目分类有对应的服务，不能做删除操作',
        9015 => '服务项目分类有对应的服务项目，不能做删除操作',
        9016 => '服务项目分类删除失败',
        9034 => '参数错误,服务项目分类获取失败',
        9042 => '服务项目分类更改失败',
        //服务项目
        9017 => '服务项目名称不能小于1个字符',
        9018 => '服务项目名称不能超过30个字符',
        9019 => '服务项目分类ID必须是大于0的整数',
        9020 => '服务类型和状态必须是0或1',
        9021 => '服务项目备注不能超过100个字符',
        9022 => '服务项目分类ID参数有误',
        9023 => '该服务项目编号已存在',
        9024 => '服务项目名编号不能小于8个字符',
        9025 => '服务项目名编号不能超过30个字符',
        9026 => '服务项目规格不能小于1个字符',
        9027 => '服务项目规格不能超过30个字符',
        9028 => '服务项目名称已存在',
        9029 => '服务项目插入失败',
        9030 => '服务项目更改失败',
        9031 => '服务项目删除失败',
        9032 => '参数错误,导致服务项目删除失败',
        9035 => '参数错误,服务项目获取失败',
        9036 => '服务项目导出失败',
        9037 => '服务项目停用失败',
        9038 => '参数错误,导致服务项目停止失败',
        9040 => '参数错误,导致服务项目启用失败',
        9041 => '服务项目启用失败',
        //门店
        11001 => '非我门店，不可操作',
        11002 => '有必填字段为空，请填写',
        11003 => '手机号只能为11位数字，且只能1开头，请填写',
        11004 => '更新失败或者未更新',
        11005 => '无效参数',
        11006 => '门店禁用失败',
        11007 => '门店启用失败',
        11008 => '门店操作执行有误',
        11009 => '备注不能超过100个字符',
        //采购
        12001 => '采购数据添加失败',
        12002 => '仓库ID必须为正整数',
        12003 => '商品ID必须为正整数',
        12004 => '采购数量必须为正整数',
        12005 => '采购单状态非正常',
        12006 => '参数异常或查询无果，请检测后重试',
        12007 => '采购来源不可用',
        12008 => '采购单中无商品，添加失败',
        12009 => '采购商品必填字段未必填',
        12010 => '采购单有字段未填写',
        12011 => '无权限获取该数据',
        12012 => '无法编辑该数据',
        12013 => '非挂单状态，不可编辑',
        12014 => '编辑失败，请确认信息是否正常填写，再重试',
        12015 => '非挂单状态，无法作废',
        12016 => '必要参数不合法，请检查',
        12017 => '采购商品保存失败',
        12018 => '该仓库不允许在同一批次中存入两条同一商品',
        12019 => '优惠金额不可小于0',
        12020 => '实付金额不可小于0',
        12021 => '采购单价不可为0',
        //领料
        13000 => '领料人ID必须为正整数',
        13001 => '请选择领料人',
        13002 => '请选择领料商品',
        13003 => '要领取的商品超过实际库存数',
        13004 => '该领料商品信息有误，无法进行报损',
        13005 => '领料商品备注不能超过100个字符',
        13006 => '领料失败',
        13007 => '要领取的商品数量不能为0',
        13008 => '不允许添加重复商品',
        13009 => '领料单报废失败',
        //报损
        14000 => '报损人ID必须为正整数',
        14001 => '请选择报损人',
        14002 => '请选择报损商品',
        14003 => '要报损的商品超过实际库存数',
        14004 => '该报损商品信息有误，无法进行报损',
        14005 => '报损商品备注不能超过100个字符',
        14006 => '报损失败',
        14007 => '要报损的商品数量不能为0',
        14008 => '报损单报废失败',
        14009 => '商品数量不能为0',
        14010 => '报损备注不能大于200个字符',
        14011 => '商品数量必须为数字类型',
        14012 => '服务数量必须为大于0的正整数',
        14013 => '不允许添加重复服务项目',
        //轮胎
        15000 => '轮胎品牌名称不能小于1个字符',
        15001 => '轮胎品牌名称不能小于30个字符',
        15002 => '轮胎品牌名已存在',
        15003 => '轮胎品牌名添加失败',
        15004 => '轮胎品牌名修改失败',
        15005 => '参数错误,导致轮胎品牌删除失败',
        15006 => '轮胎品牌名删除失败',
        //客户
        17000 => '客户姓名长度在1到30个字符',
        17001 => '客户手机号码输入有误',
        17002 => '客户性别输入有误',
        17003 => '客户身份证输入有误',
        17004 => '客户地址长度在1到50个字符',
        17005 => '客户来源长度在1到30个字符',
        17006 => '客户单位名称长度在1到50个字符',
        17007 => '客户会员状态输入有误',
        17008 => '客户状态输入有误',
        17009 => '客户备注长度在1到200个字符',
        17010 => '同一个手机号码只能创建一个用户,该用户已存在',
        17011 => '客户生日日期格式不对。eg:年月日2018-02-04或20180204',
        17012 => '客户汽车信息有误',
        17013 => '车架号不能超过30个字符',
        17014 => '车牌号省份参数有误',
        17015 => '车牌号字母参数有误',
        17016 => '车牌号不能为空',
        17017 => '汽车型号参数有误',
        17018 => '排量不能超过30个字符',
        17019 => '车价不能超过10个字符',
        17020 => '发动机型号不能超过30个字符',
        17021 => '厂牌型号不能超过30个字符',
        17022 => '发动机号码不能超过30个字符',
        17023 => '漏油检查不能超过30个字符',
        17024 => '下次保养里程不能超过10个字符',
        17025 => '上次保养里程不能超过10个字符',
        17026 => '轮胎检查不能超过30个字符',
        17027 => '车辆颜色不能超过10个字符',
        17028 => '刹车片检查不能超过30个字符',
        17029 => '刹车油检查不能超过30个字符',
        17030 => '电瓶检查不能超过30个字符',
        17031 => '机油检查不能超过30个字符',
        17032 => '保险公司不能超过30个字符',
        17033 => '故障灯检查不能超过30个字符',
        17034 => '轮胎品牌参数有误',
        17035 => '轮胎型号不能超过30个字符',
        17036 => '添加客户资料失败',
        17037 => '该客户汽车车牌已存在',
        17039 => '用户车辆信息有误',
        17040 => '更改客户资料失败',
        17041 => '停用客户失败',
        17042 => '启用客户失败',
        17043 => '该客户已经是会员了',
        17057 => '参数错误,客户删除失败',
        17058 => '客户删除失败',
        17059 => '车牌号必须是5位或者6位',
        17060 => '汽车型号不能为空',
        17061 => '会员卡号已存在',
        //会员
        17045 => '会员卡号长度在1到30个字符',
        17046 => '会员卡种长度在1到30个字符',
        17047 => '办卡金额最小为0',
        17048 => '办卡金额必须为纯数字',
        17049 => '办卡金额不能超过30个字符',
        17050 => '办卡备注在1到200个字符',
        17051 => '生成会员失败',
        17052 => '该客户不是会员,无法进行该操作',
        17053 => '取消会员失败',
        17054 => '开始时间格式有问题',
        17055 => '结束时间格式有问题',
        17056 => '结束时间必须大于开始时间',
        //盘点
        18001 => '仓库不合法',
        18002 => '商品不存在',
        18003 => '被盘点仓库必须',
        18004 => '无盘点商品，不可盘点',
        18005 => '该盘点单不存在',
        18006 => '无权限获取该数据',
        18007 => '盘点数据添加失败，或与上次盘点一致',
        18008 => '被盘点的批次号不合法',
        18009 => '盘点单有必填字段未填写',
        //开单
        19000 => '会员优惠必须为数字',
        19001 => '会员优惠长度在1到10个字符',
        19002 => '备注长度在1到200个字符',
        19003 => '客户信息有误',
        19004 => '技师信息有误',
        19005 => '服务项目信息有误',
        19006 => '开单失败',
        19007 => '结算失败',
        19008 => '单据导出失败',
        19009 => '优惠金额不能大于开单金额',
        19010 => '客户车辆信息有误',
            ////商品信息查询
        //后台账号角色管理
        20000 => '修改用户失败',
        20001 => '该用户不存在',
        20002 => '保存用户角色关系失败',
        20003 => '账号名长度必须在0到10之间',
        20004 => '密码长度必须在1到30之间',
        20005 => '手机号格式错误',
        20006 => '邮箱格式错误',
        20007 => '必填字段不能为空',
        20008 => '该账户无法操作',
        20010 => '角色名长度大于10个字符',
        20011 => '无法删除,请先解除已绑定的账号',

        //会员办卡
        21000 => '您的门店已停用此卡种',
        21001 => '您的门店还未设置此卡种',
        21002 => '卡种参数错误',
        21003 => '会员基础卡信息表插入失败',
        21004 => '卡余量表插入失败',
        21005 => '余量日志表插入失败',
        21006 => '会员服务明细表插入失败',
        21007 => '会员积分表插入失败',
        21008 => '会员积分日志表插入失败',
        
        //会员模板
        22000 => '会员卡模板必填字段缺失',
        22001 => '会员卡模板',
    ];


    /* Error Code Tag End */
    //以上注释勿删

    /**
     * 获取错误提示
     * @param $errCode 错误码
     * @return str
     */
    private function getErrMsg($errCode) {
        if (isset(self::$_errMsg[$errCode])) {
            return self::$_errMsg[$errCode];
        } else {
            return self::$_errMsg['unknown'];
        }
    }

}
