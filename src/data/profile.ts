export interface ProfileLink {
  label: string;
  href: string;
}

export interface ProfileItem {
  icon?: string;
  text?: string;
  links?: ProfileLink[];
}

export const name = { ja: '大場直史', en: 'Naoshi Ooba' };

export const photo = '/images/uploads/2017/07/profile-300x300.jpg';

export const basicInfo: ProfileItem[] = [
  { text: name.en },
  { icon: 'fa-calendar', text: '1993/12/27' },
  { icon: 'fa-map-marker', text: 'Akihabara, Tokyo' },
  { icon: 'fa-envelope', text: 'nooba704@gmail.com' },
  {
    icon: 'fa-pencil',
    text: '明治大学大学院先端数理科学研究科先端メディアサイエンス専攻\n宮下研究室',
  },
  { icon: 'fa-suitcase', text: 'webエンジニア' },
  {
    icon: 'fa-group',
    links: [
      { label: '意識中くらい', href: 'http://mloa.github.io/' },
      { label: 'ファンブルワールス', href: 'http://fumblewaals.com/' },
    ],
  },
  { icon: 'fa-twitter', links: [{ label: '@frog_aboon', href: 'https://twitter.com/frog_aboon/' }] },
  { icon: 'fa-github', links: [{ label: '@shisoAqron', href: 'https://github.com/shisoAqron/' }] },
  { icon: 'fa-book', links: [{ label: '鞭打つカエル', href: 'http://shisoaqron.hateblo.jp/' }] },
];

export interface Section {
  title: string;
  ordered: boolean;
  items: (string | ProfileLink)[];
}

export const sections: Section[] = [
  {
    title: '学歴',
    ordered: false,
    items: [
      '1993年12月 誕生',
      '2006年3月 川越市立月越小学校 卒業',
      '2009年3月 川越市立初雁中学校 卒業',
      '2012年3月 埼玉県立川越高校 卒業',
      '2013年4月 明治大学総合数理学部先端メディアサイエンス学科 入学',
      '2017年3月 明治大学総合数理学部先端メディアサイエンス学科 卒業',
      '2017年4月 明治大学院先端数理科学研究科先端メディアサイエンス専攻 入学・宮下研究室所属',
      '2019年3月 明治大学院先端数理科学研究科先端メディアサイエンス専攻 卒業',
      '現在はweb・インフラのエンジニアとして勤務',
    ],
  },
  {
    title: 'Publish',
    ordered: true,
    items: [
      {
        label:
          '大場直史,宮下芳明.ゲームにおけるプレイヤ戦略の床清掃ロボットへの適用.第23回インタラクティブシステムとソフトウェアに関するワークショップ (WISS2015) 論文集, pp.145-146,2015.',
        href: '/portfolio/gamification_with_cleaningrobot/',
      },
      {
        label:
          '大場直史,宮下芳明.レーザカットによるぜんまいばね製作とその性能評価.インタラクション2017論文集, pp.838-843, 2017.',
        href: '/portfolio/spring/',
      },
      {
        label:
          '大場 直史, 青山 一真, 中村 裕美, 宮下芳明. 無限電気味覚ガム：圧電素子の咬合を用いた口腔内電気味覚装置. インタラクション2018 論文集, pp.587–590, 2018.',
        href: '/portfolio/unlimitedelectricgum/',
      },
      {
        label:
          'Naoshi Ooba, Kazuma Aoyama, Hiromi Nakamura, Homei Miyashita. Unlimited Electric Gum: A Piezo-based Electric Taste Apparatus Activated by Chewing, Adjunct Proceedings of the 31st Annual Symposium on User Interface Software and Technology, pp.157-159, 2018.',
        href: '/portfolio/unlimitedelectricgum/',
      },
    ],
  },
  {
    title: 'Works',
    ordered: true,
    items: [
      { label: 'レーザカッター燻製.ABPro2016,2016.', href: '/portfolio/lasecutter_smoking/' },
      { label: 'iPodアプリのDDRを足で踏む.ABPro2016,2016.', href: '/portfolio/ddr/' },
      { label: '急速徳チャージマシン.ABPro2017,2017.', href: '/portfolio/toku/' },
      { label: 'BuddaBeautify.メディアアート特論,2016.', href: '/portfolio/buddabeautify/' },
      { label: 'Oh!RIGAMI!.映像アニメーション表現,2016.', href: '/portfolio/ohrigami/' },
      { label: 'Boroseaue.コンピュータミュージック,2016.', href: '/portfolio/boroseque/' },
      { label: '実世界ふかそうち.2017.', href: '/portfolio/tamago/' },
      { label: 'Muscle-Breeder.ABPro2018,2018.', href: '/portfolio/muscle-breeder/' },
    ],
  },
  {
    title: '部活動等',
    ordered: false,
    items: [
      '小学1~4年 サッカークラブ 川越SS',
      '小学5~6年 川越市児童センターこどもの城 将棋クラブ',
      '小学1~6年 ピアノ',
      '中学1~3年 川越市立初雁中学校 陸上部',
      '高校1~3年 埼玉県立川越高校 古典ギター部',
      '大学1~4年 明治大学 総合コンテンツ制作サークル',
      '大学3年~ fumble waals(ボードゲーム製作)',
    ],
  },
  {
    title: '職歴等',
    ordered: false,
    items: [
      '2016年11月~2019年2月 想隆社 アルバイト',
      '2017年8月21日~9月1日 株式会社フェリックス 中期インターン',
      '2019年よりwebエンジニア',
    ],
  },
];
