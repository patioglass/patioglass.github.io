import { useNavigate } from 'react-router-dom';
import { useAtom, useSetAtom } from 'jotai';
import { selectedTagAtom, worksAtom, fetchWorks, getTagColor } from '../store/atoms';
import { useEffect } from 'react';
import headerImg from '../assets/header.webp';
import iconImg from '../assets/icon.webp';
import homeYurikanImg from '../assets/home_yurikan.webp';
import homeKisetsugirlImg from '../assets/home_kisetsugirl.webp';
import homePixivImg from '../assets/home_pixiv.webp';
import homeAdjustimerImg from '../assets/home_adjustimer.webp';
import homeSystemImg from '../assets/home_system.webp';


export const Home = () => {
  const navigate = useNavigate();
  const setSelectedTag = useSetAtom(selectedTagAtom);
  const [works, setWorks] = useAtom(worksAtom);

  useEffect(() => {
    const loadWorks = async () => {
      const data = await fetchWorks();
      setWorks(data);
    };
    loadWorks();
  }, [setWorks]);

  const handleSeeMore = (tag: string) => {
    setSelectedTag(tag);
    navigate('/works');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-no-repeat bg-cover bg-top-left text-white py-20 px-4 min-h-[33vh]" style={{ backgroundImage: `url(${headerImg})` }}>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-xl md:text-5xl font-bold mb-5 tracking-tight drop-shadow-xl">
            PatioGlass Official Site
          </h1>
          <p className="text-base md:text-lg font-normal tracking-normal drop-shadow mb-8">
            ぱちおに関する公式サイトです。「PatioGlass」の活動記録など
          </p>
          <div className="mt-10 text-center">
            <a
              href="https://forms.gle/ca1hva36dk2W5MT7A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-500 to-pink-500 hover:from-slate-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>📝</span>
              <span>ご依頼・お問い合わせ</span>
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section - 4 Grid */}
      <section className="container mx-auto px-4 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mb-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4">
                <img
                  src={iconImg}
                  alt="ぱちお(patioglass)"
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">ぱちお(patioglass)</h2>
                  <p className="text-sm text-gray-500">絵・漫画 / プログラミング / 音楽</p>
                </div>
              </div>
              <hr className="border-gray-200 mt-6" />

              <div className="mt-6 text-sm">
                <p className="text-gray-600 leading-relaxed">
                  「PatioGlass」で活動中。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  イラストや漫画の制作、Web開発、音楽制作などの分野で活動しています。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  依頼などございましたらお気軽にご連絡ください。
                </p>

                <p className="text-gray-600 leading-relaxed">
                  百合多め ⚠️固定ジャンル概念ないです。
                </p>
              </div>

              <hr className="border-gray-200 mt-6" />

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href="https://x.com/patioglass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-xl shadow hover:shadow-md transition-all hover:scale-[1.02]"
                  aria-label="Twitter"
                >
                  <div className="w-16 h-16 bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl">𝕏</span>
                  </div>
                  <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-16 flex flex-col justify-center px-4">
                    <span className="text-gray-900 font-semibold text-sm">X (Twitter)</span>
                    <span className="text-gray-400 text-xs">@patioglass</span>
                  </div>
                </a>

                <a
                  href="https://patioglass.fanbox.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-xl shadow hover:shadow-md transition-all hover:scale-[1.02]"
                  aria-label="FANBOX"
                >
                  <div className="w-16 h-16 bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">FAN</span>
                  </div>
                  <div className="flex-1 bg-orange-50 hover:bg-orange-100 transition-colors h-16 flex flex-col justify-center px-4">
                    <span className="text-orange-700 font-semibold text-sm">FANBOX</span>
                    <span className="text-orange-400 text-xs">ブログ・支援サイト</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <a
                  href="https://bsky.app/profile/patioglass.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-xl shadow hover:shadow-md transition-all hover:scale-[1.02]"
                  aria-label="Bluesky"
                >
                  <div className="w-16 h-16 bg-sky-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">bsky</span>
                  </div>
                  <div className="flex-1 bg-sky-50 hover:bg-sky-100 transition-colors h-16 flex flex-col justify-center px-4">
                    <span className="text-sky-700 font-semibold text-sm">Bluesky</span>
                    <span className="text-sky-400 text-xs">@patioglass.bsky.social</span>
                  </div>
                </a>

                <a
                  href="https://www.pixiv.net/users/2188539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-xl shadow hover:shadow-md transition-all hover:scale-[1.02]"
                  aria-label="Pixiv"
                >
                  <div className="w-16 h-16 bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-colors h-16 flex flex-col justify-center px-4">
                    <span className="text-blue-700 font-semibold text-sm">pixiv</span>
                    <span className="text-blue-400 text-xs">全年齢向けアカウント</span>
                  </div>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <a
                  href="https://dlaf.jp/home/dlaf/=/aid/patiopatimon_com/url/https%3A%2F%2Fwww.dlsite.com%2Fhome%2Fcircle%2Fprofile%2F%3D%2Fmaker_id%2FRG32491.html%2F%3Futm_medium%3Daffiliate%26utm_campaign%3Dbnlink%26utm_content%3Dtext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-xl shadow hover:shadow-md transition-all hover:scale-[1.02]"
                  aria-label="DLsite"
                >
                  <div className="w-16 h-16 bg-blue-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">DLsite</span>
                  </div>
                  <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition-colors h-16 flex flex-col justify-center px-4">
                    <span className="text-blue-900 font-semibold text-sm">DLsite</span>
                    <span className="text-blue-400 text-xs">同人誌・ダウンロード販売</span>
                  </div>
                </a>

                <a
                  href="https://www.amazon.co.jp/stores/%E3%81%B1%E3%81%A1%E3%81%8A/author/B0CPJLB5V6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-xl shadow hover:shadow-md transition-all hover:scale-[1.02]"
                  aria-label="Kindle"
                >
                  <div className="w-16 h-16 bg-amber-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">kindle</span>
                  </div>
                  <div className="flex-1 bg-amber-50 hover:bg-amber-100 transition-colors h-16 flex flex-col justify-center px-4">
                    <span className="text-amber-800 font-semibold text-sm">Kindle</span>
                    <span className="text-amber-400 text-xs">電子書籍販売</span>
                  </div>
                </a>
              </div>

              <div className="flex gap-3 mt-3">
                <a
                  href="https://www.pixiv.net/users/16664908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center overflow-hidden rounded-lg border border-red-200 hover:border-red-300 hover:bg-red-50 transition-all hover:scale-[1.01]"
                  aria-label="pixiv R-18"
                >
                  <div className="w-10 h-10 bg-red-100 flex items-center justify-center flex-shrink-0 ml-2 rounded">
                    <span className="text-red-500 font-bold text-xs leading-tight text-center">R18</span>
                  </div>
                  <div className="flex flex-col px-3 py-2">
                    <span className="text-red-500 font-medium text-sm">pixiv（R-18）</span>
                    <span className="text-gray-400 text-xs">⚠️ 18歳以上の方のみ</span>
                  </div>
                </a>

                <a
                  href="https://wavebox.me/wave/4ch4cex1hloef4hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 bg-white border border-pink-200 hover:border-pink-300 hover:bg-pink-50 text-pink-400 text-sm rounded-lg transition-all duration-300 hover:scale-[1.01]"
                >
                  <span>💌</span>
                  <span>匿名感想BOX</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col divide-y divide-gray-100">
                <div className="py-4 first:pt-0">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">絵・漫画</h4>
                  <div className="flex flex-col gap-2">
                    <a href="https://amzn.to/3M0cQir" target="_blank" rel="noopener noreferrer"
                      className="flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <img src={homeYurikanImg} alt="百合印の缶詰" className="w-14 h-14 object-cover flex-shrink-0" />
                      <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                        <span className="text-gray-800 font-medium text-xs leading-tight">創作百合短編「百合印の缶詰」シリーズ</span>
                      </div>
                    </a>
                    <a href="https://amzn.to/4k4BATw" target="_blank" rel="noopener noreferrer"
                      className="flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <img src={homeKisetsugirlImg} alt="キセツガール" className="w-14 h-14 object-cover flex-shrink-0" />
                      <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                        <span className="text-gray-800 font-medium text-xs leading-tight">創作百合「キセツガール」シリーズ</span>
                      </div>
                    </a>
                    <a href="https://www.pixiv.net/users/2188539" target="_blank" rel="noopener noreferrer"
                      className="flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <img src={homePixivImg} alt="pixiv" className="w-14 h-14 object-cover flex-shrink-0" />
                      <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                        <span className="text-gray-800 font-medium text-xs leading-tight">他二次創作など（pixiv）</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="py-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">プログラミング</h4>
                  <div className="flex flex-col gap-2">
                    <a href="https://patiopatimon.com/adjustimer/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <img src={homeAdjustimerImg} alt="AdjusTimer" className="w-14 h-14 object-cover flex-shrink-0" />
                      <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                        <span className="text-gray-800 font-medium text-xs leading-tight">chrome拡張「AdjusTimer」</span>
                      </div>
                    </a>
                    <a href="https://docs.google.com/presentation/d/1EFu3dJWTUGNSdKJCvr5Zl40QUZea8nP3gxAgpiG3-hg/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
                      className="flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <img src={homeSystemImg} alt="在庫管理システム" className="w-14 h-14 object-cover flex-shrink-0" />
                      <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                        <span className="text-gray-800 font-medium text-xs leading-tight">在庫管理システム開発事例</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="py-4 last:pb-0">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">音楽</h4>
                  <div className="flex flex-col gap-2">
                    <a href="https://www.youtube.com/@PatioGlass_Official_Music" target="_blank" rel="noopener noreferrer"
                      className="flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <div className="w-14 h-14 bg-red-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl">▶</span>
                      </div>
                      <div className="flex-1 bg-gray-50 hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                        <span className="text-gray-800 font-medium text-xs leading-tight">楽曲制作・ボカロオリジナル</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Recent Works Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-gray-800 relative pb-2 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:rounded-full">
            最近の更新
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {works.slice(0, 6).map((work) => (
              <div 
                key={work.id} 
                className="group aspect-square relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                onClick={() => {
                  if (work.links && work.links.length > 0) {
                    window.open(work.links[0].url, '_blank');
                  }
                }}
              >
                {work.imageUrl ? (
                  <img
                    src={`/images/${work.imageUrl.split('=').pop()}.webp`}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-400">{work.title}</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="space-y-2">
                    {work.date && (
                      <p className="text-gray-200 text-xs font-medium">{work.date}</p>
                    )}
                    {work.tags && work.tags.length > 0 && (
                      <span className={`inline-block px-2 py-1 text-xs rounded font-medium w-fit ${getTagColor(work.tags[0])}`}>
                        {work.tags[0]}
                      </span>
                    )}
                    <h3 className="text-white font-bold text-sm leading-tight">{work.title}</h3>
                    {work.description && (
                      <p className="text-gray-200 text-xs leading-snug line-clamp-2">{work.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => handleSeeMore('すべて')}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>すべての作品を見る</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
