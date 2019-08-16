$(function(){

var motions = [



{ motion_id: "0", motion_bukitype: "1", motion_name: "キック"},
{ motion_id: "1", motion_bukitype: "1", motion_name: "縦斬り"},
{ motion_id: "2", motion_bukitype: "1", motion_name: "なぎ払い"},
{ motion_id: "3", motion_bukitype: "1", motion_name: "斬り上げ"},
{ motion_id: "4", motion_bukitype: "1", motion_name: "横殴り"},
{ motion_id: "5", motion_bukitype: "1", motion_name: "溜め斬り1"},
{ motion_id: "6", motion_bukitype: "1", motion_name: "溜め斬り2"},
{ motion_id: "7", motion_bukitype: "1", motion_name: "タックル0"},
{ motion_id: "8", motion_bukitype: "1", motion_name: "タックル1"},
{ motion_id: "9", motion_bukitype: "1", motion_name: "タックル2"},
{ motion_id: "10", motion_bukitype: "1", motion_name: "強溜め斬り0"},
{ motion_id: "11", motion_bukitype: "1", motion_name: "強溜め斬り1"},
{ motion_id: "12", motion_bukitype: "1", motion_name: "強溜め斬り2"},
{ motion_id: "13", motion_bukitype: "1", motion_name: "強なぎ払い0"},
{ motion_id: "14", motion_bukitype: "1", motion_name: "強なぎ払い1"},
{ motion_id: "15", motion_bukitype: "1", motion_name: "強なぎ払い2"},
{ motion_id: "16", motion_bukitype: "1", motion_name: "真・溜め斬り0"},
{ motion_id: "17", motion_bukitype: "1", motion_name: "真・溜め斬り1"},
{ motion_id: "18", motion_bukitype: "1", motion_name: "真・溜め斬り2"},
{ motion_id: "19", motion_bukitype: "1", motion_name: "飛び込みなぎ払い0"},
{ motion_id: "20", motion_bukitype: "1", motion_name: "飛び込みなぎ払い1"},
{ motion_id: "21", motion_bukitype: "1", motion_name: "飛び込みなぎ払い2"},
{ motion_id: "34", motion_bukitype: "1", motion_name: "なぎ払い(強溜め斬り経由)"},
{ motion_id: "35", motion_bukitype: "1", motion_name: "斬り上げ(強溜め斬り経由)"},
{ motion_id: "36", motion_bukitype: "1", motion_name: "横殴り(強溜め斬り経由)"},
{ motion_id: "22", motion_bukitype: "1", motion_name: "ジャンプ斬り"},
{ motion_id: "23", motion_bukitype: "1", motion_name: "ジャンプ溜め斬り1"},
{ motion_id: "24", motion_bukitype: "1", motion_name: "ジャンプ溜め斬り2"},
{ motion_id: "25", motion_bukitype: "1", motion_name: "溜め斬り上げ0"},
{ motion_id: "26", motion_bukitype: "1", motion_name: "溜め斬り上げ1"},
{ motion_id: "27", motion_bukitype: "1", motion_name: "溜め斬り上げ2"},
{ motion_id: "28", motion_bukitype: "1", motion_name: "落下突き0"},
{ motion_id: "29", motion_bukitype: "1", motion_name: "落下突き1"},
{ motion_id: "30", motion_bukitype: "1", motion_name: "落下突き2"},
{ motion_id: "31", motion_bukitype: "1", motion_name: "乗り成功：溜め斬り0"},
{ motion_id: "32", motion_bukitype: "1", motion_name: "乗り成功：溜め斬り1"},
{ motion_id: "33", motion_bukitype: "1", motion_name: "乗り成功：溜め斬り2"},
{ motion_id: "0", motion_bukitype: "2", motion_name: "踏み込み斬り"},
{ motion_id: "1", motion_bukitype: "2", motion_name: "縦斬り"},
{ motion_id: "2", motion_bukitype: "2", motion_name: "突き"},
{ motion_id: "3", motion_bukitype: "2", motion_name: "斬り上げ"},
{ motion_id: "4", motion_bukitype: "2", motion_name: "斬り下がり"},
{ motion_id: "5", motion_bukitype: "2", motion_name: "移動斬り"},
{ motion_id: "6", motion_bukitype: "2", motion_name: "気刃踏み込み斬りゲージ無"},
{ motion_id: "7", motion_bukitype: "2", motion_name: "気刃踏み込み斬りゲージ有"},
{ motion_id: "8", motion_bukitype: "2", motion_name: "気刃突き"},
{ motion_id: "9", motion_bukitype: "2", motion_name: "気刃兜割白色"},
{ motion_id: "10", motion_bukitype: "2", motion_name: "気刃兜割黄色"},
{ motion_id: "11", motion_bukitype: "2", motion_name: "気刃兜割赤色"},
{ motion_id: "12", motion_bukitype: "2", motion_name: "見切り斬りゲージ小"},
{ motion_id: "13", motion_bukitype: "2", motion_name: "見切り斬り"},
{ motion_id: "14", motion_bukitype: "2", motion_name: "見切り斬りゲージ小(当身成功)"},
{ motion_id: "15", motion_bukitype: "2", motion_name: "見切り斬り(当身成功)"},
{ motion_id: "16", motion_bukitype: "2", motion_name: "気刃斬りⅠゲージ無し"},
{ motion_id: "17", motion_bukitype: "2", motion_name: "気刃斬りⅠ"},
{ motion_id: "18", motion_bukitype: "2", motion_name: "気刃斬りⅡ"},
{ motion_id: "19", motion_bukitype: "2", motion_name: "気刃斬りⅢ"},
{ motion_id: "20", motion_bukitype: "2", motion_name: "気刃大回転斬り"},
{ motion_id: "21", motion_bukitype: "2", motion_name: "ジャンプ斬り"},
{ motion_id: "22", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りゲージ無し"},
{ motion_id: "23", motion_bukitype: "2", motion_name: "ジャンプ気刃斬り"},
{ motion_id: "24", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ白ゲージ無し"},
{ motion_id: "25", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ白"},
{ motion_id: "26", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ白ゲージ無し着地前"},
{ motion_id: "27", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ白着地前に出す"},
{ motion_id: "28", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ黄ゲージ無し"},
{ motion_id: "29", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ黄"},
{ motion_id: "30", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ黄ゲージ無し着地前"},
{ motion_id: "31", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅡ黄着地前に出す"},
{ motion_id: "32", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅢゲージ無し"},
{ motion_id: "33", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅢ"},
{ motion_id: "34", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅢゲージ無し着地前"},
{ motion_id: "35", motion_bukitype: "2", motion_name: "ジャンプ気刃斬りⅢ着地前に出す"},
{ motion_id: "36", motion_bukitype: "2", motion_name: "ジャンプ斬り上げ"},
{ motion_id: "37", motion_bukitype: "2", motion_name: "空中抜刀気刃斬りゲージ無し"},
{ motion_id: "38", motion_bukitype: "2", motion_name: "空中抜刀気刃斬り"},
{ motion_id: "39", motion_bukitype: "2", motion_name: "乗り成功：気刃四連斬り(頭)"},
{ motion_id: "40", motion_bukitype: "2", motion_name: "乗り成功：気刃四連斬り(頭以外)"},
{ motion_id: "41", motion_bukitype: "2", motion_name: "乗り成功：気刃四連斬り(3ヒット目まで)"},
{ motion_id: "42", motion_bukitype: "2", motion_name: "乗り成功：気刃四連斬り(頭以外4ヒット目)"},
{ motion_id: "0", motion_bukitype: "3", motion_name: "斬り下ろし"},
{ motion_id: "1", motion_bukitype: "3", motion_name: "横斬り"},
{ motion_id: "2", motion_bukitype: "3", motion_name: "剣盾コンボ"},
{ motion_id: "3", motion_bukitype: "3", motion_name: "回転斬り"},
{ motion_id: "4", motion_bukitype: "3", motion_name: "水平斬り"},
{ motion_id: "5", motion_bukitype: "3", motion_name: "斬り返し"},
{ motion_id: "6", motion_bukitype: "3", motion_name: "突進斬り"},
{ motion_id: "7", motion_bukitype: "3", motion_name: "ショート盾攻撃"},
{ motion_id: "8", motion_bukitype: "3", motion_name: "斬り上げ"},
{ motion_id: "9", motion_bukitype: "3", motion_name: "ガード斬り"},
{ motion_id: "10", motion_bukitype: "3", motion_name: "盾攻撃"},
{ motion_id: "11", motion_bukitype: "3", motion_name: "バックナックル"},
{ motion_id: "12", motion_bukitype: "3", motion_name: "ハードバッシュ"},
{ motion_id: "13", motion_bukitype: "3", motion_name: "旋回斬り(横)"},
{ motion_id: "24", motion_bukitype: "3", motion_name: "旋回斬り(後方)"},
{ motion_id: "14", motion_bukitype: "3", motion_name: "突き"},
{ motion_id: "15", motion_bukitype: "3", motion_name: "溜め斬り"},
{ motion_id: "16", motion_bukitype: "3", motion_name: "駆け上がり斬り"},
{ motion_id: "17", motion_bukitype: "3", motion_name: "フォールバッシュ"},
{ motion_id: "18", motion_bukitype: "3", motion_name: "ジャンプ斬り"},
{ motion_id: "19", motion_bukitype: "3", motion_name: "ジャンプ斬り上げ"},
{ motion_id: "20", motion_bukitype: "3", motion_name: "ジャンプ突進斬り"},
{ motion_id: "21", motion_bukitype: "3", motion_name: "スライディング斬り"},
{ motion_id: "22", motion_bukitype: "3", motion_name: "落下突き"},
{ motion_id: "23", motion_bukitype: "3", motion_name: "乗り成功：三連攻撃"},
{ motion_id: "0", motion_bukitype: "4", motion_name: "二段斬り"},
{ motion_id: "1", motion_bukitype: "4", motion_name: "二段斬り返し"},
{ motion_id: "2", motion_bukitype: "4", motion_name: "車輪斬り"},
{ motion_id: "3", motion_bukitype: "4", motion_name: "斬り払い"},
{ motion_id: "4", motion_bukitype: "4", motion_name: "斬り上げ"},
{ motion_id: "5", motion_bukitype: "4", motion_name: "左回転斬り"},
{ motion_id: "6", motion_bukitype: "4", motion_name: "右回転斬り"},
{ motion_id: "7", motion_bukitype: "4", motion_name: "反転斬り"},
{ motion_id: "8", motion_bukitype: "4", motion_name: "ジャンプ二段斬り"},
{ motion_id: "9", motion_bukitype: "4", motion_name: "スライディング斬り"},
{ motion_id: "10", motion_bukitype: "4", motion_name: "空中回転乱舞"},
{ motion_id: "11", motion_bukitype: "4", motion_name: "回転乱舞フィニッシュ"},
{ motion_id: "12", motion_bukitype: "4", motion_name: "乗り成功：鬼人連斬"},
{ motion_id: "13", motion_bukitype: "4", motion_name: "空中回転乱舞・天"},
{ motion_id: "14", motion_bukitype: "4", motion_name: "空中回転乱舞・天(11ヒット目～)ｘ0.7"},
{ motion_id: "15", motion_bukitype: "4", motion_name: "空中回転乱舞・天(16ヒット目～)ｘ0.5"},
{ motion_id: "16", motion_bukitype: "4", motion_name: "空中回転乱舞・天(21ヒット目～)ｘ0.3"},
{ motion_id: "17", motion_bukitype: "4", motion_name: "空中回転乱舞・天フィニッシュ"},
{ motion_id: "0", motion_bukitype: "4_1", motion_name: "二段斬り"},
{ motion_id: "1", motion_bukitype: "4_1", motion_name: "二段斬り返し"},
{ motion_id: "2", motion_bukitype: "4_1", motion_name: "車輪斬り"},
{ motion_id: "3", motion_bukitype: "4_1", motion_name: "鬼人突進連斬"},
{ motion_id: "4", motion_bukitype: "4_1", motion_name: "斬り上げ"},
{ motion_id: "5", motion_bukitype: "4_1", motion_name: "左回転斬り"},
{ motion_id: "6", motion_bukitype: "4_1", motion_name: "右回転斬り"},
{ motion_id: "7", motion_bukitype: "4_1", motion_name: "鬼人連斬"},
{ motion_id: "8", motion_bukitype: "4_1", motion_name: "ジャンプ二段斬り"},
{ motion_id: "9", motion_bukitype: "4_1", motion_name: "スライディング斬り"},
{ motion_id: "10", motion_bukitype: "4_1", motion_name: "空中回転乱舞"},
{ motion_id: "11", motion_bukitype: "4_1", motion_name: "回転乱舞フィニッシュ"},
{ motion_id: "12", motion_bukitype: "4_1", motion_name: "乗り成功：鬼人連斬"},
{ motion_id: "13", motion_bukitype: "4_1", motion_name: "空中回転乱舞・天"},
{ motion_id: "14", motion_bukitype: "4_1", motion_name: "空中回転乱舞・天(11ヒット目～)ｘ0.7"},
{ motion_id: "15", motion_bukitype: "4_1", motion_name: "空中回転乱舞・天(16ヒット目～)ｘ0.5"},
{ motion_id: "16", motion_bukitype: "4_1", motion_name: "空中回転乱舞・天フィニッシュ"},
{ motion_id: "0", motion_bukitype: "4_2", motion_name: "鬼人逆手斬り"},
{ motion_id: "1", motion_bukitype: "4_2", motion_name: "鬼人二段斬り"},
{ motion_id: "2", motion_bukitype: "4_2", motion_name: "鬼人六段斬り"},
{ motion_id: "3", motion_bukitype: "4_2", motion_name: "鬼人突進連斬"},
{ motion_id: "4", motion_bukitype: "4_2", motion_name: "左回転斬り"},
{ motion_id: "5", motion_bukitype: "4_2", motion_name: "右回転斬り"},
{ motion_id: "6", motion_bukitype: "4_2", motion_name: "左二回転斬り"},
{ motion_id: "7", motion_bukitype: "4_2", motion_name: "右二回転斬り"},
{ motion_id: "8", motion_bukitype: "4_2", motion_name: "左移動斬り"},
{ motion_id: "9", motion_bukitype: "4_2", motion_name: "右移動斬り"},
{ motion_id: "10", motion_bukitype: "4_2", motion_name: "斬り上げ"},
{ motion_id: "20", motion_bukitype: "4_2", motion_name: "斬り上げ(鬼人突進連斬派生)"},
{ motion_id: "11", motion_bukitype: "4_2", motion_name: "乱舞"},
{ motion_id: "12", motion_bukitype: "4_2", motion_name: "スライディング斬り"},
{ motion_id: "13", motion_bukitype: "4_2", motion_name: "空中回転乱舞"},
{ motion_id: "14", motion_bukitype: "4_2", motion_name: "回転乱舞フィニッシュ"},
{ motion_id: "15", motion_bukitype: "4_2", motion_name: "乗り成功：鬼人連斬"},
{ motion_id: "16", motion_bukitype: "4_2", motion_name: "空中回転乱舞・天"},
{ motion_id: "17", motion_bukitype: "4_2", motion_name: "空中回転乱舞・天(11ヒット目～)ｘ0.7"},
{ motion_id: "18", motion_bukitype: "4_2", motion_name: "空中回転乱舞・天(16ヒット目～)ｘ0.5"},
{ motion_id: "19", motion_bukitype: "4_2", motion_name: "空中回転乱舞・天フィニッシュ"},
{ motion_id: "0", motion_bukitype: "5", motion_name: "縦振りⅠ"},
{ motion_id: "1", motion_bukitype: "5", motion_name: "縦振りⅡ"},
{ motion_id: "2", motion_bukitype: "5", motion_name: "アッパー"},
{ motion_id: "3", motion_bukitype: "5", motion_name: "叩きつけ1発目"},
{ motion_id: "4", motion_bukitype: "5", motion_name: "叩きつけ2発目"},
{ motion_id: "5", motion_bukitype: "5", motion_name: "叩きつけ3発目"},
{ motion_id: "6", motion_bukitype: "5", motion_name: "叩きつけ4発目"},
{ motion_id: "7", motion_bukitype: "5", motion_name: "叩きつけフィニッシュ"},
{ motion_id: "8", motion_bukitype: "5", motion_name: "横振り"},
{ motion_id: "9", motion_bukitype: "5", motion_name: "振り回し"},
{ motion_id: "10", motion_bukitype: "5", motion_name: "返し振り"},
{ motion_id: "11", motion_bukitype: "5", motion_name: "溜め振り回し"},
{ motion_id: "12", motion_bukitype: "5", motion_name: "溜め返し振り"},
{ motion_id: "13", motion_bukitype: "5", motion_name: "溜め返し振り（力溜め）"},
{ motion_id: "14", motion_bukitype: "5", motion_name: "溜めアッパー"},
{ motion_id: "15", motion_bukitype: "5", motion_name: "溜め強アッパー"},
{ motion_id: "16", motion_bukitype: "5", motion_name: "溜め叩きつけ"},
{ motion_id: "17", motion_bukitype: "5", motion_name: "溜め強叩きつけ"},
{ motion_id: "18", motion_bukitype: "5", motion_name: "回転攻撃(1ヒット目)"},
{ motion_id: "19", motion_bukitype: "5", motion_name: "回転攻撃(2～5ヒット目)"},
{ motion_id: "20", motion_bukitype: "5", motion_name: "回転横振り"},
{ motion_id: "21", motion_bukitype: "5", motion_name: "回転返し振り"},
{ motion_id: "22", motion_bukitype: "5", motion_name: "回転強アッパー"},
{ motion_id: "23", motion_bukitype: "5", motion_name: "回転振り回し"},
{ motion_id: "24", motion_bukitype: "5", motion_name: "ジャンプ叩きつけ"},
{ motion_id: "25", motion_bukitype: "5", motion_name: "ジャンプ溜め攻撃"},
{ motion_id: "26", motion_bukitype: "5", motion_name: "ジャンプ溜め攻撃（2段階目）"},
{ motion_id: "27", motion_bukitype: "5", motion_name: "ジャンプ溜め攻撃（3段階目）"},
{ motion_id: "28", motion_bukitype: "5", motion_name: "空中回転攻撃"},
{ motion_id: "29", motion_bukitype: "5", motion_name: "空中回転攻撃フィニシュ"},
{ motion_id: "30", motion_bukitype: "5", motion_name: "乗り成功：溜め攻撃1"},
{ motion_id: "31", motion_bukitype: "5", motion_name: "乗り成功：溜め攻撃2"},
{ motion_id: "32", motion_bukitype: "5", motion_name: "乗り成功：溜め攻撃3"},
{ motion_id: "33", motion_bukitype: "5", motion_name: "乗り成功：溜め攻撃1(尻尾)"},
{ motion_id: "34", motion_bukitype: "5", motion_name: "乗り成功：溜め攻撃2(尻尾)"},
{ motion_id: "35", motion_bukitype: "5", motion_name: "乗り成功：溜め攻撃3(尻尾)"},
{ motion_id: "0", motion_bukitype: "6", motion_name: "左ぶん回し"},
{ motion_id: "1", motion_bukitype: "6", motion_name: "右ぶん回し"},
{ motion_id: "2", motion_bukitype: "6", motion_name: "叩きつけ"},
{ motion_id: "3", motion_bukitype: "6", motion_name: "柄殴り"},
{ motion_id: "4", motion_bukitype: "6", motion_name: "前方攻撃"},
{ motion_id: "5", motion_bukitype: "6", motion_name: "後方攻撃"},
{ motion_id: "6", motion_bukitype: "6", motion_name: "連音攻撃"},
{ motion_id: "7", motion_bukitype: "6", motion_name: "演奏"},
{ motion_id: "8", motion_bukitype: "6", motion_name: "衝撃波"},
{ motion_id: "9", motion_bukitype: "6", motion_name: "追加演奏"},
{ motion_id: "10", motion_bukitype: "6", motion_name: "追加演奏横"},
{ motion_id: "11", motion_bukitype: "6", motion_name: "追加演奏前方"},
{ motion_id: "12", motion_bukitype: "6", motion_name: "追加演奏後方"},
{ motion_id: "13", motion_bukitype: "6", motion_name: "追加演奏（3音以上）"},
{ motion_id: "14", motion_bukitype: "6", motion_name: "追加演奏横（3音以上）"},
{ motion_id: "15", motion_bukitype: "6", motion_name: "追加演奏前方（3音以上）"},
{ motion_id: "16", motion_bukitype: "6", motion_name: "追加演奏後方（3音以上）"},
{ motion_id: "17", motion_bukitype: "6", motion_name: "ジャンプ攻撃"},
{ motion_id: "18", motion_bukitype: "6", motion_name: "ジャンプ演奏攻撃"},
{ motion_id: "19", motion_bukitype: "6", motion_name: "ジャンプ演奏攻撃(衝撃波あり)"},
{ motion_id: "20", motion_bukitype: "6", motion_name: "ジャンプ叩きつけ"},
{ motion_id: "21", motion_bukitype: "6", motion_name: "乗り成功：叩きつけ"},
{ motion_id: "0", motion_bukitype: "7", motion_name: "中段突きⅠ"},
{ motion_id: "1", motion_bukitype: "7", motion_name: "中段突きⅡ"},
{ motion_id: "2", motion_bukitype: "7", motion_name: "中段突きⅢ"},
{ motion_id: "3", motion_bukitype: "7", motion_name: "上段突きⅠ"},
{ motion_id: "4", motion_bukitype: "7", motion_name: "上段突きⅡ"},
{ motion_id: "5", motion_bukitype: "7", motion_name: "上段突きⅢ"},
{ motion_id: "6", motion_bukitype: "7", motion_name: "なぎ払いⅠ～Ⅲ"},
{ motion_id: "7", motion_bukitype: "7", motion_name: "ガード突き"},
{ motion_id: "8", motion_bukitype: "7", motion_name: "盾攻撃"},
{ motion_id: "9", motion_bukitype: "7", motion_name: "キャンセル突き"},
{ motion_id: "10", motion_bukitype: "7", motion_name: "カウンター突き"},
{ motion_id: "11", motion_bukitype: "7", motion_name: "飛び込み突き"},
{ motion_id: "12", motion_bukitype: "7", motion_name: "突進"},
{ motion_id: "13", motion_bukitype: "7", motion_name: "突進（加速1段階）"},
{ motion_id: "14", motion_bukitype: "7", motion_name: "突進（加速2段階）"},
{ motion_id: "15", motion_bukitype: "7", motion_name: "突進ジャンプ"},
{ motion_id: "16", motion_bukitype: "7", motion_name: "突進ジャンプ（加速1段階）"},
{ motion_id: "17", motion_bukitype: "7", motion_name: "突進ジャンプ（加速2段階）"},
{ motion_id: "18", motion_bukitype: "7", motion_name: "突進ジャンプ突き"},
{ motion_id: "19", motion_bukitype: "7", motion_name: "突進ジャンプ突き（加速1段階）"},
{ motion_id: "20", motion_bukitype: "7", motion_name: "突進ジャンプ突き（加速2段階）"},
{ motion_id: "21", motion_bukitype: "7", motion_name: "振り向き攻撃"},
{ motion_id: "22", motion_bukitype: "7", motion_name: "振り向き攻撃（加速1段階）"},
{ motion_id: "23", motion_bukitype: "7", motion_name: "振り向き攻撃（加速2段階）"},
{ motion_id: "24", motion_bukitype: "7", motion_name: "フィニッシュ突き"},
{ motion_id: "25", motion_bukitype: "7", motion_name: "フィニッシュ二段突き（加速1段階）"},
{ motion_id: "26", motion_bukitype: "7", motion_name: "フィニッシュ二段突き（加速2段階）"},
{ motion_id: "27", motion_bukitype: "7", motion_name: "ジャンプ突き"},
{ motion_id: "28", motion_bukitype: "7", motion_name: "ジャンプ突き（加速1段階）"},
{ motion_id: "29", motion_bukitype: "7", motion_name: "ジャンプ突き（加速2段階）"},
{ motion_id: "30", motion_bukitype: "7", motion_name: "乗り成功：フィニッシュ突き"},
{ motion_id: "0", motion_bukitype: "8", motion_name: "水平突きⅠ～Ⅲ"},
{ motion_id: "1", motion_bukitype: "8", motion_name: "ガード突きⅠ～Ⅲ"},
{ motion_id: "2", motion_bukitype: "8", motion_name: "踏み込み突き上げ"},
{ motion_id: "3", motion_bukitype: "8", motion_name: "斬り上げ"},
{ motion_id: "4", motion_bukitype: "8", motion_name: "叩きつけ"},
{ motion_id: "5", motion_bukitype: "8", motion_name: "なぎ払い"},
{ motion_id: "6", motion_bukitype: "8", motion_name: "ジャンプ突き"},
{ motion_id: "7", motion_bukitype: "8", motion_name: "ジャンプ叩きつけ"},
{ motion_id: "8", motion_bukitype: "8", motion_name: "ジャンプリロード叩きつけ"},
{ motion_id: "9", motion_bukitype: "8", motion_name: "ジャンプ斬り上げ"},
{ motion_id: "10", motion_bukitype: "8", motion_name: "駆け上がりなぎ払い"},
{ motion_id: "11", motion_bukitype: "8", motion_name: "砲撃"},
{ motion_id: "12", motion_bukitype: "8", motion_name: "溜め砲撃"},
{ motion_id: "13", motion_bukitype: "8", motion_name: "フルバースト（単発）"},
{ motion_id: "14", motion_bukitype: "8", motion_name: "フルバースト（全発）"},
{ motion_id: "15", motion_bukitype: "8", motion_name: "フルバースト（全発+1）"},
{ motion_id: "16", motion_bukitype: "8", motion_name: "竜撃砲"},
{ motion_id: "17", motion_bukitype: "8", motion_name: "竜杭砲"},
{ motion_id: "18", motion_bukitype: "8", motion_name: "乗り成功：フルバースト"},
{ motion_id: "19", motion_bukitype: "8", motion_name: "乗り成功：フルバースト(装填数+1)"},
{ motion_id: "0", motion_bukitype: "9", motion_name: "斧：横斬り"},
{ motion_id: "1", motion_bukitype: "9", motion_name: "斧：斬り上げ"},
{ motion_id: "2", motion_bukitype: "9", motion_name: "斧：縦斬り"},
{ motion_id: "3", motion_bukitype: "9", motion_name: "斧：突進斬り"},
{ motion_id: "4", motion_bukitype: "9", motion_name: "斧：斬り下がり"},
{ motion_id: "5", motion_bukitype: "9", motion_name: "斧：振り回し（右から）"},
{ motion_id: "6", motion_bukitype: "9", motion_name: "斧：振り回し（左から）"},
{ motion_id: "7", motion_bukitype: "9", motion_name: "斧：なぎ払い変形斬り"},
{ motion_id: "8", motion_bukitype: "9", motion_name: "斧：なぎ払い変形斬り(高出力)"},
{ motion_id: "9", motion_bukitype: "9", motion_name: "斧：ジャンプ斬り"},
{ motion_id: "10", motion_bukitype: "9", motion_name: "斧：ジャンプなぎ払い"},
{ motion_id: "11", motion_bukitype: "9", motion_name: "高出力状態の追撃"},
{ motion_id: "12", motion_bukitype: "9", motion_name: "斧：変形斬り"},
{ motion_id: "13", motion_bukitype: "9", motion_name: "剣：縦斬り"},
{ motion_id: "14", motion_bukitype: "9", motion_name: "剣：縦斬り(高出力)"},
{ motion_id: "15", motion_bukitype: "9", motion_name: "剣：右斬り上げ"},
{ motion_id: "16", motion_bukitype: "9", motion_name: "剣：右斬り上げ(高出力)"},
{ motion_id: "17", motion_bukitype: "9", motion_name: "剣：左斬り上げ"},
{ motion_id: "18", motion_bukitype: "9", motion_name: "剣：左斬り上げ(高出力)"},
{ motion_id: "19", motion_bukitype: "9", motion_name: "剣：二連斬り"},
{ motion_id: "20", motion_bukitype: "9", motion_name: "剣：二連斬り(高出力)"},
{ motion_id: "21", motion_bukitype: "9", motion_name: "剣：二連斬り(左斬り上げから派生)"},
{ motion_id: "22", motion_bukitype: "9", motion_name: "剣：二連斬り(高出力、左斬り上げ派生)"},
{ motion_id: "23", motion_bukitype: "9", motion_name: "剣：飛天連撃"},
{ motion_id: "24", motion_bukitype: "9", motion_name: "剣：飛天連撃(高出力)"},
{ motion_id: "25", motion_bukitype: "9", motion_name: "剣：変形斬り下がり"},
{ motion_id: "26", motion_bukitype: "9", motion_name: "属性解放突き(1～3ヒット目)"},
{ motion_id: "27", motion_bukitype: "9", motion_name: "属性解放突き(高出力、1～3ヒット目)"},
{ motion_id: "28", motion_bukitype: "9", motion_name: "属性解放突き(4～9ヒット目)"},
{ motion_id: "29", motion_bukitype: "9", motion_name: "属性解放突き(高出力、4～9ヒット目)"},
{ motion_id: "30", motion_bukitype: "9", motion_name: "属性解放突きフィニッシュ"},
{ motion_id: "31", motion_bukitype: "9", motion_name: "属性解放突きフィニッシュ(高出力)"},
{ motion_id: "32", motion_bukitype: "9", motion_name: "属性解放突きフィニッシュ(全ヒット)"},
{ motion_id: "33", motion_bukitype: "9", motion_name: "属性解放突きフィニッシュ(高出力、全ヒット)"},
{ motion_id: "34", motion_bukitype: "9", motion_name: "剣：簡易属性解放突きフィニッシュ"},
{ motion_id: "35", motion_bukitype: "9", motion_name: "剣：簡易属性解放突きフィニッシュ(高出力)"},
{ motion_id: "36", motion_bukitype: "9", motion_name: "剣：簡易属性解放突きフィニッシュ(全ヒット)"},
{ motion_id: "37", motion_bukitype: "9", motion_name: "剣：簡易属性解放突きフィニッシュ(高出力、全ヒット)"},
{ motion_id: "38", motion_bukitype: "9", motion_name: "零距離解放突き"},
{ motion_id: "39", motion_bukitype: "9", motion_name: "零距離解放突き(簡易)"},
{ motion_id: "40", motion_bukitype: "9", motion_name: "剣：ジャンプ斬り"},
{ motion_id: "41", motion_bukitype: "9", motion_name: "剣：ジャンプ斬り(高出力)"},
{ motion_id: "42", motion_bukitype: "9", motion_name: "剣：ジャンプ斬り上げ"},
{ motion_id: "43", motion_bukitype: "9", motion_name: "剣：ジャンプ斬り上げ(高出力)"},
{ motion_id: "44", motion_bukitype: "9", motion_name: "乗り成功：属性解放突き"},
{ motion_id: "45", motion_bukitype: "9", motion_name: "乗り成功：属性解放突き(高出力)"},
{ motion_id: "46", motion_bukitype: "9", motion_name: "乗り成功：属性解放突き(頭以外)"},
{ motion_id: "47", motion_bukitype: "9", motion_name: "乗り成功：属性解放突き(頭以外高出力)"},
{ motion_id: "0", motion_bukitype: "10", motion_name: "剣：牽制斬り"},
{ motion_id: "1", motion_bukitype: "10", motion_name: "剣：斬り返し"},
{ motion_id: "2", motion_bukitype: "10", motion_name: "剣：チャージ斬り返し"},
{ motion_id: "3", motion_bukitype: "10", motion_name: "剣：回転斬り"},
{ motion_id: "4", motion_bukitype: "10", motion_name: "斧：変形斬り"},
{ motion_id: "5", motion_bukitype: "10", motion_name: "剣：突進斬り"},
{ motion_id: "6", motion_bukitype: "10", motion_name: "剣：盾突き"},
{ motion_id: "7", motion_bukitype: "10", motion_name: "剣：移動斬り"},
{ motion_id: "8", motion_bukitype: "10", motion_name: "剣：溜め斬り上げ"},
{ motion_id: "9", motion_bukitype: "10", motion_name: "剣：溜め二連斬り"},
{ motion_id: "10", motion_bukitype: "10", motion_name: "剣：高圧属性斬り"},
{ motion_id: "11", motion_bukitype: "10", motion_name: "剣：ジャンプ斬り"},
{ motion_id: "12", motion_bukitype: "10", motion_name: "剣：ジャンプ斬り上げ"},
{ motion_id: "13", motion_bukitype: "10", motion_name: "剣：スライディング斬り"},
{ motion_id: "14", motion_bukitype: "10", motion_name: "剣：変形斬り"},
{ motion_id: "15", motion_bukitype: "10", motion_name: "斧：突進叩きつけ"},
{ motion_id: "16", motion_bukitype: "10", motion_name: "斧：斬り上げ"},
{ motion_id: "17", motion_bukitype: "10", motion_name: "斧：縦斬り"},
{ motion_id: "18", motion_bukitype: "10", motion_name: "斧：叩きつけ"},
{ motion_id: "19", motion_bukitype: "10", motion_name: "斧：ジャンプ斬り"},
{ motion_id: "20", motion_bukitype: "10", motion_name: "斧：属性解放斬りⅠ"},
{ motion_id: "21", motion_bukitype: "10", motion_name: "斧：属性解放斬りⅡ"},
{ motion_id: "22", motion_bukitype: "10", motion_name: "斧：高出力属性解放斬り"},
{ motion_id: "23", motion_bukitype: "10", motion_name: "乗り成功斧：高出力属性解放斬り"},
{ motion_id: "0", motion_bukitype: "10_3", motion_name: "剣：牽制斬り"},
{ motion_id: "1", motion_bukitype: "10_3", motion_name: "剣：斬り返し"},
{ motion_id: "2", motion_bukitype: "10_3", motion_name: "剣：チャージ斬り返し"},
{ motion_id: "3", motion_bukitype: "10_3", motion_name: "剣：回転斬り"},
{ motion_id: "4", motion_bukitype: "10_3", motion_name: "斧：変形斬り"},
{ motion_id: "5", motion_bukitype: "10_3", motion_name: "剣：突進斬り"},
{ motion_id: "6", motion_bukitype: "10_3", motion_name: "剣：盾突き"},
{ motion_id: "7", motion_bukitype: "10_3", motion_name: "剣：移動斬り"},
{ motion_id: "8", motion_bukitype: "10_3", motion_name: "剣：溜め斬り上げ"},
{ motion_id: "9", motion_bukitype: "10_3", motion_name: "剣：溜め二連斬り"},
{ motion_id: "10", motion_bukitype: "10_3", motion_name: "剣：高圧属性斬り"},
{ motion_id: "11", motion_bukitype: "10_3", motion_name: "剣：ジャンプ斬り"},
{ motion_id: "12", motion_bukitype: "10_3", motion_name: "剣：ジャンプ斬り上げ"},
{ motion_id: "13", motion_bukitype: "10_3", motion_name: "剣：スライディング斬り"},
{ motion_id: "14", motion_bukitype: "10_3", motion_name: "GP"},
{ motion_id: "15", motion_bukitype: "10_3", motion_name: "剣：変形斬り"},
{ motion_id: "16", motion_bukitype: "10_3", motion_name: "斧：突進叩きつけ"},
{ motion_id: "17", motion_bukitype: "10_3", motion_name: "斧：斬り上げ"},
{ motion_id: "18", motion_bukitype: "10_3", motion_name: "斧：縦斬り"},
{ motion_id: "19", motion_bukitype: "10_3", motion_name: "斧：叩きつけ"},
{ motion_id: "20", motion_bukitype: "10_3", motion_name: "斧：ジャンプ斬り"},
{ motion_id: "21", motion_bukitype: "10_3", motion_name: "斧：属性解放斬りⅠ"},
{ motion_id: "22", motion_bukitype: "10_3", motion_name: "斧：属性解放斬りⅡ"},
{ motion_id: "23", motion_bukitype: "10_3", motion_name: "斧：高出力属性解放斬り"},
{ motion_id: "24", motion_bukitype: "10_3", motion_name: "斧：超高出力属性解放斬り"},
{ motion_id: "25", motion_bukitype: "10_3", motion_name: "乗り成功斧：高出力属性解放斬り"},
{ motion_id: "0", motion_bukitype: "11", motion_name: "連続斬り上げ"},
{ motion_id: "1", motion_bukitype: "11", motion_name: "けさ斬り"},
{ motion_id: "2", motion_bukitype: "11", motion_name: "二段斬り"},
{ motion_id: "3", motion_bukitype: "11", motion_name: "飛び込み斬り"},
{ motion_id: "4", motion_bukitype: "11", motion_name: "叩きつけ"},
{ motion_id: "5", motion_bukitype: "11", motion_name: "突き"},
{ motion_id: "6", motion_bukitype: "11", motion_name: "なぎ払い"},
{ motion_id: "7", motion_bukitype: "11", motion_name: "回避斬り"},
{ motion_id: "8", motion_bukitype: "11", motion_name: "ジャンプ突進斬り"},
{ motion_id: "9", motion_bukitype: "11", motion_name: "ジャンプ斬り"},
{ motion_id: "10", motion_bukitype: "11", motion_name: "印当て"},
{ motion_id: "11", motion_bukitype: "11", motion_name: "猟虫"},
{ motion_id: "12", motion_bukitype: "11", motion_name: "粉塵爆発"},
{ motion_id: "13", motion_bukitype: "11", motion_name: "乗り時：飛び移り斬り"},
{ motion_id: "14", motion_bukitype: "11", motion_name: "乗り成功：連続斬り"},
{ motion_id: "15", motion_bukitype: "11", motion_name: "乗り成功：連続斬り(頭以外)"},
{ motion_id: "0", motion_bukitype: "11_1", motion_name: "強化連続斬り上げ"},
{ motion_id: "1", motion_bukitype: "11_1", motion_name: "強化けさ斬り"},
{ motion_id: "2", motion_bukitype: "11_1", motion_name: "強化二段斬り"},
{ motion_id: "3", motion_bukitype: "11_1", motion_name: "飛び込み斬り"},
{ motion_id: "4", motion_bukitype: "11_1", motion_name: "飛円斬り"},
{ motion_id: "5", motion_bukitype: "11_1", motion_name: "強化突き"},
{ motion_id: "6", motion_bukitype: "11_1", motion_name: "強化なぎ払い"},
{ motion_id: "7", motion_bukitype: "11_1", motion_name: "なぎ払いからの斬り上げ1ヒット目"},
{ motion_id: "8", motion_bukitype: "11_1", motion_name: "なぎ払いから斬り上げ"},
{ motion_id: "9", motion_bukitype: "11_1", motion_name: "回避斬り"},
{ motion_id: "10", motion_bukitype: "11_1", motion_name: "強化ジャンプ斬りｘnヒット"},
{ motion_id: "11", motion_bukitype: "11_1", motion_name: "強化ジャンプ突進斬り"},
{ motion_id: "12", motion_bukitype: "11_1", motion_name: "印当て"},
{ motion_id: "13", motion_bukitype: "11_1", motion_name: "猟虫"},
{ motion_id: "14", motion_bukitype: "11_1", motion_name: "粉塵爆発"},
{ motion_id: "15", motion_bukitype: "11_1", motion_name: "乗り時：飛び移り斬り"},
{ motion_id: "16", motion_bukitype: "11_1", motion_name: "乗り成功：連続斬り"},
{ motion_id: "17", motion_bukitype: "11_1", motion_name: "乗り成功：連続斬り(頭以外)"},
{ motion_id: "0", motion_bukitype: "12", motion_name: "起爆竜弾"},
{ motion_id: "1", motion_bukitype: "12", motion_name: "起爆竜弾2"},
{ motion_id: "2", motion_bukitype: "12", motion_name: "起爆竜弾3"},
{ motion_id: "3", motion_bukitype: "12", motion_name: "近接攻撃"},
{ motion_id: "4", motion_bukitype: "12", motion_name: "ジャンプ近接攻撃"},
{ motion_id: "5", motion_bukitype: "12", motion_name: "ジャンプリロード近接攻撃"},
{ motion_id: "6", motion_bukitype: "12", motion_name: "LV1通常弾"},
{ motion_id: "7", motion_bukitype: "12", motion_name: "LV2通常弾"},
{ motion_id: "8", motion_bukitype: "12", motion_name: "LV3通常弾"},
{ motion_id: "9", motion_bukitype: "12", motion_name: "LV1貫通弾"},
{ motion_id: "33", motion_bukitype: "12", motion_name: "LV1貫通弾(10ヒット目～)"},
{ motion_id: "10", motion_bukitype: "12", motion_name: "LV2貫通弾"},
{ motion_id: "34", motion_bukitype: "12", motion_name: "LV2貫通弾(10ヒット目～)"},
{ motion_id: "11", motion_bukitype: "12", motion_name: "LV3貫通弾"},
{ motion_id: "35", motion_bukitype: "12", motion_name: "LV3貫通弾(10ヒット目～)"},
{ motion_id: "12", motion_bukitype: "12", motion_name: "LV1散弾"},
{ motion_id: "13", motion_bukitype: "12", motion_name: "LV2散弾"},
{ motion_id: "14", motion_bukitype: "12", motion_name: "LV3散弾"},
{ motion_id: "15", motion_bukitype: "12", motion_name: "LV1徹甲榴弾"},
{ motion_id: "16", motion_bukitype: "12", motion_name: "LV2徹甲榴弾"},
{ motion_id: "17", motion_bukitype: "12", motion_name: "LV3徹甲榴弾"},
{ motion_id: "18", motion_bukitype: "12", motion_name: "火炎弾"},
{ motion_id: "19", motion_bukitype: "12", motion_name: "水冷弾"},
{ motion_id: "20", motion_bukitype: "12", motion_name: "電撃弾"},
{ motion_id: "21", motion_bukitype: "12", motion_name: "氷結弾"},
{ motion_id: "22", motion_bukitype: "12", motion_name: "滅龍弾"},
{ motion_id: "23", motion_bukitype: "12", motion_name: "斬裂弾"},
{ motion_id: "24", motion_bukitype: "12", motion_name: "LV1毒弾"},
{ motion_id: "25", motion_bukitype: "12", motion_name: "LV2毒弾"},
{ motion_id: "26", motion_bukitype: "12", motion_name: "LV1麻痺弾"},
{ motion_id: "27", motion_bukitype: "12", motion_name: "LV2麻痺弾"},
{ motion_id: "28", motion_bukitype: "12", motion_name: "LV1睡眠弾"},
{ motion_id: "29", motion_bukitype: "12", motion_name: "LV2睡眠弾"},
{ motion_id: "30", motion_bukitype: "12", motion_name: "LV1減気弾"},
{ motion_id: "31", motion_bukitype: "12", motion_name: "LV2減気弾"},
{ motion_id: "32", motion_bukitype: "12", motion_name: "乗り成功：連射"},
{ motion_id: "0", motion_bukitype: "13", motion_name: "機関竜弾"},
{ motion_id: "1", motion_bukitype: "13", motion_name: "狙撃竜弾"},
{ motion_id: "2", motion_bukitype: "13", motion_name: "狙撃竜弾(3ヒット目～)"},
{ motion_id: "3", motion_bukitype: "13", motion_name: "狙撃竜弾(5～7ヒット目)"},
{ motion_id: "4", motion_bukitype: "13", motion_name: "近接攻撃"},
{ motion_id: "5", motion_bukitype: "13", motion_name: "ジャンプ近接攻撃"},
{ motion_id: "6", motion_bukitype: "13", motion_name: "ジャンプリロード近接攻撃"},
{ motion_id: "7", motion_bukitype: "13", motion_name: "LV1通常弾"},
{ motion_id: "8", motion_bukitype: "13", motion_name: "LV2通常弾"},
{ motion_id: "9", motion_bukitype: "13", motion_name: "LV3通常弾"},
{ motion_id: "10", motion_bukitype: "13", motion_name: "LV1貫通弾"},
{ motion_id: "38", motion_bukitype: "13", motion_name: "LV1貫通弾(10ヒット目～)"},
{ motion_id: "11", motion_bukitype: "13", motion_name: "LV2貫通弾"},
{ motion_id: "39", motion_bukitype: "13", motion_name: "LV2貫通弾(10ヒット目～)"},
{ motion_id: "12", motion_bukitype: "13", motion_name: "LV3貫通弾"},
{ motion_id: "40", motion_bukitype: "13", motion_name: "LV3貫通弾(10ヒット目～)"},
{ motion_id: "13", motion_bukitype: "13", motion_name: "LV1散弾"},
{ motion_id: "14", motion_bukitype: "13", motion_name: "LV2散弾"},
{ motion_id: "15", motion_bukitype: "13", motion_name: "LV3散弾"},
{ motion_id: "16", motion_bukitype: "13", motion_name: "LV1徹甲榴弾"},
{ motion_id: "17", motion_bukitype: "13", motion_name: "LV2徹甲榴弾"},
{ motion_id: "18", motion_bukitype: "13", motion_name: "LV3徹甲榴弾"},
{ motion_id: "19", motion_bukitype: "13", motion_name: "LV1拡散弾ｘ3"},
{ motion_id: "20", motion_bukitype: "13", motion_name: "LV2拡散弾ｘ4"},
{ motion_id: "21", motion_bukitype: "13", motion_name: "LV3拡散弾ｘ5"},
{ motion_id: "22", motion_bukitype: "13", motion_name: "火炎弾"},
{ motion_id: "23", motion_bukitype: "13", motion_name: "水冷弾"},
{ motion_id: "24", motion_bukitype: "13", motion_name: "電撃弾"},
{ motion_id: "25", motion_bukitype: "13", motion_name: "氷結弾"},
{ motion_id: "26", motion_bukitype: "13", motion_name: "滅龍弾"},
{ motion_id: "27", motion_bukitype: "13", motion_name: "斬裂弾"},
{ motion_id: "28", motion_bukitype: "13", motion_name: "竜撃弾"},
{ motion_id: "29", motion_bukitype: "13", motion_name: "LV1毒弾"},
{ motion_id: "30", motion_bukitype: "13", motion_name: "LV2毒弾"},
{ motion_id: "31", motion_bukitype: "13", motion_name: "LV1麻痺弾"},
{ motion_id: "32", motion_bukitype: "13", motion_name: "LV2麻痺弾"},
{ motion_id: "33", motion_bukitype: "13", motion_name: "LV1睡眠弾"},
{ motion_id: "34", motion_bukitype: "13", motion_name: "LV2睡眠弾"},
{ motion_id: "35", motion_bukitype: "13", motion_name: "LV1減気弾"},
{ motion_id: "36", motion_bukitype: "13", motion_name: "LV2減気弾"},
{ motion_id: "37", motion_bukitype: "13", motion_name: "乗り成功：射撃"},
{ motion_id: "0", motion_bukitype: "14", motion_name: "ジャンプ近接攻撃"},
{ motion_id: "1", motion_bukitype: "14", motion_name: "飛び込み近接攻撃"},
{ motion_id: "2", motion_bukitype: "14", motion_name: "溜1"},
{ motion_id: "3", motion_bukitype: "14", motion_name: "溜2"},
{ motion_id: "4", motion_bukitype: "14", motion_name: "溜3"},
{ motion_id: "5", motion_bukitype: "14", motion_name: "溜4"},
{ motion_id: "6", motion_bukitype: "14", motion_name: "クイックショット"},
{ motion_id: "7", motion_bukitype: "14", motion_name: "剛射：溜2"},
{ motion_id: "8", motion_bukitype: "14", motion_name: "剛射：溜3"},
{ motion_id: "9", motion_bukitype: "14", motion_name: "剛射：溜4"},
{ motion_id: "10", motion_bukitype: "14", motion_name: "竜の一矢：溜1"},
{ motion_id: "11", motion_bukitype: "14", motion_name: "竜の一矢：溜1(10ヒット目～)"},
{ motion_id: "12", motion_bukitype: "14", motion_name: "竜の一矢：溜1(25ヒット目～)"},
{ motion_id: "13", motion_bukitype: "14", motion_name: "竜の一矢：溜2"},
{ motion_id: "14", motion_bukitype: "14", motion_name: "竜の一矢：溜2(10ヒット目～)"},
{ motion_id: "15", motion_bukitype: "14", motion_name: "竜の一矢：溜2(25ヒット目～)"},
{ motion_id: "16", motion_bukitype: "14", motion_name: "竜の一矢：溜3"},
{ motion_id: "17", motion_bukitype: "14", motion_name: "竜の一矢：溜3(10ヒット目～)"},
{ motion_id: "18", motion_bukitype: "14", motion_name: "竜の一矢：溜3(25ヒット目～)"},
{ motion_id: "19", motion_bukitype: "14", motion_name: "竜の一矢：溜4"},
{ motion_id: "20", motion_bukitype: "14", motion_name: "竜の一矢：溜4(10ヒット目～)"},
{ motion_id: "21", motion_bukitype: "14", motion_name: "竜の一矢：溜4(25ヒット目～)"},
{ motion_id: "22", motion_bukitype: "14", motion_name: "駆け上がり射撃"},
{ motion_id: "23", motion_bukitype: "14", motion_name: "駆け上がり射撃(溜め段階+1)"},
{ motion_id: "24", motion_bukitype: "14", motion_name: "溜1：曲射"},
{ motion_id: "25", motion_bukitype: "14", motion_name: "溜2：曲射"},
{ motion_id: "26", motion_bukitype: "14", motion_name: "溜3：曲射"},
{ motion_id: "27", motion_bukitype: "14", motion_name: "溜4：曲射"},
{ motion_id: "28", motion_bukitype: "14", motion_name: "乗り成功：溜め射ち溜1"},
{ motion_id: "29", motion_bukitype: "14", motion_name: "乗り成功：溜め射ち溜2"},
{ motion_id: "30", motion_bukitype: "14", motion_name: "乗り成功：溜め射ち溜3"},
{ motion_id: "31", motion_bukitype: "14", motion_name: "乗り成功：溜め射ち溜4"},
{ motion_id: "0", motion_bukitype: "15", motion_name: "捕獲用ネット"},
{ motion_id: "1", motion_bukitype: "15", motion_name: "石ころ"},
{ motion_id: "2", motion_bukitype: "15", motion_name: "スリンガーこやし弾"},
{ motion_id: "3", motion_bukitype: "15", motion_name: "ツブテの実"},
{ motion_id: "4", motion_bukitype: "15", motion_name: "はじけクルミ"},
{ motion_id: "5", motion_bukitype: "15", motion_name: "はじけクルミ(落下)"},
{ motion_id: "6", motion_bukitype: "15", motion_name: "はじけクルミ(弾け部分)"},
{ motion_id: "7", motion_bukitype: "15", motion_name: "ハジケ結晶"},
{ motion_id: "8", motion_bukitype: "15", motion_name: "スリンガー貫通弾"},
{ motion_id: "9", motion_bukitype: "15", motion_name: "スリンガー水流弾"},
{ motion_id: "10", motion_bukitype: "15", motion_name: "スリンガー松明弾(着弾)"},
{ motion_id: "11", motion_bukitype: "15", motion_name: "スリンガー松明弾(設置火)"},
{ motion_id: "12", motion_bukitype: "15", motion_name: "スリンガー着撃弾"},
{ motion_id: "13", motion_bukitype: "15", motion_name: "スリンガー爆発弾"},
{ motion_id: "14", motion_bukitype: "15", motion_name: "スリンガー滅龍弾"},
{ motion_id: "15", motion_bukitype: "15", motion_name: "スリンガーこやし弾"},
{ motion_id: "16", motion_bukitype: "15", motion_name: "ブーメラン"},
{ motion_id: "17", motion_bukitype: "15", motion_name: "ブーメラン(2ヒット目～)"},
{ motion_id: "18", motion_bukitype: "15", motion_name: "ヒカリゴケ"},
{ motion_id: "19", motion_bukitype: "15", motion_name: "投げナイフ"},
{ motion_id: "20", motion_bukitype: "15", motion_name: "バリスタの弾"},
{ motion_id: "21", motion_bukitype: "15", motion_name: "大砲の弾"},
{ motion_id: "22", motion_bukitype: "15", motion_name: "小タル爆弾"},
{ motion_id: "23", motion_bukitype: "15", motion_name: "打上げタル爆弾"},
{ motion_id: "24", motion_bukitype: "15", motion_name: "打上げタル爆弾Ｇ"},
{ motion_id: "25", motion_bukitype: "15", motion_name: "大タル爆弾"},
{ motion_id: "26", motion_bukitype: "15", motion_name: "大タル爆弾Ｇ"},
{ motion_id: "27", motion_bukitype: "15", motion_name: "FFｘIVジャンプ"},
{ motion_id: "28", motion_bukitype: "15", motion_name: "FFｘIVジャンプ(Eメテオ回避時)"},
{ motion_id: "29", motion_bukitype: "15", motion_name: "ハンターのルーン石"},
{ motion_id: "30", motion_bukitype: "15", motion_name: "イグニの印"},
{ motion_id: "31", motion_bukitype: "15", motion_name: "SFⅤ昇竜拳"},
{ motion_id: "32", motion_bukitype: "15", motion_name: "SFⅤ波動拳"},
{ motion_id: "33", motion_bukitype: "15", motion_name: "DMC2丁拳銃"},
{ motion_id: "34", motion_bukitype: "15", motion_name: "噴出花火【豊穣】"},
{ motion_id: "35", motion_bukitype: "15", motion_name: "打上花火【納涼】"},
{ motion_id: "36", motion_bukitype: "15", motion_name: "打上花火【開花】"},
{ motion_id: "37", motion_bukitype: "15", motion_name: "打上花火【煌めき】"},
{ motion_id: "38", motion_bukitype: "15", motion_name: "打上花火【感謝】"},
{ motion_id: "39", motion_bukitype: "15", motion_name: "落石"},
{ motion_id: "40", motion_bukitype: "15", motion_name: "撃龍槍"},
{ motion_id: "41", motion_bukitype: "15", motion_name: "古代樹の土石流"},
{ motion_id: "42", motion_bukitype: "15", motion_name: "流砂の地盤"},
{ motion_id: "43", motion_bukitype: "15", motion_name: "瘴気の谷1の落石"},
{ motion_id: "44", motion_bukitype: "15", motion_name: "噴火"},
{ motion_id: "45", motion_bukitype: "15", motion_name: "サボテンダー"},
{ motion_id: "46", motion_bukitype: "15", motion_name: "ガジャブーの大ホウゲキ"}
];



//武器が選択された時#motionにモーションを追加
function mo(){
var select_name_t = $('select[name="t"]').val();//武器種
var select_name_motion = $('select#motion');//武器モーション
var select_name_tati = $('select#tati').val();//太刀
var select_name_kizin = $('select#kizin').val();//鬼人化
var select_name_tyaz = $('select#tyaz').val();//チャアク
var select_name_musi = $('select#musi').val();//操虫棍
var select_name_sup = $('select#sup').val();//操虫棍


	$('select#motion option').remove();//武器変更を繰り返すと増えていくので一旦武器を全て消去

$.each(motions,
	function(index, mot){


if(select_name_t == 1){
if(mot.motion_bukitype != "1") return true;

}else if(select_name_t == 2 && select_name_tati == 4){
if(mot.motion_bukitype != "2_1") return true;

}else if(select_name_t == 2){
if(mot.motion_bukitype != "2") return true;

}else if(select_name_t == 3){
if(mot.motion_bukitype != "3") return true;

}else if(select_name_t == 4 && select_name_kizin == 1){
if(mot.motion_bukitype != "4_1") return true;

}else if(select_name_t == 4 && select_name_kizin == 2){
if(mot.motion_bukitype != "4_2") return true;

}else if(select_name_t == 4 && select_name_kizin == 3){
if(mot.motion_bukitype != "4_3") return true;

}else if(select_name_t == 4){
if(mot.motion_bukitype != "4") return true;

}else if(select_name_t == 5){
if(mot.motion_bukitype != "5") return true;

}else if(select_name_t == 6){
if(mot.motion_bukitype != "6") return true;

}else if(select_name_t == 7){
if(mot.motion_bukitype != "7") return true;

}else if(select_name_t == 8){
if(mot.motion_bukitype != "8") return true;

}else if(select_name_t == 9){
if(mot.motion_bukitype != "9") return true;

}else if(select_name_t == 10 && select_name_tyaz == 1){
if(mot.motion_bukitype != "10_1") return true;

}else if(select_name_t == 10 && select_name_tyaz == 2){
if(mot.motion_bukitype != "10_1") return true;

}else if(select_name_t == 10 && select_name_tyaz == 3){
if(mot.motion_bukitype != "10_3") return true;

}else if(select_name_t == 10 && select_name_tyaz == 4){
if(mot.motion_bukitype != "10_4") return true;

}else if(select_name_t == 10){
if(mot.motion_bukitype != "10") return true;

}else if(select_name_t == 11 && select_name_musi > 0){
if(mot.motion_bukitype != "11_1") return true;

}else if(select_name_t == 11){
if(mot.motion_bukitype != "11") return true;

}else if(select_name_t == 12){
if(mot.motion_bukitype != "12") return true;

}else if(select_name_t == 13){
if(mot.motion_bukitype != "13") return true;

}else if(select_name_t == 14){
if(mot.motion_bukitype != "14") return true;

}else if(select_name_t == 15 && select_name_sup == 9){
if(mot.motion_bukitype != "15_2") return true;

}else if(select_name_t == 15 && select_name_sup == 4){
if(mot.motion_bukitype != "15_1") return true;

}else if(select_name_t == 15 && select_name_sup == 5){
if(mot.motion_bukitype != "15_1") return true;

}else if(select_name_t == 15 && select_name_sup == 7){
if(mot.motion_bukitype != "15_1") return true;

}else if(select_name_t == 15){
if(mot.motion_bukitype != "15") return true;

}else{
return false;
}


	select_name_motion.append('<option value="' + mot.motion_id + '">' + mot.motion_name);


	}
)
};



$("select#t").change(function(){
mo();
$('select#mul2 option').remove();
$('#mul').val("");
});

$("select#kizin").change(function(){
mo();
if($('select#t').val() == 4){
$('select#mul2 option').remove();
$('#mul').val("");
}
});

$("select#tyaz").change(function(){
mo();
if($('select#t').val() == 10){
$('select#mul2 option').remove();
$('#mul').val("");
}
});

$("select#musi").change(function(){
mo();
if($('select#t').val() == 11){
$('select#mul2 option').remove();
$('#mul').val("");
}
});

$("select#sup").change(function(){
mo();
if($('select#t').val() == 15){
$('select#mul2 option').remove();
$('#mul').val("");
}
});



//追加する
$("#add").click(function(){

var a = $("#motion").val();
var b = $("#motion option:selected").text();

var mul2_count = $('#mul2').children().length;


if(mul2_count < 5){

$("#mul2").append('<option value="' + a + '">' + b);


var str = "";

var obj = jQuery('#mul2').children();
for( var i=0; i<obj.length; i++ ){
str +=  obj.eq(i).val() + "_";
}

var str = str.slice(0,-1);

$("#mul").val(str);

}


});




//削除
$("#delete").click(function(){

var v = $("#mul2").prop("selectedIndex");
v = v + 1;

$('select#mul2 option:nth-child(' + v + ')').remove();

var str = "";

var obj = jQuery('#mul2').children();
for( var i=0; i<obj.length; i++ ){
str +=  obj.eq(i).val() + "_";
}

var str = str.slice(0,-1);

$("#mul").val(str);

});



//読み込んだ時、mulからmul2を作る
$(window).load(function(){

mo();


var maker = $("#mul").val();
var makers = maker.split("_");

var array_mh = [];

   var obj = jQuery('#motion').children();
    for( var i=0; i<obj.length; i++ ){
        array_mh[obj.eq(i).val()] = obj.eq(i).text();
    }


if(array_mh[makers[0]] != null && makers[0] != null){
$("#mul2").append('<option value="' + makers[0] + '">' + array_mh[makers[0]]);
}

if(array_mh[makers[1]] != null && makers[1] != null){
$("#mul2").append('<option value="' + makers[1] + '">' + array_mh[makers[1]]);
}

if(array_mh[makers[2]] != null && makers[2] != null){
$("#mul2").append('<option value="' + makers[2] + '">' + array_mh[makers[2]]);
}

if(array_mh[makers[3]] != null && makers[3] != null){
$("#mul2").append('<option value="' + makers[3] + '">' + array_mh[makers[3]]);
}

if(array_mh[makers[4]] != null && makers[4] != null){
$("#mul2").append('<option value="' + makers[4] + '">' + array_mh[makers[4]]);
}

});



//全消し
$("#all_delete").click(function(){
$('select#mul2 option').remove();
$('#mul').val("");
});

var nikusitus = [

{ niku_id: "", niku_number: "1", niku_place: "1", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "1" , niku_place: "1", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "10", niku_place: "10", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "頭(泥纏い時)" },
{ niku_id: "2", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "4", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "胴(泥纏い時)" },
{ niku_id: "5", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "6", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "ヒレ" },
{ niku_id: "7", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "8", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "脚(泥纏い時)" },
{ niku_id: "9", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "10", niku_number: "10" , niku_place: "10", niku_name: "OFF", monster_name: "尻尾(泥纏い時)" },
{ niku_id: "", niku_number: "11", niku_place: "11", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "頭(泥纏い時)" },
{ niku_id: "2", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "胴(泥纏い時)" },
{ niku_id: "4", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "前脚(泥纏い時)" },
{ niku_id: "6", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "7", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "後脚(泥纏い時)" },
{ niku_id: "8", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "9", niku_number: "11" , niku_place: "11", niku_name: "OFF", monster_name: "尻尾(泥纏い時)" },
{ niku_id: "", niku_number: "12", niku_place: "12", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "頭上部" },
{ niku_id: "1", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "頭下部" },
{ niku_id: "2", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "頭下部(破壊後)" },
{ niku_id: "3", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "首上部" },
{ niku_id: "4", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "首下部" },
{ niku_id: "5", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "6", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "7", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "8", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "9", niku_number: "12" , niku_place: "12", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "13", niku_place: "13", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "2", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "首背中" },
{ niku_id: "3", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "腰" },
{ niku_id: "4", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "13" , niku_place: "13", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "13", niku_place: "13_1", niku_name: "ON", monster_name: "膨張時" },
{ niku_id: "0", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "2", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "首背中" },
{ niku_id: "3", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "腰" },
{ niku_id: "4", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "13" , niku_place: "13_1", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "14", niku_place: "14", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "鼻" },
{ niku_id: "2", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "4", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "5", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "脚(破壊後)" },
{ niku_id: "6", niku_number: "14" , niku_place: "14", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "14", niku_place: "14_i1", niku_name: "ON", monster_name: "怒り時" },
{ niku_id: "0", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "鼻" },
{ niku_id: "2", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "4", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "脚(破壊後)" },
{ niku_id: "7", niku_number: "14" , niku_place: "14_i1", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "15", niku_place: "15", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "頭(骨)" },
{ niku_id: "2", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "4", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "胴(骨)" },
{ niku_id: "5", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "脚(骨)" },
{ niku_id: "7", niku_number: "15" , niku_place: "15", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "16", niku_place: "16", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "16" , niku_place: "16", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "16" , niku_place: "16", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "17", niku_place: "17", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "腹(満腹時)" },
{ niku_id: "4", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "5", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "6", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "7", niku_number: "17" , niku_place: "17", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "18", niku_place: "18", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "18" , niku_place: "18", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "19", niku_place: "19", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "6", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "7", niku_number: "19" , niku_place: "19", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "2", niku_place: "2", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "2" , niku_place: "2", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "20", niku_place: "20", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "7", niku_number: "20" , niku_place: "20", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "21", niku_place: "21", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "角" },
{ niku_id: "1", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "角(破壊後)" },
{ niku_id: "2", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "3", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "頭(白棘時)" },
{ niku_id: "4", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "頭(黒棘時)" },
{ niku_id: "5", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "6", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "7", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "8", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "翼(白棘時)" },
{ niku_id: "9", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "翼(黒棘時)" },
{ niku_id: "10", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "11", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "前脚(白棘時)" },
{ niku_id: "12", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "前脚(黒棘時)" },
{ niku_id: "13", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "14", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "15", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "16", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "尻尾先(白棘時)" },
{ niku_id: "17", niku_number: "21" , niku_place: "21", niku_name: "OFF", monster_name: "尻尾先(黒棘時)" },
{ niku_id: "", niku_number: "22", niku_place: "22", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "排熱器官" },
{ niku_id: "1", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "排熱器官(破壊後)" },
{ niku_id: "2", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "3", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "4", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "5", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "胸(破壊後)" },
{ niku_id: "6", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "7", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "8", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "9", niku_number: "22" , niku_place: "22", niku_name: "OFF", monster_name: "未発達外殻" },
{ niku_id: "", niku_number: "23", niku_place: "23", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "23" , niku_place: "23", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "23" , niku_place: "23", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "24", niku_place: "24", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "24" , niku_place: "24", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "24" , niku_place: "24", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "25", niku_place: "25", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "25" , niku_place: "25", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "25" , niku_place: "25", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "26", niku_place: "26", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "26" , niku_place: "26", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "27", niku_place: "27", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "27" , niku_place: "27", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "28", niku_place: "28", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "頭溜め1" },
{ niku_id: "2", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "頭溜め2" },
{ niku_id: "3", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "首" },
{ niku_id: "4", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "首溜め1" },
{ niku_id: "5", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "首溜め2" },
{ niku_id: "6", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "7", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "8", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "9", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "10", niku_number: "28" , niku_place: "28", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "29", niku_place: "29", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "29" , niku_place: "29", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "29" , niku_place: "29", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "3", niku_place: "3", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "角" },
{ niku_id: "1", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "2", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "4", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "5", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "6", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "7", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "8", niku_number: "3" , niku_place: "3", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "30", niku_place: "30", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "30" , niku_place: "30", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "30" , niku_place: "30", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "31", niku_place: "31", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "31" , niku_place: "31", niku_name: "OFF", monster_name: "角" },
{ niku_id: "1", niku_number: "31" , niku_place: "31", niku_name: "OFF", monster_name: "角以外" },
{ niku_id: "", niku_number: "32", niku_place: "32", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "32" , niku_place: "32", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "32" , niku_place: "32", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "33", niku_place: "33", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "33" , niku_place: "33", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "33" , niku_place: "33", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "36", niku_place: "36", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "36" , niku_place: "36", niku_name: "OFF", monster_name: "全身" },
{ niku_id: "", niku_number: "37", niku_place: "37", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "37" , niku_place: "37", niku_name: "OFF", monster_name: "全身" },
{ niku_id: "", niku_number: "38", niku_place: "38", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "38" , niku_place: "38", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "38" , niku_place: "38", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "39", niku_place: "39", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "39" , niku_place: "39", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "39" , niku_place: "39", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "4", niku_place: "4", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "膨張部分" },
{ niku_id: "3", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "4", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "5", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "6", niku_number: "4" , niku_place: "4", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "40", niku_place: "40", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "40" , niku_place: "40", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "40" , niku_place: "40", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "41", niku_place: "41", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "41" , niku_place: "41", niku_name: "OFF", monster_name: "本体" },
{ niku_id: "", niku_number: "42", niku_place: "42", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "42" , niku_place: "42", niku_name: "OFF", monster_name: "本体" },
{ niku_id: "", niku_number: "43", niku_place: "43", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "43" , niku_place: "43", niku_name: "OFF", monster_name: "本体" },
{ niku_id: "", niku_number: "44", niku_place: "44", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "44" , niku_place: "44", niku_name: "OFF", monster_name: "本体" },
{ niku_id: "", niku_number: "45", niku_place: "45", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "45" , niku_place: "45", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "45" , niku_place: "45", niku_name: "OFF", monster_name: "上半身" },
{ niku_id: "2", niku_number: "45" , niku_place: "45", niku_name: "OFF", monster_name: "上半身(雷纏い時)" },
{ niku_id: "3", niku_number: "45" , niku_place: "45", niku_name: "OFF", monster_name: "下半身" },
{ niku_id: "4", niku_number: "45" , niku_place: "45", niku_name: "OFF", monster_name: "下半身(雷纏い時)" },
{ niku_id: "", niku_number: "46", niku_place: "46", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "頭(破壊後)" },
{ niku_id: "2", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "4", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "5", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "腹(破壊後)" },
{ niku_id: "6", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "7", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "背中(破壊後)" },
{ niku_id: "8", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "9", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "10", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "前脚(破壊後)" },
{ niku_id: "11", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "12", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "13", niku_number: "46" , niku_place: "46", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "47", niku_place: "47", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "47" , niku_place: "47", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "47" , niku_place: "47", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "2", niku_number: "47" , niku_place: "47", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "3", niku_number: "47" , niku_place: "47", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "4", niku_number: "47" , niku_place: "47", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "47" , niku_place: "47", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "48", niku_place: "48", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "頭破壊後" },
{ niku_id: "2", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "4", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "背中腰" },
{ niku_id: "5", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "6", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "翼破壊後" },
{ niku_id: "7", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "8", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "前脚破壊後" },
{ niku_id: "9", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "10", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "11", niku_number: "48" , niku_place: "48", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "48", niku_place: "48_1", niku_name: "ON", monster_name: "臨界状態" },
{ niku_id: "0", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "3", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "背中腰" },
{ niku_id: "4", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "6", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "7", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "8", niku_number: "48" , niku_place: "48_1", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "49", niku_place: "49", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "49" , niku_place: "49", niku_name: "OFF", monster_name: "全身" },
{ niku_id: "", niku_number: "5", niku_place: "5", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "5" , niku_place: "5", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "50", niku_place: "50", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "角" },
{ niku_id: "1", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "2", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "首" },
{ niku_id: "3", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "4", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "5", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "6", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "7", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "8", niku_number: "50" , niku_place: "50", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "51", niku_place: "51", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "7", niku_number: "51" , niku_place: "51", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "52", niku_place: "52", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "5", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "6", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "7", niku_number: "52" , niku_place: "52", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "53", niku_place: "53", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "53" , niku_place: "53", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "53" , niku_place: "53", niku_name: "OFF", monster_name: "体" },
{ niku_id: "", niku_number: "54", niku_place: "54", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "54" , niku_place: "54", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "54" , niku_place: "54", niku_name: "OFF", monster_name: "体" },
{ niku_id: "", niku_number: "55", niku_place: "55", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "55" , niku_place: "55", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "55" , niku_place: "55", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "", niku_number: "56", niku_place: "56", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "頭(赤熱)" },
{ niku_id: "2", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "頭(破壊後)" },
{ niku_id: "3", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "4", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "5", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "胴(赤熱)" },
{ niku_id: "6", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "前脚(露出部分)" },
{ niku_id: "7", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "8", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "前脚(赤熱)" },
{ niku_id: "9", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "10", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "11", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "尻尾(赤熱)" },
{ niku_id: "12", niku_number: "56" , niku_place: "56", niku_name: "OFF", monster_name: "内部(胴)" },
{ niku_id: "", niku_number: "56", niku_place: "56_1", niku_name: "ON", monster_name: "パージ後" },
{ niku_id: "0", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "胸" },
{ niku_id: "2", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "56" , niku_place: "56_1", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "57", niku_place: "57", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "3", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "4", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "5", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "6", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "7", niku_number: "57" , niku_place: "57", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "58", niku_place: "58", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "角" },
{ niku_id: "2", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "角(一段階破壊)" },
{ niku_id: "3", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "4", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "上腕" },
{ niku_id: "5", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "上半身" },
{ niku_id: "6", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "腹腰" },
{ niku_id: "7", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "後脚" },
{ niku_id: "8", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "9", niku_number: "58" , niku_place: "58", niku_name: "OFF", monster_name: "尻尾先" },
{ niku_id: "", niku_number: "59", niku_place: "59", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "59" , niku_place: "59", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "59" , niku_place: "59", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "2", niku_number: "59" , niku_place: "59", niku_name: "OFF", monster_name: "腕" },
{ niku_id: "3", niku_number: "59" , niku_place: "59", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "", niku_number: "6", niku_place: "6", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "6" , niku_place: "6", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "6" , niku_place: "6", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "2", niku_number: "6" , niku_place: "6", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "6" , niku_place: "6", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "60", niku_place: "60", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "60" , niku_place: "60", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "60" , niku_place: "60", niku_name: "OFF", monster_name: "頭(特殊)" },
{ niku_id: "2", niku_number: "60" , niku_place: "60", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "60" , niku_place: "60", niku_name: "OFF", monster_name: "腕" },
{ niku_id: "4", niku_number: "60" , niku_place: "60", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "", niku_number: "7", niku_place: "7", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "7" , niku_place: "7", niku_name: "OFF", monster_name: "触覚" },
{ niku_id: "1", niku_number: "7" , niku_place: "7", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "2", niku_number: "7" , niku_place: "7", niku_name: "OFF", monster_name: "前脚" },
{ niku_id: "3", niku_number: "7" , niku_place: "7", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "4", niku_number: "7" , niku_place: "7", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "8", niku_place: "8", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "8" , niku_place: "8", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "8" , niku_place: "8", niku_name: "OFF", monster_name: "首" },
{ niku_id: "2", niku_number: "8" , niku_place: "8", niku_name: "OFF", monster_name: "胴" },
{ niku_id: "3", niku_number: "8" , niku_place: "8", niku_name: "OFF", monster_name: "翼" },
{ niku_id: "4", niku_number: "8" , niku_place: "8", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "5", niku_number: "8" , niku_place: "8", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "", niku_number: "9", niku_place: "9", niku_name: "ON", monster_name: "肉質" },
{ niku_id: "0", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "頭" },
{ niku_id: "1", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "頭(破壊後)" },
{ niku_id: "2", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "頭(赤熱時)" },
{ niku_id: "3", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "首" },
{ niku_id: "4", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "腹" },
{ niku_id: "5", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "背中" },
{ niku_id: "6", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "背中(破壊後)" },
{ niku_id: "7", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "背中(赤熱時)" },
{ niku_id: "8", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "ヒレ" },
{ niku_id: "9", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "脚" },
{ niku_id: "10", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "脚(破壊後)" },
{ niku_id: "11", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "脚(赤熱時)" },
{ niku_id: "12", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "尻尾" },
{ niku_id: "13", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "尻尾(破壊後)" },
{ niku_id: "14", niku_number: "9" , niku_place: "9", niku_name: "OFF", monster_name: "尻尾(赤熱時)" }
];



//モンスターが選択された時、肉質名称を表示
$("select#mon").change(function(){

$("#mb").val("");
$("#mu").val("");

var select_name_mon = $("select#mon").val();
var select_name_monster = $("select#monster");


$("select#monster option").remove();//変更を繰り返すと増えていくのでここで全て消去

$.each(nikusitus,
	function(index, nik){

if(nik.niku_number == select_name_mon){
	if(nik.niku_name == "ON"){
	select_name_monster.append('<option value="'+ nik.niku_id +'" class="buki_css">' + nik.monster_name);
	}else{
	select_name_monster.append('<option value="'+ nik.niku_id + ',' + nik.niku_place + '">' + nik.monster_name);
	}
}

	}
);


});


//肉質が選択された時、valueに値を入れる
$("select#monster").change(function(){
$("#mb").val("");
$("#mu").val("");

var select_name_monster_val = $("select#monster").val();
var select_name_mon_val = $("select#mon").val();

var select_name_monster_val_ar = select_name_monster_val.split(",");

$.each(nikusitus,
	function(index, nik){

if(nik.niku_id == select_name_monster_val_ar[0] && nik.niku_place == select_name_monster_val_ar[1] && select_name_mon_val == nik.niku_number && nik.niku_name == "OFF"){
$("#mb").val(nik.niku_id);
$("#mu").val(nik.niku_place);
}

	}
);


});



//読み込んだ時、mbとmuから肉質を作る
$(window).load(function(){

var select_name_mon_val = $("select#mon").val();
var select_name_monster = $("select#monster");
var mb = $("#mb").val();
var mu = $("#mu").val();


$.each(nikusitus,
	function(index, nik){

if(nik.niku_number == select_name_mon_val){
	if(nik.niku_name == "ON"){
	select_name_monster.append('<option value="'+ nik.niku_id +'" class="buki_css">' + nik.monster_name);
	}else if(mb == nik.niku_id && mu == nik.niku_place && nik.niku_number == select_name_mon_val){
	select_name_monster.append('<option value="'+ nik.niku_id + ',' + nik.niku_place + '" selected>' + nik.monster_name);
	}else{
	select_name_monster.append('<option value="'+ nik.niku_id + ',' + nik.niku_place + '">' + nik.monster_name);
	}
}

	}
);




});






//モンスターが選択された時
$('#mon').change(function(){var monster_status14 = {
140000: {quest :"ベータ版", hp :"2990", hph :"1", def :"1", hosoku :"縄張り争いのダメージ598と基準体力から推測"},
140001: {quest :"ベータ版マルチ", hp :"7774", hph :"2.6", def :"1", hosoku :"縄張り争いのダメージ1554と基準体力から推測　マルチ補正2.6"},
140200: {quest :"★2イベント：大食らい共が参る！", hp :"2362", hph :"0.79", def :"1", hosoku :"落石のダメージ118と基準体力から推測"},
140400: {quest :"★4闘技場", hp :"3348", hph :"1.12", def :"1", hosoku :"落石のダメージ167　実測値"},
140401: {quest :"★4闘技場", hp :"3438", hph :"1.15", def :"1", hosoku :"落石のダメージ172　実測値"},
140402: {quest :"★4闘技場", hp :"3528", hph :"1.18", def :"1", hosoku :"落石のダメージ176と基準体力から推測"},
140403: {quest :"★4闘技場", hp :"3617", hph :"1.21", def :"1", hosoku :"落石のダメージ181　実測値"},
140404: {quest :"★4闘技場", hp :"3707", hph :"1.24", def :"1", hosoku :"落石のダメージ185　実測値"},
140410: {quest :"★4イベント：暴れん坊、早起きして散歩する", hp :"2362", hph :"0.79", def :"1", hosoku :"落石のダメージ118と基準体力から推測"},
140600: {quest :"★6闘技場", hp :"5501", hph :"1.84", def :"1", hosoku :"落石のダメージ275と基準体力から推測"},
140601: {quest :"★6闘技場", hp :"5591", hph :"1.87", def :"1", hosoku :"落石のダメージ280と基準体力から推測"},
140602: {quest :"★6闘技場", hp :"5681", hph :"1.9", def :"1", hosoku :"落石のダメージ284と基準体力から推測"},
140603: {quest :"★6闘技場", hp :"5770", hph :"1.93", def :"1", hosoku :"落石のダメージ289と基準体力から推測"},
140604: {quest :"★6闘技場", hp :"5860", hph :"1.96", def :"1", hosoku :"落石のダメージ293と基準体力から推測"},
140610: {quest :"★6イベント：試練", hp :"5681", hph :"1.9", def :"1", hosoku :"落石のダメージ284と基準体力から推測"},
140700: {quest :"★7イベント：新緑のブルース", hp :"3169", hph :"1.06", def :"1", hosoku :"落石のダメージ158と基準体力から推測"},
140750: {quest :"★7チャレンジ：森に潜む者達", hp :"5232", hph :"1.75", def :"1", hosoku :"落石のダメージ262と基準体力から推測"},
140900: {quest :"★9イベント：調査（蛮顎竜、蒼火竜）", hp :"4245", hph :"1.42", def :"1", hosoku :"落石のダメージ212と基準体力から推測"}
};
var monster_status13 = {
130700: {quest :"★7フリー", hp :"8624", hph :"1.96", def :"1", hosoku :"落石のダメージ431と基準体力から推測"},
130701: {quest :"★7フリー", hp :"8756", hph :"1.99", def :"1", hosoku :"落石のダメージ438と基準体力から推測"},
130702: {quest :"★7フリー", hp :"8888", hph :"2.02", def :"1", hosoku :"落石のダメージ444と基準体力から推測"},
130703: {quest :"★7フリー", hp :"9020", hph :"2.05", def :"1", hosoku :"落石のダメージ451と基準体力から推測"},
130704: {quest :"★7フリー", hp :"9152", hph :"2.08", def :"1", hosoku :"落石のダメージ458と基準体力から推測"},
130800: {quest :"★9イベント：軽やかで恐ろしく、そして熱く", hp :"5324", hph :"1.21", def :"1", hosoku :"落石のダメージ266と基準体力から推測"},
130900: {quest :"★9イベント：脈打て本能", hp :"14740", hph :"3.35", def :"1", hosoku :"落石のダメージ737と基準体力から推測"},
130902: {quest :"★9イベント：ノラの深奥", hp :"8624", hph :"1.96", def :"1", hosoku :"落石のダメージ431と基準体力から推測"}
};
var monster_status46 = {
460800: {quest :"★8フリー", hp :"9212", hph :"1.96", def :"1", hosoku :"落石のダメージ461と基準体力から推測"},
460801: {quest :"★8フリー", hp :"9353", hph :"1.99", def :"1", hosoku :"落石のダメージ468と基準体力から推測"},
460802: {quest :"★8フリー", hp :"9494", hph :"2.02", def :"1", hosoku :"落石のダメージ475と基準体力から推測"},
460803: {quest :"★8フリー", hp :"9635", hph :"2.05", def :"1", hosoku :"落石のダメージ482と基準体力から推測"},
460804: {quest :"★8フリー", hp :"9776", hph :"2.08", def :"1", hosoku :"落石のダメージ489と基準体力から推測"},
460900: {quest :"★9イベント：静寂の帳", hp :"18565", hph :"3.95", def :"1", hosoku :"落石のダメージ928と基準体力から推測"},
460901: {quest :"★9イベント：静寂の帳(マルチ)", hp :"46412", hph :"9.875", def :"1", hosoku :"落石のダメージ2321と基準体力から推測"},
460902: {quest :"★9奈落にて君を喚ぶ", hp :"6392", hph :"1.36", def :"1", hosoku :"落石のダメージ320と基準体力から推測"},
460903: {quest :"★9奈落にて君を喚ぶ", hp :"6533", hph :"1.39", def :"1", hosoku :"落石のダメージ327と基準体力から推測"},
460904: {quest :"★9奈落にて君を喚ぶ", hp :"6674", hph :"1.42", def :"1", hosoku :"落石のダメージ334と基準体力から推測"},
460905: {quest :"★9奈落にて君を喚ぶ", hp :"6815", hph :"1.45", def :"1", hosoku :"落石のダメージ341と基準体力から推測"},
460906: {quest :"★9奈落にて君を喚ぶ", hp :"6956", hph :"1.48", def :"1", hosoku :"落石のダメージ348と基準体力から推測"}
};
var monster_status9 = {
90700: {quest :"★7フリー", hp :"7840", hph :"1.96", def :"1", hosoku :"探索のステータスから推測"},
90701: {quest :"★7フリー", hp :"7960", hph :"1.99", def :"1", hosoku :"探索のステータスから推測"},
90702: {quest :"上位探索", hp :"8080", hph :"2.02", def :"1", hosoku :"実測値"},
90703: {quest :"★7フリー", hp :"8200", hph :"2.05", def :"1", hosoku :"探索のステータスから推測"},
90704: {quest :"★7フリー", hp :"8320", hph :"2.08", def :"1", hosoku :"探索のステータスから推測"},
90705: {quest :"★7イベクエ：結晶達のロックンロール", hp :"4720", hph :"1.18", def :"1", hosoku :"実測値"}
};
var monster_status12 = {
120700: {quest :"★7闘技場", hp :"8428", hph :"1.96", def :"1", hosoku :"落石のダメージ421と基準体力から推測"},
120701: {quest :"★7闘技場", hp :"8557", hph :"1.99", def :"1", hosoku :"落石のダメージ428と基準体力から推測"},
120702: {quest :"★7闘技場", hp :"8686", hph :"2.02", def :"1", hosoku :"落石のダメージ434と基準体力から推測"},
120703: {quest :"★7闘技場", hp :"8815", hph :"2.05", def :"1", hosoku :"落石のダメージ441と基準体力から推測"},
120704: {quest :"★7闘技場", hp :"8944", hph :"2.08", def :"1", hosoku :"落石のダメージ447と基準体力から推測"},
120705: {quest :"★7イベクエ：結晶達のロックンロール", hp :"5074", hph :"1.18", def :"1", hosoku :"落石のダメージ254と基準体力から推測"},
120706: {quest :"★7イベクエ：ウラガンキン達が転がります！", hp :"5719", hph :"1.33", def :"1", hosoku :"落石のダメージ286と基準体力から推測　2頭共体力は同じ"},
120800: {quest :"★8闘技大会08", hp :"6235", hph :"1.45", def :"1", hosoku :"落石のダメージ312と基準体力から推測"}
};
var monster_status60 = {
600000: {quest :"イベクエ", hp :"67500", hph :"1", def :"1", hosoku :"落石のダメージ3375から推測"}
};
var monster_status27 = {
270500: {quest :"★5闘技場", hp :"4350", hph :"1.45", def :"1", hosoku :"落石のダメージ218と基準体力から推測"},
270501: {quest :"★5闘技場", hp :"4440", hph :"1.48", def :"1", hosoku :"落石のダメージ222と基準体力から推測"},
270502: {quest :"★5闘技場", hp :"4530", hph :"1.51", def :"1", hosoku :"落石のダメージ227と基準体力から推測"},
270503: {quest :"★5闘技場", hp :"4620", hph :"1.54", def :"1", hosoku :"落石のダメージ231と基準体力から推測"},
270504: {quest :"★5闘技場", hp :"4710", hph :"1.57", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
270505: {quest :"★5イベント：骨肉の狩り", hp :"3000", hph :"1", def :"1", hosoku :"落石のダメージ150と基準体力から推測"},
270700: {quest :"★7闘技場", hp :"5880", hph :"1.96", def :"1", hosoku :"落石のダメージ294と基準体力から推測"},
270701: {quest :"★7闘技場", hp :"5970", hph :"1.99", def :"1", hosoku :"落石のダメージ299と基準体力から推測"},
270702: {quest :"★7闘技場", hp :"6060", hph :"2.02", def :"1", hosoku :"落石のダメージ303と基準体力から推測"},
270703: {quest :"★7闘技場", hp :"6150", hph :"2.05", def :"1", hosoku :"落石のダメージ308と基準体力から推測"},
270704: {quest :"★7闘技場", hp :"6240", hph :"2.08", def :"1", hosoku :"落石のダメージ312と基準体力から推測"},
270710: {quest :"★7イベント：頽廃の谷のオペラ", hp :"3540", hph :"1.18", def :"1", hosoku :"落石のダメージ177と基準体力から推測"},
270706: {quest :"★7チャレンジ中級02", hp :"3990", hph :"1.33", def :"1", hosoku :"落石のダメージ200と基準体力から推測"},
270900: {quest :"★9新大陸の白き風", hp :"4080", hph :"1.36", def :"1", hosoku :"落石のダメージ204と基準体力から推測"},
270901: {quest :"★9新大陸の白き風", hp :"4170", hph :"1.39", def :"1", hosoku :"体力補正から推測"},
270902: {quest :"★9新大陸の白き風", hp :"4260", hph :"1.42", def :"1", hosoku :"体力補正から推測"},
270903: {quest :"★9新大陸の白き風", hp :"4350", hph :"1.45", def :"1", hosoku :"撃龍槍のダメージ348と基準体力から推測"},
270904: {quest :"★9新大陸の白き風", hp :"4440", hph :"1.48", def :"1", hosoku :"落石のダメージ222と基準体力から推測"},
270910: {quest :"★9奈落にて君を喚ぶ", hp :"4080", hph :"1.36", def :"1", hosoku :"落石のダメージ204と基準体力から推測"},
270911: {quest :"★9奈落にて君を喚ぶ", hp :"4170", hph :"1.39", def :"1", hosoku :"落石のダメージ209と基準体力から推測"},
270912: {quest :"★9奈落にて君を喚ぶ", hp :"4260", hph :"1.42", def :"1", hosoku :"落石のダメージ213と基準体力から推測"},
270913: {quest :"★9奈落にて君を喚ぶ", hp :"4350", hph :"1.45", def :"1", hosoku :"落石のダメージ218と基準体力から推測"},
270914: {quest :"★9奈落にて君を喚ぶ", hp :"4440", hph :"1.48", def :"1", hosoku :"落石のダメージ222と基準体力から推測"},
270920: {quest :"★9イベント：軽やかで恐ろしく、そして熱く", hp :"3630", hph :"1.21", def :"1", hosoku :"落石のダメージ182と基準体力から推測"}
};
var monster_status45 = {
450900: {quest :"★9イベント：まだ見ぬ白き鬣も", hp :"12395", hph :"3.7", def :"1", hosoku :"らしい"}
};
var monster_status19 = {
190800: {quest :"★8フリー", hp :"7800", hph :"1.96", def :"1", hosoku :"落石のダメージ390と基準体力から推測"},
190801: {quest :"★8フリー", hp :"7920", hph :"1.99", def :"1", hosoku :"落石のダメージ396と基準体力から推測"},
190802: {quest :"★8フリー", hp :"8039", hph :"2.02", def :"1", hosoku :"落石のダメージ402と基準体力から推測"},
190803: {quest :"★8フリー", hp :"8159", hph :"2.05", def :"1", hosoku :"落石のダメージ408と基準体力から推測"},
190804: {quest :"★8フリー", hp :"8278", hph :"2.08", def :"1", hosoku :"落石のダメージ414と基準体力から推測"},
190900: {quest :"★9導きの青い星", hp :"5412", hph :"1.36", def :"1", hosoku :"落石のダメージ271と基準体力から推測"},
190901: {quest :"★9導きの青い星", hp :"5532", hph :"1.39", def :"1", hosoku :"落石のダメージ277と基準体力から推測"},
190902: {quest :"★9導きの青い星", hp :"5651", hph :"1.42", def :"1", hosoku :"落石のダメージ283と基準体力から推測"},
190903: {quest :"★9導きの青い星", hp :"5771", hph :"1.45", def :"1", hosoku :"落石のダメージ289と基準体力から推測"},
190904: {quest :"★9導きの青い星", hp :"5890", hph :"1.48", def :"1", hosoku :"落石のダメージ295と基準体力から推測"},
190910: {quest :"★9イベント：嵐のさなかにて", hp :"17910", hph :"4.5", def :"1", hosoku :"落石のダメージ896と基準体力から推測"},
190911: {quest :"★9イベント：嵐のさなかにて(マルチ)", hp :"44775", hph :"11.25", def :"1", hosoku :"落石のダメージ2239と基準体力から推測"},
190914: {quest :"★9イベント：破滅が来たりて喇叭を鳴らす", hp :"17910", hph :"4.5", def :"1", hosoku :"落石のダメージ896と基準体力から推測"}
};
var monster_status6 = {
60200: {quest :"★2フリー", hp :"1537", hph :"0.58", def :"1", hosoku :"落石のダメージ77と基準体力から推測"},
60201: {quest :"★2フリー", hp :"1616", hph :"0.61", def :"1", hosoku :"落石のダメージ81と基準体力から推測"},
60202: {quest :"★2フリー", hp :"1696", hph :"0.64", def :"1", hosoku :"落石のダメージ85と基準体力から推測"},
60203: {quest :"★2フリー", hp :"1775", hph :"0.67", def :"1", hosoku :"落石のダメージ89と基準体力から推測"},
60204: {quest :"★2フリー", hp :"1855", hph :"0.7", def :"1", hosoku :"落石のダメージ93と基準体力から推測"},
60400: {quest :"★4イベント：共闘ヤック×ヤック", hp :"821", hph :"0.31", def :"1", hosoku :"落石のダメージ41と基準体力から推測"},
60600: {quest :"★6フリー", hp :"4478", hph :"1.69", def :"1", hosoku :"探索のステータスから推測"},
60601: {quest :"★6フリー", hp :"4558", hph :"1.72", def :"1", hosoku :"探索のステータスから推測"},
60602: {quest :"上位探索", hp :"4637", hph :"1.75", def :"1", hosoku :"落石のダメージ232と基準体力から推測"},
60603: {quest :"★6フリー", hp :"4717", hph :"1.78", def :"1", hosoku :"探索のステータスから推測"},
60604: {quest :"★6フリー", hp :"4796", hph :"1.81", def :"1", hosoku :"探索のステータスから推測"}
};
var monster_status10 = {
100300: {quest :"★3フリー", hp :"2296", hph :"0.82", def :"1", hosoku :"探索のステータスから推測"},
100301: {quest :"★3フリー", hp :"2380", hph :"0.85", def :"1", hosoku :"探索のステータスから推測"},
100302: {quest :"下位探索", hp :"2464", hph :"0.88", def :"1", hosoku :"同じランク？のボルボロスの補正とやや実測値から推測"},
100303: {quest :"★3フリー", hp :"2548", hph :"0.91", def :"1", hosoku :"探索のステータスから推測"},
100304: {quest :"★3フリー", hp :"2632", hph :"0.94", def :"1", hosoku :"探索のステータスから推測"},
100600: {quest :"★6フリー", hp :"5152", hph :"1.84", def :"1", hosoku :"探索のステータスから推測"},
100601: {quest :"★6フリー", hp :"5236", hph :"1.87", def :"1", hosoku :"探索のステータスから推測"},
100602: {quest :"上位探索", hp :"5320", hph :"1.9", def :"1", hosoku :"縄張り争いのダメージ532と基準体力から推測"},
100603: {quest :"★6フリー", hp :"5404", hph :"1.93", def :"1", hosoku :"探索のステータスから推測"},
100604: {quest :"★6フリー", hp :"5488", hph :"1.96", def :"1", hosoku :"探索のステータスから推測"}
};
var monster_status48 = {
480900: {quest :"★9フリー", hp :"16050", hph :"2.14", def :"1", hosoku :"落石のダメージ803と基準体力から推測"},
480901: {quest :"★9フリー", hp :"16275", hph :"2.17", def :"1", hosoku :"落石のダメージ814と基準体力から推測"},
480902: {quest :"★9フリー", hp :"16500", hph :"2.2", def :"1", hosoku :"落石のダメージ825と基準体力から推測"},
480903: {quest :"★9フリー", hp :"16725", hph :"2.23", def :"1", hosoku :"落石のダメージ836と基準体力から推測"},
480904: {quest :"★9フリー", hp :"16950", hph :"2.26", def :"1", hosoku :"落石のダメージ848と基準体力から推測"},
480905: {quest :"★9フリーマルチ", hp :"36112", hph :"4.815", def :"1", hosoku :"落石のダメージ1806から推測(マルチ補正2.25?)"},
480910: {quest :"★9イベント：冥き河のカロン", hp :"16500", hph :"2.2", def :"1", hosoku :"落石のダメージ825と基準体力から推測"}
};
var monster_status22 = {
220600: {quest :"★6", hp :"", hph :"", def :"0.7", hosoku :"撃龍槍のダメージ2424"},
220900: {quest :"★9イベント：不滅のアルペングリューエン", hp :"", hph :"", def :"0.7", hosoku :"撃龍槍のダメージ6000"},
220901: {quest :"★9イベント：不滅のアルペングリューエン(マルチ)", hp :"", hph :"", def :"0.7", hosoku :"撃龍槍のダメージ12000"}
};
var monster_status7 = {
70400: {quest :"★4", hp :"2968", hph :"1.12", def :"1", hosoku :"探索のステータスから推測"},
70401: {quest :"★4", hp :"3047", hph :"1.15", def :"1", hosoku :"探索のステータスから推測"},
70402: {quest :"下位探索", hp :"3127", hph :"1.18", def :"1", hosoku :"同じランク？のドスギルオスの補正とやや実測値から推測"},
70403: {quest :"★4", hp :"3206", hph :"1.21", def :"1", hosoku :"探索のステータスから推測"},
70404: {quest :"★4", hp :"3286", hph :"1.24", def :"1", hosoku :"探索のステータスから推測"},
70405: {quest :"★4イベント：共闘ヤック×ヤック", hp :"2093", hph :"0.79", def :"1", hosoku :"落石のダメージ105と基準体力から推測"},
70600: {quest :"★6", hp :"4478", hph :"1.69", def :"1", hosoku :"探索のステータスから推測"},
70601: {quest :"★6", hp :"4558", hph :"1.72", def :"1", hosoku :"探索のステータスから推測"},
70602: {quest :"上位探索", hp :"4637", hph :"1.75", def :"1", hosoku :"同じランク？のドスギルオスの補正と縄張り争いから推測"},
70603: {quest :"★6", hp :"4717", hph :"1.78", def :"1", hosoku :"探索のステータスから推測"},
70604: {quest :"★6", hp :"4796", hph :"1.81", def :"1", hosoku :"探索のステータスから推測"},
70700: {quest :"★7イベント：海台のワルツ", hp :"2729", hph :"1.03", def :"1", hosoku :"計測したダメージと基準体力から推測"}
};
var monster_status3 = {
30500: {quest :"★5闘技場", hp :"4712", hph :"1.45", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
30501: {quest :"★5闘技場", hp :"4810", hph :"1.48", def :"1", hosoku :"落石のダメージ241と基準体力から推測"},
30502: {quest :"★5闘技場", hp :"4907", hph :"1.51", def :"1", hosoku :"落石のダメージ245と基準体力から推測"},
30503: {quest :"★5闘技場", hp :"5005", hph :"1.54", def :"1", hosoku :"落石のダメージ250と基準体力から推測"},
30504: {quest :"★5闘技場", hp :"5102", hph :"1.57", def :"1", hosoku :"落石のダメージ255と基準体力から推測"},
30505: {quest :"★5イベント：縄張り争い決定戦", hp :"3250", hph :"1", def :"1", hosoku :"落石のダメージ163と基準体力から推測"},
30700: {quest :"★7闘技場", hp :"6370", hph :"1.96", def :"1", hosoku :"落石のダメージ319と基準体力から推測"},
30701: {quest :"★7闘技場", hp :"6467", hph :"1.99", def :"1", hosoku :"落石のダメージ323と基準体力から推測"},
30702: {quest :"★7闘技場", hp :"6565", hph :"2.02", def :"1", hosoku :"落石のダメージ328と基準体力から推測"},
30703: {quest :"★7闘技場", hp :"6662", hph :"2.05", def :"1", hosoku :"落石のダメージ333と基準体力から推測"},
30704: {quest :"★7闘技場", hp :"6760", hph :"2.08", def :"1", hosoku :"落石のダメージ338と基準体力から推測"},
30710: {quest :"★7イベント：暴動とは斯くの如し", hp :"4322", hph :"1.33", def :"1", hosoku :"縄張り争いのダメージ864と基準体力から推測"},
30800: {quest :"★8二頭", hp :"4322", hph :"1.33", def :"1", hosoku :"縄張り争いのダメージ884と基準体力から推測"},
30850: {quest :"闘技大会07", hp :"4712", hph :"1.45", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
30900: {quest :"★9新大陸の白き風", hp :"4420", hph :"1.36", def :"1", hosoku :"落石のダメージ221と基準体力から推測"},
30901: {quest :"★9新大陸の白き風", hp :"4517", hph :"1.39", def :"1", hosoku :""},
30902: {quest :"★9新大陸の白き風", hp :"4615", hph :"1.42", def :"1", hosoku :"撃龍槍のダメージ369と基準体力から推測"},
30903: {quest :"★9新大陸の白き風", hp :"4712", hph :"1.45", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
30904: {quest :"★9新大陸の白き風", hp :"4810", hph :"1.48", def :"1", hosoku :"落石のダメージ241と基準体力から推測"}
};
var monster_status50 = {
500700: {quest :"★7闘技場", hp :"6762", hph :"1.96", def :"1", hosoku :"落石のダメージ338と基準体力から推測"},
500701: {quest :"★7闘技場", hp :"6865", hph :"1.99", def :"1", hosoku :"落石のダメージ343と基準体力から推測"},
500702: {quest :"★7闘技場", hp :"6969", hph :"2.02", def :"1", hosoku :"落石のダメージ348と基準体力から推測"},
500703: {quest :"★7闘技場", hp :"7072", hph :"2.05", def :"1", hosoku :"落石のダメージ354と基準体力から推測"},
500704: {quest :"★7闘技場", hp :"7176", hph :"2.08", def :"1", hosoku :"落石のダメージ359と基準体力から推測"},
500710: {quest :"★7イベント：暴動とは斯くの如し", hp :"4588", hph :"1.33", def :"", hosoku :"縄張り争いのダメージ917と基準体力から推測"},
500800: {quest :"★8二頭", hp :"4381", hph :"1.27", def :"1", hosoku :"縄張り争いのダメージ876と基準体力から推測"},
500850: {quest :"闘技大会07", hp :"5002", hph :"1.45", def :"1", hosoku :"落石のダメージ250と基準体力から推測"}
};
var monster_status20 = {
200800: {quest :"★8フリー", hp :"8428", hph :"1.96", def :"1", hosoku :"落石のダメージ421と基準体力から推測"},
200801: {quest :"★8フリー", hp :"8557", hph :"1.99", def :"1", hosoku :"15分粘って確認できず"},
200802: {quest :"★8フリー", hp :"8686", hph :"2.02", def :"1", hosoku :"落石のダメージ434と基準体力から推測"},
200803: {quest :"★8フリー", hp :"8815", hph :"2.05", def :"1", hosoku :"落石のダメージ441と基準体力から推測"},
200804: {quest :"★8フリー", hp :"8944", hph :"2.08", def :"1", hosoku :"落石のダメージ447と基準体力から推測"},
200900: {quest :"★9導きの青い星", hp :"5848", hph :"1.36", def :"1", hosoku :""},
200901: {quest :"★9導きの青い星", hp :"5977", hph :"1.39", def :"1", hosoku :"落石のダメージ299と基準体力から推測"},
200902: {quest :"★9導きの青い星", hp :"6106", hph :"1.42", def :"1", hosoku :"落石のダメージ305と基準体力から推測"},
200903: {quest :"★9導きの青い星", hp :"6235", hph :"1.45", def :"1", hosoku :""},
200904: {quest :"★9導きの青い星", hp :"6364", hph :"1.48", def :"1", hosoku :"落石のダメージ318と基準体力から推測"},
200910: {quest :"★9イベント：誰が玉座に牙を剥く？", hp :"6106", hph :"1.42", def :"1", hosoku :"落石のダメージ305と基準体力から推測"},
200912: {quest :"★9イベント：太陽が燃え盛る時", hp :"19350", hph :"4.5", def :"1", hosoku :"落石のダメージ968と基準体力から推測"},
200913: {quest :"★9イベント：太陽が燃え盛る時(マルチ)", hp :"48375", hph :"11.25", def :"1", hosoku :"落石のダメージ2419と基準体力から推測"},
210916: {quest :"★9イベント：破滅が来たりて喇叭を鳴らす", hp :"19350", hph :"4.5", def :"1", hosoku :"縄張り争いのダメージ1935と基準体力から推測"}
};
var monster_status26 = {
260400: {quest :"★4フリー", hp :"2688", hph :"1.12", def :"1", hosoku :"落石のダメージ134と基準体力から推測"},
260401: {quest :"★4フリー", hp :"2760", hph :"1.15", def :"1", hosoku :"落石のダメージ138と基準体力から推測"},
260402: {quest :"★4フリー", hp :"2832", hph :"1.18", def :"1", hosoku :""},
260403: {quest :"★4フリー", hp :"2904", hph :"1.21", def :"1", hosoku :""},
260404: {quest :"★4フリー", hp :"2976", hph :"1.24", def :"1", hosoku :"落石のダメージ149と基準体力から推測"},
260600: {quest :"★6フリー", hp :"4056", hph :"1.69", def :"1", hosoku :"落石のダメージ203と基準体力から推測"},
260601: {quest :"★6フリー", hp :"4128", hph :"1.72", def :"1", hosoku :"落石のダメージ206と基準体力から推測"},
260602: {quest :"★6フリー", hp :"4200", hph :"1.75", def :"1", hosoku :"落石のダメージ210と基準体力から推測"},
260603: {quest :"★6フリー", hp :"4272", hph :"1.78", def :"1", hosoku :""},
260604: {quest :"★6フリー", hp :"4344", hph :"1.81", def :"1", hosoku :"落石のダメージ217と基準体力から推測"},
260605: {quest :"★6イベント：ドドド三兄弟", hp :"2832", hph :"1.18", def :"1", hosoku :"落石のダメージ142と基準体力から推測"},
260700: {quest :"★7イベント：頽廃の谷のオペラ", hp :"2472", hph :"1.03", def :"1", hosoku :"落石のダメージ124と基準体力から推測"}
};
var monster_status17 = {
170000: {quest :"ベータ版", hp :"1496", hph :"0.68", def :"1", hosoku :"縄張り争いのダメージ149と基準体力から推測"},
170001: {quest :"ベータ版マルチ", hp :"3889", hph :"1.768", def :"1", hosoku :"縄張り争いのダメージ388と基準体力から推測　マルチ補正2.6"},
170200: {quest :"★2フリー", hp :"1276", hph :"0.58", def :"1", hosoku :"落石のダメージ64と基準体力から推測"},
170201: {quest :"★2フリー", hp :"1342", hph :"0.61", def :"1", hosoku :"落石のダメージ67と基準体力から推測"},
170202: {quest :"★2フリー", hp :"1408", hph :"0.64", def :"1", hosoku :"落石のダメージ70と基準体力から推測"},
170203: {quest :"★2フリー", hp :"1474", hph :"0.67", def :"1", hosoku :"落石のダメージ74と基準体力から推測"},
170204: {quest :"★2フリー", hp :"1540", hph :"0.7", def :"1", hosoku :"落石のダメージ77と基準体力から推測"},
170205: {quest :"★2調査", hp :"1408", hph :"0.64", def :"1.15", hosoku :"実測値"},
170206: {quest :"★2調査", hp :"1540", hph :"0.7", def :"1.05", hosoku :"実測値"},
170207: {quest :"★2調査", hp :"1540", hph :"0.7", def :"1", hosoku :"落石のダメージ77と基準体力から推測"},
170208: {quest :"★2調査", hp :"1540", hph :"0.7", def :"1", hosoku :"落石のダメージ77と基準体力から推測"},
170230: {quest :"★2イベント：大食らい共が参る！", hp :"682", hph :"0.31", def :"1", hosoku :"落石のダメージ34と基準体力から推測"},
170400: {quest :"★4イベント：食という欲の扉を開け！", hp :"682", hph :"0.31", def :"1", hosoku :"実測値"},
170600: {quest :"★6フリー", hp :"3718", hph :"1.69", def :"1", hosoku :"落石のダメージ186と基準体力から推測"},
170601: {quest :"★6フリー", hp :"3784", hph :"1.72", def :"1", hosoku :"落石のダメージ189と基準体力から推測"},
170602: {quest :"★6フリー", hp :"3850", hph :"1.75", def :"1", hosoku :"落石のダメージ193と基準体力から推測"},
170603: {quest :"★6フリー", hp :"3916", hph :"1.78", def :"1", hosoku :"落石のダメージ196と基準体力から推測"},
170604: {quest :"★6フリー", hp :"3982", hph :"1.81", def :"1", hosoku :"落石のダメージ199と基準体力から推測"},
170605: {quest :"★6イベント：ドドド三兄弟", hp :"2596", hph :"1.18", def :"1", hosoku :"落石のダメージ130と基準体力から推測"},
170700: {quest :"★7イベント：新緑のブルース", hp :"2266", hph :"1.03", def :"1", hosoku :"落石のダメージ113と基準体力から推測"},
170750: {quest :"★7チャレンジ：森に潜む者達", hp :"2200", hph :"1", def :"1", hosoku :"落石のダメージ110と基準体力から推測"},
170900: {quest :"★9イベント：窮賊、ハンターを噛む！ ", hp :"16390", hph :"7.45", def :"1", hosoku :"落石のダメージ820と基準体力から推測"},
170902: {quest :"★9イベント：ノラの深奥", hp :"3850", hph :"1.75", def :"1", hosoku :"落石のダメージ193と基準体力から推測"}
};
var monster_status28 = {
280600: {quest :"★6フリー", hp :"5520", hph :"1.84", def :"1", hosoku :"落石のダメージ276と基準体力から推測"},
280601: {quest :"★6フリー", hp :"5610", hph :"1.87", def :"1", hosoku :"落石のダメージ281と基準体力から推測"},
280602: {quest :"★6フリー", hp :"5700", hph :"1.9", def :"1", hosoku :"落石のダメージ285と基準体力から推測"},
280603: {quest :"★6フリー", hp :"5790", hph :"1.93", def :"1", hosoku :"落石のダメージ290と基準体力から推測"},
280604: {quest :"★6フリー", hp :"5880", hph :"1.96", def :"1", hosoku :"落石のダメージ294と基準体力から推測"},
280605: {quest :"★6イベント：ドドド三兄弟", hp :"3630", hph :"1.21", def :"1", hosoku :"落石のダメージ182と基準体力から推測"},
280700: {quest :"★7イベクエ：結晶達のロックンロール", hp :"3179", hph :"1.06", def :"1", hosoku :"落石のダメージ159と基準体力から推測(3000ｘ1.06は3179になる)"},
280702: {quest :"★7イベント：ＵＳＪ・燃えよ、蒼き星達！", hp :"3990", hph :"1.33", def :"1", hosoku :"落石のダメージ200と基準体力から推測"},
280900: {quest :"★9イベント：脈打て、本能", hp :"5700", hph :"1.9", def :"1", hosoku :"落石のダメージ285と基準体力から推測"}
};
var monster_status18 = {
180300: {quest :"★3闘技場", hp :"2378", hph :"0.82", def :"1", hosoku :"落石のダメージ119と基準体力から推測"},
180301: {quest :"★3闘技場", hp :"2465", hph :"0.85", def :"1", hosoku :"落石のダメージ123と基準体力から推測"},
180302: {quest :"★3闘技場", hp :"2552", hph :"0.88", def :"1", hosoku :"落石のダメージ128と基準体力から推測"},
180303: {quest :"★3闘技場", hp :"2639", hph :"0.91", def :"1", hosoku :"落石のダメージ132と基準体力から推測"},
180304: {quest :"★3闘技場", hp :"2726", hph :"0.94", def :"1", hosoku :"落石のダメージ136と基準体力から推測"},
180310: {quest :"★3イベント：日がくれるまでの短い間", hp :"1160", hph :"0.4", def :"1", hosoku :"落石のダメージ58と基準体力から推測"},
180600: {quest :"★6闘技場", hp :"5336", hph :"184", def :"1", hosoku :"落石のダメージ267と基準体力から推測"},
180601: {quest :"★6闘技場", hp :"5423", hph :"1.87", def :"1", hosoku :"落石のダメージ271と基準体力から推測"},
180602: {quest :"★6闘技場", hp :"5510", hph :"1.9", def :"1", hosoku :"落石のダメージ276と基準体力から推測"},
180603: {quest :"★6闘技場", hp :"5597", hph :"1.93", def :"1", hosoku :"落石のダメージ280と基準体力から推測"},
180604: {quest :"★6闘技場", hp :"5684", hph :"1.96", def :"1", hosoku :"落石のダメージ284と基準体力から推測"},
180700: {quest :"★7イベント：新緑のブルース", hp :"3074", hph :"1.06", def :"1", hosoku :"落石のダメージ154と基準体力から推測"}
};
var monster_status57 = {
570800: {quest :"★8フリー", hp :"11610", hph :"2.7", def :"1", hosoku :"縄張り争い1161と基準体力から推測"},
570801: {quest :"★8フリー", hp :"12040", hph :"2.8", def :"1", hosoku :"縄張り争い1204と基準体力から推測"},
570802: {quest :"★8フリー", hp :"12470", hph :"2.9", def :"1", hosoku :"縄張り争い1247と基準体力から推測"},
570803: {quest :"★8フリー", hp :"12900", hph :"3", def :"1", hosoku :"縄張り争い1290と基準体力から推測"},
570804: {quest :"★8フリー", hp :"13300", hph :"3.1", def :"1", hosoku :"縄張り争い1333と基準体力から推測"},
570900: {quest :"★9イベント：誰が玉座に牙を剥く？", hp :"6106", hph :"1.42", def :"1", hosoku :"落石のダメージ305と基準体力から推測"},
570902: {quest :"★9イベント：青は愛より出でて愛より熱し", hp :"16770", hph :"3.9", def :"1", hosoku :"落石のダメージ839と基準体力から推測"},
570903: {quest :"★9イベント：青は愛より出でて愛より熱し(マルチ)", hp :"41925", hph :"9.75", def :"1", hosoku :"落石のダメージ2096と基準体力から推測"},
570904: {quest :"★9イベント：軽やかで恐ろしく、そして熱く", hp :"5590", hph :"1.3", def :"1", hosoku :"落石のダメージ280と基準体力から推測"}
};
var monster_status21 = {
210800: {quest :"★8フリー", hp :"6899", hph :"1.96", def :"1", hosoku :"落石のダメージ345と基準体力から推測"},
210801: {quest :"★8フリー", hp :"7004", hph :"1.99", def :"1", hosoku :"落石のダメージ350と基準体力から推測"},
210802: {quest :"★8フリー", hp :"7110", hph :"2.02", def :"1", hosoku :"落石のダメージ356と基準体力から推測"},
210803: {quest :"★8フリー", hp :"7216", hph :"2.05", def :"1", hosoku :"落石のダメージ361と基準体力から推測"},
210804: {quest :"★8フリー", hp :"7321", hph :"2.08", def :"1", hosoku :"落石のダメージ366と基準体力から推測"},
210900: {quest :"★9導きの青い星", hp :"4787", hph :"1.36", def :"1", hosoku :"落石のダメージ239と基準体力から推測"},
210901: {quest :"★9導きの青い星", hp :"4892", hph :"1.39", def :"1", hosoku :"落石のダメージ245と基準体力から推測"},
210902: {quest :"★9導きの青い星", hp :"4998", hph :"1.42", def :"1", hosoku :"落石のダメージ250と基準体力から推測"},
210903: {quest :"★9導きの青い星", hp :"5104", hph :"1.45", def :"1", hosoku :"落石のダメージ255と基準体力から推測"},
210904: {quest :"★9導きの青い星", hp :"5209", hph :"1.48", def :"1", hosoku :"落石のダメージ260と基準体力から推測"},
210910: {quest :"★9イベント：誰が玉座に牙を剥く？", hp :"4998", hph :"1.42", def :"1", hosoku :"落石のダメージ250と基準体力から推測"},
210912: {quest :"★9イベント：破滅が来たりて喇叭を鳴らす", hp :"26224", hph :"7.45", def :"1", hosoku :"落石のダメージ1311と基準体力から推測"},
210913: {quest :"★9イベント：破滅が来たりて喇叭を鳴らす(マルチ)", hp :"65560", hph :"18.625", def :"1", hosoku :"落石のダメージ3278と基準体力から推測"},
210950: {quest :"★9チャレンジ：上級チャレンジクエスト02", hp :"5315", hph :"1.51", def :"1", hosoku :"落石のダメージ266と基準体力から推測"},
210850: {quest :"滅尽龍討伐03", hp :"9504", hph :"2.7", def :"1", hosoku :"落石のダメージ475と基準体力から推測"}
};
var monster_status4 = {
40400: {quest :"★4闘技場", hp :"3304", hph :"1.12", def :"1", hosoku :"落石のダメージ165と基準体力から推測"},
40401: {quest :"★4闘技場", hp :"3392", hph :"1.15", def :"1", hosoku :"落石のダメージ170と基準体力から推測"},
40402: {quest :"★4闘技場", hp :"3481", hph :"1.18", def :"1", hosoku :"落石のダメージ174と基準体力から推測"},
40403: {quest :"★4闘技場", hp :"3569", hph :"1.21", def :"1", hosoku :"落石のダメージ178と基準体力から推測"},
40404: {quest :"★4闘技場", hp :"3658", hph :"1.24", def :"1", hosoku :"落石のダメージ183と基準体力から推測"},
40405: {quest :"★4イベント：食という欲の扉を開け！", hp :"2330", hph :"0.79", def :"1", hosoku :"落石のダメージ117と基準体力から推測"},
40600: {quest :"★6闘技場", hp :"5428", hph :"1.84", def :"1", hosoku :"落石のダメージ271と基準体力から推測"},
40601: {quest :"★6闘技場", hp :"5516", hph :"1.87", def :"1", hosoku :"落石のダメージ276と基準体力から推測"},
40602: {quest :"★6闘技場", hp :"5605", hph :"1.9", def :"1", hosoku :"落石のダメージ280と基準体力から推測"},
40603: {quest :"★6闘技場", hp :"5693", hph :"1.93", def :"1", hosoku :"落石のダメージ285と基準体力から推測"},
40604: {quest :"★6闘技場", hp :"5782", hph :"1.96", def :"1", hosoku :"落石のダメージ289と基準体力から推測"},
40700: {quest :"★7イベント：海台のワルツ", hp :"3127", hph :"1.06", def :"1", hosoku :"縄張り争いのダメージ469と基準体力から推測"}
};
var monster_status47 = {
470700: {quest :"★7フリー", hp :"8918", hph :"1.96", def :"1", hosoku :"落石のダメージ446と基準体力から推測"},
470701: {quest :"★7フリー", hp :"9054", hph :"1.99", def :"1", hosoku :"落石のダメージ453と基準体力から推測"},
470702: {quest :"★7フリー", hp :"9191", hph :"2.02", def :"1", hosoku :"落石のダメージ460と基準体力から推測"},
470703: {quest :"★7フリー", hp :"9327", hph :"2.05", def :"1", hosoku :"落石のダメージ466と基準体力から推測"},
470704: {quest :"★7フリー", hp :"9464", hph :"2.08", def :"1", hosoku :"落石のダメージ473と基準体力から推測"},
470710: {quest :"★7イベント：頽廃の谷のオペラ", hp :"5369", hph :"1.18", def :"1", hosoku :"落石のダメージ268と基準体力から推測"},
470900: {quest :"★9イベント：秩序なき者に明日は無い", hp :"9873", hph :"2.17", def :"1", hosoku :"落石のダメージ494と基準体力から推測"}
};
var monster_status8 = {
80250: {quest :"★2チャレンジ：ランゴスタ大量発生！！", hp :"2464", hph :"0.88", def :"1", hosoku :"落石のダメージ123と基準体力から推測"},
80300: {quest :"★3闘技場", hp :"2296", hph :"0.82", def :"1", hosoku :"落石のダメージ115と基準体力から推測"},
80301: {quest :"★3闘技場", hp :"2380", hph :"0.85", def :"1", hosoku :"落石のダメージ119と基準体力から推測"},
80302: {quest :"★3闘技場", hp :"2464", hph :"0.88", def :"1", hosoku :"10分間粘って確認できず"},
80303: {quest :"★3闘技場", hp :"2548", hph :"0.91", def :"1", hosoku :"落石のダメージ127と基準体力から推測"},
80304: {quest :"★3闘技場", hp :"2632", hph :"0.94", def :"1", hosoku :"落石のダメージ132と基準体力から推測"},
80310: {quest :"★3イベント：日がくれるまでの短い間", hp :"1120", hph :"0.4", def :"1", hosoku :"落石のダメージ56と基準体力から推測"},
80400: {quest :"★4イベント：食という欲の扉を開け！", hp :"1120", hph :"0.4", def :"1", hosoku :"落石のダメージ56と基準体力から推測"},
80500: {quest :"★5イベント：翼ある者には毒がある", hp :"1120", hph :"0.4", def :"1", hosoku :"落石のダメージ56と基準体力から推測"},
80600: {quest :"★6闘技場", hp :"4732", hph :"1.69", def :"1", hosoku :"落石のダメージ237と基準体力から推測"},
80601: {quest :"★6闘技場", hp :"4816", hph :"1.72", def :"1", hosoku :"落石のダメージ241と基準体力から推測"},
80602: {quest :"★6闘技場", hp :"4900", hph :"1.75", def :"1", hosoku :"落石のダメージ245と基準体力から推測"},
80603: {quest :"★6闘技場", hp :"4984", hph :"1.78", def :"1", hosoku :"落石のダメージ249と基準体力から推測"},
80604: {quest :"★6闘技場", hp :"5068", hph :"1.81", def :"1", hosoku :"落石のダメージ253と基準体力から推測"},
80700: {quest :"★7イベント：新緑のブルース", hp :"2884", hph :"1.03", def :"1", hosoku :"落石のダメージ144と基準体力から推測"},
80100: {quest :"闘技大会01", hp :"", hph :"", def :"1", hosoku :"2937～3029の間"}
};
var monster_status58 = {
580900: {quest :"★9フリー", hp :"35000", hph :"1", def :"1", hosoku :"落石のダメージ1750から推測"},
580901: {quest :"★9イベント極", hp :"51800", hph :"1.48", def :"1", hosoku :"落石のダメージ2590から推測"}
};
var monster_status11 = {
110300: {quest :"★3闘技場", hp :"2009", hph :"0.82", def :"1", hosoku :"落石のダメージ100と基準体力から推測"},
110301: {quest :"★3闘技場", hp :"2082", hph :"0.85", def :"1", hosoku :"落石のダメージ104と基準体力から推測"},
110302: {quest :"★3闘技場", hp :"2156", hph :"0.88", def :"1", hosoku :"落石のダメージ108　実測値"},
110303: {quest :"★3闘技場", hp :"2229", hph :"0.91", def :"1", hosoku :"落石のダメージ111　実測値"},
110304: {quest :"★3闘技場", hp :"2303", hph :"0.94", def :"1", hosoku :"落石のダメージ115と基準体力から推測"},
110500: {quest :"★5イベント：縄張り争い決定戦", hp :"465", hph :"0.19", def :"1", hosoku :"実測値(2頭目も体力は同じ)"},
110600: {quest :"★6闘技場", hp :"4140", hph :"1.69", def :"1", hosoku :"落石のダメージ207と基準体力から推測"},
110601: {quest :"★6闘技場", hp :"4214", hph :"1.72", def :"1", hosoku :"落石のダメージ211と基準体力から推測"},
110602: {quest :"★6闘技場", hp :"4287", hph :"1.75", def :"1", hosoku :"落石のダメージ214と基準体力から推測"},
110603: {quest :"★6闘技場", hp :"4361", hph :"1.78", def :"1", hosoku :"30分粘って確認できず"},
110604: {quest :"★6闘技場", hp :"4434", hph :"1.81", def :"1", hosoku :"落石のダメージ222と基準体力から推測"},
110900: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3111", hph :"1.27", def :"1", hosoku :"落石のダメージ156と基準体力から推測"},
110901: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3185", hph :"1.3", def :"1", hosoku :"落石のダメージ159と基準体力から推測"},
110902: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3258", hph :"1.33", def :"1", hosoku :"落石のダメージ163と基準体力から推測"},
110903: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3332", hph :"1.36", def :"1", hosoku :"落石のダメージ167と基準体力から推測"},
110904: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3405", hph :"1.39", def :"1", hosoku :"落石のダメージ170と基準体力から推測"}
};
var monster_status56 = {
560900: {quest :"通常", hp :"", hph :"", def :"1", hosoku :"落石のダメージ1500"},
560901: {quest :"歴戦王", hp :"", hph :"", def :"1", hosoku :"落石のダメージ2625"}
};
var monster_status15 = {
150400: {quest :"★4闘技場", hp :"3360", hph :"1.12", def :"1", hosoku :"落石のダメージ168と基準体力から推測"},
150401: {quest :"★4闘技場", hp :"3450", hph :"1.15", def :"1", hosoku :"落石のダメージ173と基準体力から推測"},
150402: {quest :"★4闘技場", hp :"3539", hph :"1.18", def :"1", hosoku :"落石のダメージ177と基準体力と3000ｘ1.18が3539になることから推測"},
150403: {quest :"★4闘技場", hp :"3630", hph :"1.21", def :"1", hosoku :"落石のダメージ182と基準体力から推測"},
150404: {quest :"★4闘技場", hp :"3720", hph :"1.24", def :"1", hosoku :"落石のダメージ186と基準体力から推測"},
150405: {quest :"★5イベント：骨肉の狩り", hp :"2370", hph :"0.79", def :"1", hosoku :"落石のダメージ119と基準体力から推測"},
150600: {quest :"★6闘技場", hp :"5520", hph :"1.84", def :"1", hosoku :"落石のダメージ276と基準体力から推測"},
150601: {quest :"★6闘技場", hp :"5610", hph :"1.87", def :"1", hosoku :"落石のダメージ281と基準体力から推測"},
150602: {quest :"★6闘技場", hp :"5700", hph :"1.9", def :"1", hosoku :"落石のダメージ285と基準体力から推測"},
150603: {quest :"★6闘技場", hp :"5790", hph :"1.93", def :"1", hosoku :"落石のダメージ290と基準体力から推測"},
150604: {quest :"★6闘技場", hp :"5880", hph :"1.96", def :"1", hosoku :"落石のダメージ294と基準体力から推測"},
150700: {quest :"★7イベント：頽廃の谷のオペラ", hp :"3179", hph :"1.06", def :"1", hosoku :"実測値"},
150800: {quest :"★8闘技大会08", hp :"4350", hph :"1.45", def :"1", hosoku :"落石のダメージ218と基準体力から推測"},
150900: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3810", hph :"1.27", def :"1", hosoku :"落石のダメージ191と基準体力から推測"},
150901: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3900", hph :"1.3", def :"1", hosoku :"落石のダメージ195と基準体力から推測"},
150902: {quest :"★9泥土と骨鎚の激突合戦！", hp :"3990", hph :"1.33", def :"1", hosoku :"落石のダメージ200と基準体力から推測"},
150903: {quest :"★9泥土と骨鎚の激突合戦！", hp :"4080", hph :"1.36", def :"1", hosoku :"落石のダメージ204と基準体力から推測"},
150904: {quest :"★9泥土と骨鎚の激突合戦！", hp :"4170", hph :"1.39", def :"1", hosoku :"落石のダメージ209と基準体力から推測"}
};
var monster_status2 = {
20400: {quest :"★4闘技場", hp :"3360", hph :"1.12", def :"1", hosoku :"落石のダメージ168と基準体力から推測"},
20401: {quest :"★4闘技場", hp :"3450", hph :"1.15", def :"1", hosoku :"落石のダメージ173と基準体力から推測"},
20402: {quest :"★4闘技場", hp :"3539", hph :"1.18", def :"1", hosoku :"落石のダメージ177と基準体力と3000ｘ1.18が3539になることから推測"},
20403: {quest :"★4闘技場", hp :"3630", hph :"1.21", def :"1", hosoku :"落石のダメージ182と基準体力から推測"},
20404: {quest :"★4闘技場", hp :"3720", hph :"1.24", def :"1", hosoku :"落石のダメージ186と基準体力から推測"},
20500: {quest :"★5イベント：翼ある者には毒がある", hp :"2370", hph :"0.79", def :"1", hosoku :"土石流のダメージ189と基準体力から推測"},
20600: {quest :"★6闘技場", hp :"5520", hph :"1.84", def :"1", hosoku :"落石のダメージ276と基準体力から推測"},
20601: {quest :"★6闘技場", hp :"5610", hph :"1.87", def :"1", hosoku :"落石のダメージ281と基準体力から推測"},
20602: {quest :"★6闘技場", hp :"5700", hph :"1.9", def :"1", hosoku :"落石のダメージ285と基準体力から推測"},
20603: {quest :"★6闘技場", hp :"5790", hph :"1.93", def :"1", hosoku :"落石のダメージ290と基準体力から推測"},
20604: {quest :"★6闘技場", hp :"5880", hph :"1.96", def :"1", hosoku :"落石のダメージ294と基準体力から推測"}
};
var monster_status51 = {
510700: {quest :"★7闘技場", hp :"5880", hph :"1.96", def :"1", hosoku :"落石のダメージ294と基準体力から推測"},
510701: {quest :"★7闘技場", hp :"5970", hph :"1.99", def :"1", hosoku :"落石のダメージ299と基準体力から推測"},
510702: {quest :"★7闘技場", hp :"6060", hph :"2.02", def :"1", hosoku :"落石のダメージ303と基準体力から推測"},
510703: {quest :"★7闘技場", hp :"6150", hph :"2.05", def :"1", hosoku :"落石のダメージ308と基準体力から推測"},
510704: {quest :"★7闘技場", hp :"6240", hph :"2.08", def :"1", hosoku :"落石のダメージ312と基準体力から推測"},
510705: {quest :"★7イベント：海台のワルツ", hp :"3539", hph :"1.18", def :"1", hosoku :"実測値　浮動小数点の誤差あり"},
510900: {quest :"★9新大陸の空と花", hp :"4080", hph :"1.36", def :"1", hosoku :"落石のダメージ204と基準体力から推測"},
510901: {quest :"★9新大陸の空と花", hp :"4170", hph :"1.39", def :"1", hosoku :"落石のダメージ209と基準体力から推測"},
510902: {quest :"★9新大陸の空と花", hp :"4260", hph :"1.42", def :"1", hosoku :"落石のダメージ213と基準体力から推測"},
510903: {quest :"★9新大陸の空と花", hp :"4350", hph :"1.45", def :"1", hosoku :"落石のダメージ218と基準体力から推測"},
510904: {quest :"★9新大陸の空と花", hp :"4440", hph :"1.48", def :"1", hosoku :"落石のダメージ222と基準体力から推測"}
};
var monster_status1 = {
10500: {quest :"★5闘技場/フリー", hp :"4712", hph :"1.45", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
10501: {quest :"★5闘技場", hp :"4810", hph :"1.48", def :"1", hosoku :"落石のダメージ241と基準体力から推測"},
10502: {quest :"★5闘技場", hp :"4907", hph :"1.51", def :"1", hosoku :"落石のダメージ245と基準体力から推測"},
10503: {quest :"★5闘技場/フリー", hp :"5005", hph :"1.54", def :"1", hosoku :"落石のダメージ250と基準体力から推測"},
10504: {quest :"★5闘技場", hp :"5102", hph :"1.57", def :"1", hosoku :"落石のダメージ255と基準体力から推測"},
10505: {quest :"★5イベント：翼ある者には毒がある", hp :"3250", hph :"1", def :"1", hosoku :"土石流のダメージ260と基準体力から推測"},
10700: {quest :"★7闘技場", hp :"6370", hph :"1.96", def :"1", hosoku :"落石のダメージ319と基準体力から推測"},
10701: {quest :"★7闘技場", hp :"6467", hph :"1.99", def :"1", hosoku :"落石のダメージ323と基準体力から推測"},
10702: {quest :"★7闘技場", hp :"6565", hph :"2.02", def :"1", hosoku :"落石のダメージ328と基準体力から推測"},
10703: {quest :"★7闘技場", hp :"6662", hph :"2.05", def :"1", hosoku :"落石のダメージ333と基準体力から推測"},
10704: {quest :"★7闘技場", hp :"6760", hph :"2.08", def :"1", hosoku :"落石のダメージ338と基準体力から推測"},
10710: {quest :"★7イベント：新緑のブルース", hp :"3835", hph :"1.18", def :"1", hosoku :"土石流のダメージ306と基準体力から推測"},
10712: {quest :"★7イベント：空飛ぶ者に恐れはいらぬ", hp :"4322", hph :"1.33", def :"1", hosoku :"落石のダメージ216と基準体力から推測"},
10750: {quest :"★7チャレンジ：森に潜む者達", hp :"4907", hph :"1.51", def :"1", hosoku :"落石のダメージ245と基準体力から推測"},
10900: {quest :"★9新大陸の白き風", hp :"4420", hph :"1.36", def :"1", hosoku :"落石のダメージ221と基準体力から推測"},
10901: {quest :"★9新大陸の白き風", hp :"4517", hph :"1.39", def :"1", hosoku :"落石のダメージ226と基準体力から推測"},
10902: {quest :"★9新大陸の白き風", hp :"4615", hph :"1.42", def :"1", hosoku :"撃龍槍のダメージ369と基準体力から推測"},
10903: {quest :"★9新大陸の白き風", hp :"4712", hph :"1.45", def :"1", hosoku :"撃龍槍のダメージ377と基準体力から推測"},
10904: {quest :"★9新大陸の白き風", hp :"4810", hph :"1.48", def :"1", hosoku :"落石のダメージ241と基準体力から推測"}
};
var monster_status52 = {
520700: {quest :"★7闘技場", hp :"6370", hph :"1.96", def :"1", hosoku :"落石のダメージ319と基準体力から推測"},
520701: {quest :"★7闘技場", hp :"6467", hph :"1.99", def :"1", hosoku :"落石のダメージ323と基準体力から推測"},
520702: {quest :"★7闘技場", hp :"6565", hph :"2.02", def :"1", hosoku :"落石のダメージ328と基準体力から推測"},
520703: {quest :"★7闘技場", hp :"6662", hph :"2.05", def :"1", hosoku :"落石のダメージ333と基準体力から推測"},
520704: {quest :"★7闘技場", hp :"6760", hph :"2.08", def :"1", hosoku :"落石のダメージ338と基準体力から推測"},
520710: {quest :"★7イベクエ：結晶達のロックンロール", hp :"3835", hph :"1.18", def :"1", hosoku :"落石のダメージ192と基準体力から推測"},
520712: {quest :"★7イベント：空飛ぶ者に恐れはいらぬ", hp :"4322", hph :"1.33", def :"1", hosoku :"落石のダメージ216と基準体力から推測"},
520714: {quest :"★7イベント：ＵＳＪ・燃えよ、蒼き星達！", hp :"3445", hph :"1.06", def :"1", hosoku :"落石のダメージ172と基準体力から推測"},
520900: {quest :"★9新大陸の空と花", hp :"4420", hph :"1.36", def :"1", hosoku :"落石のダメージ221と基準体力から推測"},
520901: {quest :"★9新大陸の空と花", hp :"4517", hph :"1.39", def :"1", hosoku :"落石のダメージ226と基準体力から推測"},
520902: {quest :"★9新大陸の空と花", hp :"4615", hph :"1.42", def :"1", hosoku :"落石のダメージ231と基準体力から推測"},
520903: {quest :"★9新大陸の空と花", hp :"4712", hph :"1.45", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
520904: {quest :"★9新大陸の空と花", hp :"4810", hph :"1.48", def :"1", hosoku :"落石のダメージ241と基準体力から推測"},
520910: {quest :"★9イベント：調査（蛮顎竜、蒼火竜）", hp :"4615", hph :"1.42", def :"1", hosoku :"土石流のダメージ369と基準体力から推測"}
};
var monster_status5 = {
50500: {quest :"★5闘技場", hp :"4350", hph :"1.45", def :"1", hosoku :"落石のダメージ218と基準体力から推測"},
50501: {quest :"★5闘技場", hp :"4440", hph :"1.48", def :"1", hosoku :"落石のダメージ222と基準体力から推測"},
50502: {quest :"★5闘技場", hp :"4530", hph :"1.51", def :"1", hosoku :"落石のダメージ227と基準体力から推測"},
50503: {quest :"★5闘技場", hp :"4620", hph :"1.54", def :"1", hosoku :"落石のダメージ231と基準体力から推測"},
50504: {quest :"★5闘技場", hp :"4710", hph :"1.57", def :"1", hosoku :"落石のダメージ236と基準体力から推測"},
50700: {quest :"★7闘技場", hp :"5880", hph :"1.96", def :"1", hosoku :"落石のダメージ294と基準体力から推測"},
50701: {quest :"★7闘技場", hp :"5970", hph :"1.99", def :"1", hosoku :"落石のダメージ299と基準体力から推測"},
50702: {quest :"★7闘技場", hp :"6060", hph :"2.02", def :"1", hosoku :"落石のダメージ303と基準体力から推測"},
50703: {quest :"★7闘技場", hp :"6150", hph :"2.05", def :"1", hosoku :"落石のダメージ308と基準体力から推測"},
50704: {quest :"★7闘技場", hp :"6240", hph :"2.08", def :"1", hosoku :"落石のダメージ312と基準体力から推測"},
50705: {quest :"★7イベント：海台のワルツ", hp :"3539", hph :"1.18", def :"1", hosoku :"実測値　浮動小数点の誤差あり"},
50900: {quest :"★9新大陸の白き風", hp :"4080", hph :"1.36", def :"1", hosoku :"落石のダメージ204と基準体力から推測"},
50901: {quest :"★9新大陸の白き風", hp :"4170", hph :"1.39", def :"1", hosoku :"落石のダメージ209と基準体力から推測"},
50902: {quest :"★9新大陸の白き風", hp :"4260", hph :"1.42", def :"1", hosoku :"落石のダメージ213と基準体力から推測"},
50903: {quest :"★9新大陸の白き風", hp :"4350", hph :"1.45", def :"1", hosoku :"落石のダメージ218と基準体力から推測"},
50904: {quest :"★9新大陸の白き風", hp :"4440", hph :"1.48", def :"1", hosoku :"落石のダメージ222と基準体力から推測"}
};
var monster_status59 = {
590000: {quest :"上位", hp :"11700", hph :"1", def :"1", hosoku :"落石のダメージ585から推測"}
};
var monster_status30 = {
300000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status29 = {
290000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status53 = {
530000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status54 = {
540000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status23 = {
230000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status37 = {
370000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status25 = {
250400: {quest :"★4フリー", hp :"", hph :"1", def :"1", hosoku :""},
250600: {quest :"★6フリー", hp :"240", hph :"1.6", def :"1", hosoku :""},
260601: {quest :"★6イベント：ドドド三兄弟", hp :"240", hph :"1.6", def :"1", hosoku :""}
};
var monster_status32 = {
320200: {quest :"★2調査", hp :"12", hph :"0.1", def :"1", hosoku :""},
320201: {quest :"★2調査", hp :"12", hph :"0.1", def :"1", hosoku :""},
320202: {quest :"★2調査", hp :"120", hph :"1", def :"1", hosoku :""},
320203: {quest :"★2調査", hp :"120", hph :"1", def :"1", hosoku :""},
320230: {quest :"★2イベント：大食らい共が参る！", hp :"120", hph :"1", def :"1", hosoku :""},
320500: {quest :"★5イベント：翼ある者には毒がある", hp :"120", hph :"1", def :"1", hosoku :""},
320600: {quest :"★6フリー", hp :"192", hph :"1.6", def :"1", hosoku :"固定？"}
};
var monster_status33 = {
330200: {quest :"★2フリー", hp :"90", hph :"1", def :"1", hosoku :""},
330201: {quest :"★2調査", hp :"9", hph :"0.1", def :"1", hosoku :""},
330202: {quest :"★2調査", hp :"9", hph :"0.1", def :"1", hosoku :""},
330203: {quest :"★2調査", hp :"90", hph :"1", def :"1", hosoku :""},
330204: {quest :"★2調査", hp :"90", hph :"1", def :"1", hosoku :""}
};
var monster_status32 = {
330230: {quest :"★2イベント：大食らい共が参る！", hp :"90", hph :"1", def :"1", hosoku :""}
};
var monster_status33 = {
320500: {quest :"★5イベント：翼ある者には毒がある", hp :"90", hph :"1", def :"1", hosoku :""},
320600: {quest :"★6フリー", hp :"144", hph :"1.6", def :"1", hosoku :"固定？"}
};
var monster_status31 = {
310000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status16 = {
160900: {quest :"エンシェント・レーシェンに召喚された個体", hp :"480", hph :"8", def :"1", hosoku :"頭の怯み303～305（予測）"}
};
var monster_status24 = {
240000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status39 = {
390000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status55 = {
550000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status38 = {
380000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status49 = {
490000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status40 = {
400800: {quest :"★8フリー", hp :"160", hph :"1.6", def :"1", hosoku :""}
};
var monster_status36 = {
360000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}
};
var monster_status41 = {
410000: {quest :"", hp :"100", hph :"", def :"1", hosoku :""}
};
var monster_status42 = {
420000: {quest :"", hp :"300", hph :"", def :"1", hosoku :""}
};
var monster_status43 = {
430000: {quest :"", hp :"300", hph :"", def :"1", hosoku :""}
};
var monster_status44 = {
440000: {quest :"", hp :"", hph :"", def :"1", hosoku :""}};

var mon_value = $('#mon option:selected').val();

if(mon_value == 1){ var array_mon = monster_status1;}
if(mon_value == 2){ var array_mon = monster_status2;}
if(mon_value == 3){ var array_mon = monster_status3;}
if(mon_value == 4){ var array_mon = monster_status4;}
if(mon_value == 5){ var array_mon = monster_status5;}
if(mon_value == 6){ var array_mon = monster_status6;}
if(mon_value == 7){ var array_mon = monster_status7;}
if(mon_value == 8){ var array_mon = monster_status8;}
if(mon_value == 9){ var array_mon = monster_status9;}
if(mon_value == 10){ var array_mon = monster_status10;}
if(mon_value == 11){ var array_mon = monster_status11;}
if(mon_value == 12){ var array_mon = monster_status12;}
if(mon_value == 13){ var array_mon = monster_status13;}
if(mon_value == 14){ var array_mon = monster_status14;}
if(mon_value == 15){ var array_mon = monster_status15;}
if(mon_value == 16){ var array_mon = monster_status16;}
if(mon_value == 17){ var array_mon = monster_status17;}
if(mon_value == 18){ var array_mon = monster_status18;}
if(mon_value == 19){ var array_mon = monster_status19;}
if(mon_value == 20){ var array_mon = monster_status20;}
if(mon_value == 21){ var array_mon = monster_status21;}
if(mon_value == 22){ var array_mon = monster_status22;}
if(mon_value == 23){ var array_mon = monster_status23;}
if(mon_value == 24){ var array_mon = monster_status24;}
if(mon_value == 25){ var array_mon = monster_status25;}
if(mon_value == 26){ var array_mon = monster_status26;}
if(mon_value == 27){ var array_mon = monster_status27;}
if(mon_value == 28){ var array_mon = monster_status28;}
if(mon_value == 29){ var array_mon = monster_status29;}
if(mon_value == 30){ var array_mon = monster_status30;}
if(mon_value == 31){ var array_mon = monster_status31;}
if(mon_value == 32){ var array_mon = monster_status32;}
if(mon_value == 33){ var array_mon = monster_status33;}
if(mon_value == 34){ var array_mon = monster_status34;}
if(mon_value == 35){ var array_mon = monster_status35;}
if(mon_value == 36){ var array_mon = monster_status36;}
if(mon_value == 37){ var array_mon = monster_status37;}
if(mon_value == 38){ var array_mon = monster_status38;}
if(mon_value == 39){ var array_mon = monster_status39;}
if(mon_value == 40){ var array_mon = monster_status40;}
if(mon_value == 41){ var array_mon = monster_status41;}
if(mon_value == 42){ var array_mon = monster_status42;}
if(mon_value == 43){ var array_mon = monster_status43;}
if(mon_value == 44){ var array_mon = monster_status44;}
if(mon_value == 45){ var array_mon = monster_status45;}
if(mon_value == 46){ var array_mon = monster_status46;}
if(mon_value == 47){ var array_mon = monster_status47;}
if(mon_value == 48){ var array_mon = monster_status48;}
if(mon_value == 49){ var array_mon = monster_status49;}
if(mon_value == 50){ var array_mon = monster_status50;}
if(mon_value == 51){ var array_mon = monster_status51;}
if(mon_value == 52){ var array_mon = monster_status52;}
if(mon_value == 53){ var array_mon = monster_status53;}
if(mon_value == 54){ var array_mon = monster_status54;}
if(mon_value == 55){ var array_mon = monster_status55;}
if(mon_value == 56){ var array_mon = monster_status56;}
if(mon_value == 57){ var array_mon = monster_status57;}
if(mon_value == 58){ var array_mon = monster_status58;}
if(mon_value == 59){ var array_mon = monster_status59;}
if(mon_value == 60){ var array_mon = monster_status60;}
if(mon_value == 61){ var array_mon = monster_status61;}
if(mon_value == 62){ var array_mon = monster_status62;}
if(mon_value == 63){ var array_mon = monster_status63;}
if(mon_value == 64){ var array_mon = monster_status64;}
if(mon_value == 65){ var array_mon = monster_status65;}
if(mon_value == 66){ var array_mon = monster_status66;}
if(mon_value == 67){ var array_mon = monster_status67;}
if(mon_value == 68){ var array_mon = monster_status68;}
if(mon_value == 69){ var array_mon = monster_status69;}
if(mon_value == 70){ var array_mon = monster_status70;}
if(mon_value == 71){ var array_mon = monster_status71;}
if(mon_value == 72){ var array_mon = monster_status72;}
if(mon_value == 73){ var array_mon = monster_status73;}
if(mon_value == 74){ var array_mon = monster_status74;}
if(mon_value == 75){ var array_mon = monster_status75;}
if(mon_value == 76){ var array_mon = monster_status76;}
if(mon_value == 77){ var array_mon = monster_status77;}
if(mon_value == 78){ var array_mon = monster_status78;}
if(mon_value == 79){ var array_mon = monster_status79;}
if(mon_value == 80){ var array_mon = monster_status80;}
if(mon_value == 81){ var array_mon = monster_status81;}
if(mon_value == 82){ var array_mon = monster_status82;}
if(mon_value == 83){ var array_mon = monster_status83;}
if(mon_value == 84){ var array_mon = monster_status84;}
if(mon_value == 85){ var array_mon = monster_status85;}
if(mon_value == 86){ var array_mon = monster_status86;}
if(mon_value == 87){ var array_mon = monster_status87;}
if(mon_value == 88){ var array_mon = monster_status88;}
if(mon_value == 89){ var array_mon = monster_status89;}
if(mon_value == 90){ var array_mon = monster_status90;}
if(mon_value == 91){ var array_mon = monster_status91;}
if(mon_value == 92){ var array_mon = monster_status92;}
if(mon_value == 93){ var array_mon = monster_status93;}
if(mon_value == 94){ var array_mon = monster_status94;}
if(mon_value == 95){ var array_mon = monster_status95;}
if(mon_value == 96){ var array_mon = monster_status96;}
if(mon_value == 97){ var array_mon = monster_status97;}
if(mon_value == 98){ var array_mon = monster_status98;}
if(mon_value == 99){ var array_mon = monster_status99;}
if(mon_value == 100){ var array_mon = monster_status100;}
if(mon_value == 101){ var array_mon = monster_status101;}
if(mon_value == 102){ var array_mon = monster_status102;}
if(mon_value == 103){ var array_mon = monster_status103;}
if(mon_value == 104){ var array_mon = monster_status104;}
if(mon_value == 105){ var array_mon = monster_status105;}
if(mon_value == 106){ var array_mon = monster_status106;}
if(mon_value == 107){ var array_mon = monster_status107;}
if(mon_value == 108){ var array_mon = monster_status108;}
if(mon_value == 109){ var array_mon = monster_status109;}
if(mon_value == 110){ var array_mon = monster_status110;}
if(mon_value == 111){ var array_mon = monster_status111;}
if(mon_value == 112){ var array_mon = monster_status112;}
if(mon_value == 113){ var array_mon = monster_status113;}
if(mon_value == 114){ var array_mon = monster_status114;}
if(mon_value == 115){ var array_mon = monster_status115;}
if(mon_value == 116){ var array_mon = monster_status116;}
if(mon_value == 117){ var array_mon = monster_status117;}
if(mon_value == 118){ var array_mon = monster_status118;}
if(mon_value == 119){ var array_mon = monster_status119;}
if(mon_value == 120){ var array_mon = monster_status120;}
if(mon_value == 121){ var array_mon = monster_status121;}
if(mon_value == 122){ var array_mon = monster_status122;}
if(mon_value == 123){ var array_mon = monster_status123;}
if(mon_value == 124){ var array_mon = monster_status124;}
if(mon_value == 125){ var array_mon = monster_status125;}
if(mon_value == 126){ var array_mon = monster_status126;}
if(mon_value == 127){ var array_mon = monster_status127;}
if(mon_value == 128){ var array_mon = monster_status128;}
if(mon_value == 129){ var array_mon = monster_status129;}
if(mon_value == 130){ var array_mon = monster_status130;}
if(mon_value == 131){ var array_mon = monster_status131;}
if(mon_value == 132){ var array_mon = monster_status132;}
if(mon_value == 133){ var array_mon = monster_status133;}
if(mon_value == 134){ var array_mon = monster_status134;}
if(mon_value == 135){ var array_mon = monster_status135;}
if(mon_value == 136){ var array_mon = monster_status136;}
if(mon_value == 137){ var array_mon = monster_status137;}
if(mon_value == 138){ var array_mon = monster_status138;}
if(mon_value == 139){ var array_mon = monster_status139;}
if(mon_value == 140){ var array_mon = monster_status140;}
if(mon_value == 141){ var array_mon = monster_status141;}
if(mon_value == 142){ var array_mon = monster_status142;}
if(mon_value == 143){ var array_mon = monster_status143;}
if(mon_value == 144){ var array_mon = monster_status144;}
if(mon_value == 145){ var array_mon = monster_status145;}
if(mon_value == 146){ var array_mon = monster_status146;}
if(mon_value == 147){ var array_mon = monster_status147;}
if(mon_value == 148){ var array_mon = monster_status148;}
if(mon_value == 149){ var array_mon = monster_status149;}
if(mon_value == 150){ var array_mon = monster_status150;}
if(mon_value == 151){ var array_mon = monster_status151;}
if(mon_value == 152){ var array_mon = monster_status152;}
if(mon_value == 153){ var array_mon = monster_status153;}
if(mon_value == 154){ var array_mon = monster_status154;}
if(mon_value == 155){ var array_mon = monster_status155;}
if(mon_value == 156){ var array_mon = monster_status156;}
if(mon_value == 157){ var array_mon = monster_status157;}
if(mon_value == 158){ var array_mon = monster_status158;}
if(mon_value == 159){ var array_mon = monster_status159;}
if(mon_value == 160){ var array_mon = monster_status160;}
if(mon_value == 161){ var array_mon = monster_status161;}
if(mon_value == 162){ var array_mon = monster_status162;}
if(mon_value == 163){ var array_mon = monster_status163;}
if(mon_value == 164){ var array_mon = monster_status164;}
if(mon_value == 165){ var array_mon = monster_status165;}
if(mon_value == 166){ var array_mon = monster_status166;}
if(mon_value == 167){ var array_mon = monster_status167;}
if(mon_value == 168){ var array_mon = monster_status168;}
if(mon_value == 169){ var array_mon = monster_status169;}
if(mon_value == 170){ var array_mon = monster_status170;}
if(mon_value == 171){ var array_mon = monster_status171;}
if(mon_value == 172){ var array_mon = monster_status172;}
if(mon_value == 173){ var array_mon = monster_status173;}
if(mon_value == 174){ var array_mon = monster_status174;}
if(mon_value == 175){ var array_mon = monster_status175;}
if(mon_value == 176){ var array_mon = monster_status176;}
if(mon_value == 177){ var array_mon = monster_status177;}
if(mon_value == 178){ var array_mon = monster_status178;}
if(mon_value == 179){ var array_mon = monster_status179;}
if(mon_value == 180){ var array_mon = monster_status180;}
if(mon_value == 181){ var array_mon = monster_status181;}
if(mon_value == 182){ var array_mon = monster_status182;}
if(mon_value == 183){ var array_mon = monster_status183;}
if(mon_value == 184){ var array_mon = monster_status184;}
if(mon_value == 185){ var array_mon = monster_status185;}
if(mon_value == 186){ var array_mon = monster_status186;}
if(mon_value == 187){ var array_mon = monster_status187;}
if(mon_value == 188){ var array_mon = monster_status188;}
if(mon_value == 189){ var array_mon = monster_status189;}
if(mon_value == 190){ var array_mon = monster_status190;}
if(mon_value == 191){ var array_mon = monster_status191;}
if(mon_value == 192){ var array_mon = monster_status192;}
if(mon_value == 193){ var array_mon = monster_status193;}
if(mon_value == 194){ var array_mon = monster_status194;}
if(mon_value == 195){ var array_mon = monster_status195;}
if(mon_value == 196){ var array_mon = monster_status196;}
if(mon_value == 197){ var array_mon = monster_status197;}
if(mon_value == 198){ var array_mon = monster_status198;}
if(mon_value == 199){ var array_mon = monster_status199;}
if(mon_value == 200){ var array_mon = monster_status200;}
if(mon_value == 201){ var array_mon = monster_status201;}
if(mon_value == 202){ var array_mon = monster_status202;}
if(mon_value == 203){ var array_mon = monster_status203;}
if(mon_value == 204){ var array_mon = monster_status204;}
if(mon_value == 205){ var array_mon = monster_status205;}
if(mon_value == 206){ var array_mon = monster_status206;}
if(mon_value == 207){ var array_mon = monster_status207;}
//モンスターのステータスを削除
$('select#ams option').remove();
$('#ams').append('<option value="">몬스터 스테이터스');
//モンスターのステータスを追加
$.each(array_mon, function(i, value) {

if(value["def"] == 1){
	value["def"] = "1.00";
}

//$('#ams').append('<option value="' + value[i] + '">体力' + value["hp"] + "　体力補正" + value["hph"] + "　全体防御率" + value["def"] + "　" + value["quest"] + "　" + value["hosoku"]);
$('#ams').append('<option value="' + i + '">체력' + value["hp"] + "　체력보정" + value["hph"] + "　전체방어율" + value["def"] + "　" + value["quest"]);
});


//モンスターが選択された時に全体防御率を1.00にする
$('input[name="def"]').val("1.00");

});
//モンスターが選択された時～ここまで

//モンスターのステータスから全体防御率を自動入力する
$('#ams').change(function(){
var text = $('#ams option:selected').text();
if(text.indexOf("全体防御率1.15") != -1){
  $('input[name="def"]').val("1.15");

}else if(text.indexOf("全体防御率1.1") != -1){
  $('input[name="def"]').val("1.1");

}else if(text.indexOf("全体防御率1.05") != -1){
  $('input[name="def"]').val("1.05");

}else if(text.indexOf("全体防御率0.95") != -1){
  $('input[name="def"]').val("0.95");

}else if(text.indexOf("全体防御率0.9") != -1){
  $('input[name="def"]').val("0.9");

}else if(text.indexOf("全体防御率0.7") != -1){
  $('input[name="def"]').val("0.7");

}else{
  $('input[name="def"]').val("1.00");
}
});
});//終点