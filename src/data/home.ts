export interface HomeTile {
  icon: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}

export const homeTiles: HomeTile[] = [
  { icon: 'fa-user', title: '自己紹介', description: 'じこしょうかい', href: '/profile/' },
  { icon: 'fa-check-square-o', title: '活動', description: '趣味やイベントの製作', href: '/portfolio-type/activity/' },
  { icon: 'fa-pencil', title: '研究', description: '発表した成果', href: '/portfolio-type/research/' },
  { icon: 'fa-group', title: '意識中くらい-mloa-', description: '大学の同級生とチームを組んでいます', href: '/mloa/' },
  { icon: 'fa-smile-o', title: 'ボードゲーム製作', description: 'サークル fumble waalsで活動', href: 'http://fumblewaals.com/', external: true },
];
