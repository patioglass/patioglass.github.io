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
          <h1 className="text-2xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
            PatioGlass Official Site
          </h1>
          <p className="text-xl md:text-md font-light tracking-wide drop-shadow-lg mb-8">
            ぱちおに関する公式サイトです。「PatioGlass」の活動記録など
          </p>

          {/* SNS Links */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <a
              href="https://x.com/patioglass"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Twitter"
            >
              <span className="text-black text-2xl">𝕏</span>
            </a>
            <a
              href="https://www.pixiv.net/users/2188539"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="Pixiv"
            >
              <span className="text-blue-500 font-bold text-xl">pixiv</span>
            </a>
            <a
              href="https://www.youtube.com/@PatioGlass_Official_Music"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="YouTube"
            >
              <span className="text-red-600 text-2xl">▶</span>
            </a>
            <a
              href="https://patioglass.fanbox.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
              aria-label="FANBOX"
            >
              <span className="text-orange-500 font-bold text-sm">FAN</span>
            </a>
          </div>
        </div>
      </section>
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

      {/* Overview Section - 4 Grid */}
      <section className="container mx-auto px-4 mt-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 relative pb-3 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-35 after:h-1 after:bg-gradient-to-r after:from-slate-400 after:to-pink-400 after:rounded-full">やってること</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">絵・漫画</h3>
                <p className="text-gray-600 leading-relaxed">
                  イラストや漫画の制作。創作百合中心。<br />
                  コミケやコミティアによく出没します。他　CDジャケットなどのイラスト依頼。<br />
                  二次創作を含めたジャンルなどの詳細は
                  <a href="https://profcard.info/u/hM0tVGzI1DhfCkLBQ8YyhnlF7gr2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors">コチラ</a>をご確認ください。
                </p>
              </div>
              <div className="max-w-6xl mx-auto mt-6">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <a className="group aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://amzn.to/3M0cQir" target="_blank">
                    <img
                      src={homeYurikanImg}
                      alt="創作百合短編「百合印の缶詰」シリーズ"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">創作百合短編「百合印の缶詰」シリーズ</p>
                    </div>
                  </a>
                  <a className="group aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://amzn.to/4k4BATw" target="_blank">
                    <img
                      src={homeKisetsugirlImg}
                      alt="創作百合「キセツガール」シリーズ"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">創作百合「キセツガール」シリーズ</p>
                    </div>
                  </a>
                  <a className="group aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://www.pixiv.net/users/2188539" target="_blank">
                    <img
                      src={homePixivImg}
                      alt="他二次創作など（pixiv）"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">他二次創作など（pixiv）</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => handleSeeMore('絵・漫画')}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span>もっとみる</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">プログラミング</h3>
                <p className="text-gray-600 leading-relaxed">
                  Web制作中心(Spring, React etc...)、他chrome拡張などのアプリ開発。要件定義からデザイン、実装、運用まで対応など要相談。
                </p>
              </div>
              <div className="max-w-6xl mx-auto mt-6">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <a className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://patiopatimon.com/adjustimer/" target="_blank">
                    <img
                      src={homeAdjustimerImg}
                      alt="chrome拡張「AdjusTimer」"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">chrome拡張「AdjusTimer」</p>
                    </div>
                  </a>
                  <a className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300" href="https://docs.google.com/presentation/d/1EFu3dJWTUGNSdKJCvr5Zl40QUZea8nP3gxAgpiG3-hg/edit?usp=sharing" target="_blank">
                    <img
                      src={homeSystemImg}
                      alt="在庫管理システム開発事例"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-semibold">在庫管理システム開発事例</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => handleSeeMore('プログラミング')}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span>もっとみる</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-800">音楽</h3>
                <p className="text-gray-600 leading-relaxed">
                  DTMによる音楽制作。GUMIを使ったロック系の曲。しばらく活発ではないですが、いつか動く（と思います）。
                </p>
              </div>
              <div className="max-w-6xl mx-auto mt-6">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_CcGFyjWnS0?si=w9LWHYBFbsDFD9oI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={() => handleSeeMore('音楽')}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span>もっとみる</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0" src={iconImg} />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">ぱちお(patioglass)</h3>
                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">絵・漫画</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">プログラミング</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">音楽</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    「PatioGlass」で活動中。イラストや漫画の制作、Web開発、音楽制作など多岐にわたる分野で活動しています。<br />
                    依頼などございましたらお気軽にご連絡ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 relative pb-3 inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:rounded-full">
            最近の作品
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              {works.slice(0, 3).map((work) => (
                <li key={work.id} className="border-l-4 border-blue-400 pl-4 py-2 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span className="text-sm text-gray-500 font-medium min-w-[100px]">
                          {work.date || '日付未定'}
                        </span>
                        {work.tags && work.tags.length > 0 && (
                          <span className={`inline-block px-2 py-1 text-xs rounded ${getTagColor(work.tags[0])}`}>
                            {work.tags[0]}
                          </span>
                        )}
                        <h3 className="font-bold text-gray-800">{work.title}</h3>

                      </div>
                      <p className="text-sm text-gray-600 mt-1 pl-0 sm:pl-[100px]">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
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
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 py-16">

      </section>
    </div>
  );
};
