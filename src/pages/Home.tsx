import { useEffect } from 'react';
import { useAtom } from 'jotai';
import iconImg from '../assets/icon.webp';
import homeKisetsugirlImg from '../assets/home_kisetsugirl.webp';
import homePixivImg from '../assets/home_pixiv.webp';
import homeYurikanImg from '../assets/home_yurikan.webp';
import { fetchWorks, getTagColor,  worksAtom } from '../store/atoms';

const socialLinks = [
  { label: 'X (Twitter)', description: '@patioglass', href: 'https://x.com/patioglass' },
  { label: 'Bluesky', description: '@patioglass.bsky.social', href: 'https://bsky.app/profile/patioglass.bsky.social' },
  { label: 'pixiv', description: '全年齢向けアカウント', href: 'https://www.pixiv.net/users/2188539' },
  { label: 'pixiv (R-18)', description: '18歳以上の方向け', href: 'https://www.pixiv.net/users/16664908' },
  { label: 'FANBOX', description: 'ブログ・支援サイト', href: 'https://patioglass.fanbox.cc/' },
  { label: 'Youtube', description: 'オリジナル楽曲制作', href: 'https://www.youtube.com/@PatioGlass_Official_Music' }
];

const activityLinks = [
  {
    links: [
      { label: '百合印の缶詰シリーズ', href: 'https://amzn.to/3M0cQir', image: homeYurikanImg },
      { label: 'キセツガールシリーズ', href: 'https://amzn.to/4k4BATw', image: homeKisetsugirlImg },
      { label: '他二次創作など (pixiv)', href: 'https://www.pixiv.net/users/2188539', image: homePixivImg },
    ],
  }
];

export const Home = () => {
  const [works, setWorks] = useAtom(worksAtom);

  useEffect(() => {
    const loadWorks = async () => {
      const data = await fetchWorks();
      setWorks(data);
    };
    loadWorks();
  }, [setWorks]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 mt-10">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-3 mb-10">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
              <div className="text-center mb-8">
                <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-3">About</p>
                <h1 className="text-3xl md:text-4xl font-light tracking-[0.22em] text-gray-800 mb-4">
                  ぱちお (patioglass)
                </h1>
                <p className="mt-4 text-sm text-gray-500 tracking-wide">絵・漫画 / プログラミング / 音楽</p>
              </div>

              <div className="grid lg:grid-cols-[1fr_5fr] sm:grid-cols-1 gap-10 rounded-2xl p-4">
                <img
                  src={iconImg}
                  alt="ぱちお (patioglass)"
                  className="rounded-full object-cover shadow-md ring-2 ring-white w-sm mx-auto"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">PatioGlass 名義で活動中</h2>
                  <p className="text-sm text-gray-500">イラスト、漫画、Web 開発、音楽制作を中心に制作しています。</p>
                  <p className="text-sm text-gray-500">PatioGlass 名義で活動中。百合多め、固定ジャンル概念なしです。</p>
                  <p className="text-sm text-gray-500 mt-2">
                    ご依頼などございましたらお気軽にご連絡ください。
                  </p>
                </div>
              </div>
              <div className="mt-6 text-sm">
                <ul className="text-sm grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
                  {socialLinks.map((link) => (
                    <li key={link.href} className="border-b border-gray-100">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline gap-3 py-3 text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 flex-shrink-0" />
                        <span className="min-w-0 flex-1">
                          <span className="font-semibold text-gray-900 group-hover:text-blue-700">{link.label}</span>
                          <span className="ml-2 text-xs text-gray-500">{link.description}</span>
                        </span>
                        <span className="text-gray-300 group-hover:text-blue-500" aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6">
                <div className="text-center mb-8">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-3">Request</p>
                  <h1 className="font-light tracking-[0.22em] text-gray-800 mb-4">
                    依頼・お問い合わせ
                  </h1>
                  <div className="flex items-center justify-center gap-3 text-gray-300">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                    <span className="h-2 w-2 rounded-full bg-gray-300 shadow-sm" />
                    <span className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  お仕事のご依頼やお問い合わせは、以下の連絡先、またはフォームよりお気軽にご連絡ください。
                </p>

                <p className="text-sm text-gray-500 leading-relaxed">
                  依頼に必要な特記事項や、メールアドレス・Skebリンクはフォーム先にありますのでそちらを参考にしてください。
                </p>

                <div className="space-y-2">
                  <div className="mt-4 text-center">
                    <a
                      href="https://forms.gle/oa3csdsyDuTCVWE58"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-pink-400 bg-pink-500 text-white font-semibold shadow-sm transition-all duration-300 hover:bg-pink-600 hover:border-pink-500 hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <span>ご依頼・お問い合わせフォーム</span>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-gray-600 text-sm text-center">
                    通常1-5営業日以内にご返信いたします
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-8">
                <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-3">News</p>
                <h1 className="font-light tracking-[0.22em] text-gray-800 mb-4">
                  最近の活動
                </h1>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                  <span className="h-2 w-2 rounded-full bg-gray-300 shadow-sm" />
                  <span className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {works.slice(0, 9).map((work) => (
                  <div
                    key={work.id}
                    className="group aspect-[4/3] relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
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
              <div className="text-center mt-8 mb-8">
                <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 mb-3">Series</p>
                <h1 className="font-light tracking-[0.22em] text-gray-800 mb-4">
                  シリーズ
                </h1>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                  <span className="h-2 w-2 rounded-full bg-gray-300 shadow-sm" />
                  <span className="h-px w-12 bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </div>
              </div>
              <div className="flex flex-col">
                {activityLinks.map((section, index) => (
                  <section key={index} className="py-4 first:pt-0 last:pb-0">
                    <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center overflow-hidden rounded-lg shadow hover:shadow-md transition-all hover:scale-[1.02]"
                          >
                            {'image' in link ? (
                              <img src={link.image} alt="" className="w-14 h-14 object-cover flex-shrink-0" />
                            ) : (
                              <div className="w-14 h-14 bg-red-600 flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-sm font-bold">Music</span>
                              </div>
                            )}
                            <div className="flex-1 bg-gray-50 group-hover:bg-gray-100 transition-colors h-14 flex items-center px-3">
                              <span className="text-gray-800 font-medium text-xs leading-tight">{link.label}</span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
