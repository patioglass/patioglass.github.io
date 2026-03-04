import { atom } from 'jotai';

export interface WorkLink {
  label: string;
  url: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  links?: WorkLink[];
  tags?: string[];
  isCommission?: boolean; // 依頼物かどうか
  date?: string; // 制作日（YYYY-MM-DD形式）
}

export interface BioEntry {
  id: string;
  year: string;
  content: string;
}

// タグの選択肢
export const tagOptions = ['すべて', '絵・漫画', '音楽', 'プログラミング', 'その他'] as const;

export const worksAtom = atom<Work[]>([]);
export const bioAtom = atom<BioEntry[]>([]);
export const loadingAtom = atom<boolean>(false);
export const selectedTagAtom = atom<string>('すべて');
export const showCommissionOnlyAtom = atom<boolean>(false); // 依頼物のみ表示
export const includeSecondaryCreationAtom = atom<boolean>(false); // 二次創作を含める
export const viewModeAtom = atom<'list' | 'grid'>('grid'); // 表示形式（リスト/タイル）

// タグごとの色を取得する関数
export const getTagColor = (tag: string): string => {
  switch (tag) {
    case '絵・漫画':
      return 'bg-pink-100 text-pink-700';
    case 'プログラミング':
      return 'bg-blue-100 text-blue-700';
    case '音楽':
      return 'bg-purple-100 text-purple-700';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

// ローカルJSONからWorksデータを取得する関数
// データはGitHub Actionsで定期的に更新される
export const fetchWorks = async (): Promise<Work[]> => {
  const response = await fetch('/data/works.json');
  const data = await response.json();
  // dateプロパティで降順にソート（新しい日付が先）
  return data.sort((a: Work, b: Work) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};
