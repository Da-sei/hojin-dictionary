export type Company = {
  corporateNumber: string;
  name: string;
  nameKana: string;
  prefecture: string;
  address: string;
};

// 法人番号は表示用のダミー値（実在の番号ではありません）
function corporateNumber(seed: number): string {
  return String(4_010_001_000_000 + seed * 91).padStart(13, "0");
}

const RAW: Omit<Company, "corporateNumber">[] = [
  { name: "株式会社朝陽物流", nameKana: "カブシキガイシャ チョウヨウブツリュウ", prefecture: "北海道", address: "札幌市中央区北一条西三丁目2-5" },
  { name: "有限会社みどり工業", nameKana: "ユウゲンガイシャ ミドリコウギョウ", prefecture: "青森県", address: "青森市新町二丁目1-10" },
  { name: "合同会社北斗テクノロジー", nameKana: "ゴウドウガイシャ ホクトテクノロジー", prefecture: "宮城県", address: "仙台市青葉区一番町三丁目4-8" },
  { name: "株式会社つばめ製作所", nameKana: "カブシキガイシャ ツバメセイサクショ", prefecture: "秋田県", address: "秋田市山王四丁目2-3" },
  { name: "株式会社白鷺商事", nameKana: "カブシキガイシャ シラサギショウジ", prefecture: "山形県", address: "山形市七日町二丁目1-15" },
  { name: "有限会社湊フーズ", nameKana: "ユウゲンガイシャ ミナトフーズ", prefecture: "福島県", address: "郡山市駅前一丁目6-2" },
  { name: "株式会社蒼穹システムズ", nameKana: "カブシキガイシャ ソウキュウシステムズ", prefecture: "茨城県", address: "水戸市三の丸一丁目3-9" },
  { name: "株式会社若葉建設", nameKana: "カブシキガイシャ ワカバケンセツ", prefecture: "栃木県", address: "宇都宮市馬場通り四丁目2-1" },
  { name: "合同会社千歳電機", nameKana: "ゴウドウガイシャ チトセデンキ", prefecture: "群馬県", address: "前橋市本町二丁目5-4" },
  { name: "株式会社陽炎デザイン", nameKana: "カブシキガイシャ カゲロウデザイン", prefecture: "埼玉県", address: "さいたま市浦和区高砂三丁目1-7" },
  { name: "株式会社楓ホールディングス", nameKana: "カブシキガイシャ カエデホールディングス", prefecture: "千葉県", address: "千葉市中央区富士見二丁目3-11" },
  { name: "有限会社瑞穂ファーマ", nameKana: "ユウゲンガイシャ ミズホファーマ", prefecture: "東京都", address: "千代田区丸の内一丁目9-2" },
  { name: "株式会社響精密", nameKana: "カブシキガイシャ ヒビキセイミツ", prefecture: "東京都", address: "大田区蒲田五丁目13-1" },
  { name: "株式会社悠久エンジニアリング", nameKana: "カブシキガイシャ ユウキュウエンジニアリング", prefecture: "神奈川県", address: "横浜市西区みなとみらい四丁目6-2" },
  { name: "合同会社燦メディカル", nameKana: "ゴウドウガイシャ サンメディカル", prefecture: "神奈川県", address: "川崎市川崎区駅前本町2-8" },
  { name: "株式会社常盤農産", nameKana: "カブシキガイシャ トキワノウサン", prefecture: "新潟県", address: "新潟市中央区東大通二丁目1-6" },
  { name: "株式会社弥生印刷", nameKana: "カブシキガイシャ ヤヨイインサツ", prefecture: "富山県", address: "富山市桜町一丁目3-4" },
  { name: "有限会社銀河水産", nameKana: "ユウゲンガイシャ ギンガスイサン", prefecture: "石川県", address: "金沢市香林坊二丁目2-9" },
  { name: "株式会社東雲商会", nameKana: "カブシキガイシャ シノノメショウカイ", prefecture: "福井県", address: "福井市中央一丁目4-3" },
  { name: "株式会社水無月工業", nameKana: "カブシキガイシャ ミナヅキコウギョウ", prefecture: "山梨県", address: "甲府市丸の内二丁目1-1" },
  { name: "合同会社葦原物流", nameKana: "ゴウドウガイシャ アシハラブツリュウ", prefecture: "長野県", address: "長野市南長野北石堂町5-6" },
  { name: "株式会社錦秋電機", nameKana: "カブシキガイシャ キンシュウデンキ", prefecture: "岐阜県", address: "岐阜市神田町三丁目8-2" },
  { name: "株式会社天狼テクノロジー", nameKana: "カブシキガイシャ テンロウテクノロジー", prefecture: "静岡県", address: "静岡市葵区呉服町一丁目7-3" },
  { name: "有限会社一心商店", nameKana: "ユウゲンガイシャ イッシンショウテン", prefecture: "愛知県", address: "名古屋市中区栄三丁目5-12" },
  { name: "株式会社清流フーズ", nameKana: "カブシキガイシャ セイリュウフーズ", prefecture: "三重県", address: "津市中央二丁目4-5" },
  { name: "株式会社紫苑デザイン", nameKana: "カブシキガイシャ シオンデザイン", prefecture: "滋賀県", address: "大津市浜大津一丁目2-8" },
  { name: "合同会社雅楽建設", nameKana: "ゴウドウガイシャ ウガケンセツ", prefecture: "京都府", address: "京都市中京区烏丸通御池上ル" },
  { name: "株式会社浪速商事", nameKana: "カブシキガイシャ ナニワショウジ", prefecture: "大阪府", address: "大阪市北区梅田三丁目1-3" },
  { name: "株式会社六甲物流", nameKana: "カブシキガイシャ ロッコウブツリュウ", prefecture: "兵庫県", address: "神戸市中央区三宮町二丁目11-1" },
  { name: "有限会社大和路農産", nameKana: "ユウゲンガイシャ ヤマトジノウサン", prefecture: "奈良県", address: "奈良市登大路町4-2" },
  { name: "株式会社紀州水産", nameKana: "カブシキガイシャ キシュウスイサン", prefecture: "和歌山県", address: "和歌山市友田町四丁目3-6" },
  { name: "株式会社出雲工業", nameKana: "カブシキガイシャ イズモコウギョウ", prefecture: "島根県", address: "松江市殿町2-1" },
  { name: "合同会社吉備電機", nameKana: "ゴウドウガイシャ キビデンキ", prefecture: "岡山県", address: "岡山市北区本町三丁目1-8" },
  { name: "株式会社厳島商会", nameKana: "カブシキガイシャ イツクシマショウカイ", prefecture: "広島県", address: "広島市中区紙屋町二丁目5-9" },
  { name: "株式会社周防印刷", nameKana: "カブシキガイシャ スオウインサツ", prefecture: "山口県", address: "山口市中央一丁目2-3" },
  { name: "有限会社阿波藍染", nameKana: "ユウゲンガイシャ アワアイゾメ", prefecture: "徳島県", address: "徳島市寺島本町西一丁目1-5" },
];

export const COMPANIES: Company[] = RAW.map((c, i) => ({
  ...c,
  corporateNumber: corporateNumber(i + 1),
}));
